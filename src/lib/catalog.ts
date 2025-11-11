import { politeFetch } from "./fetchers";
import { parseDepartmentHtml } from "./parse";

export type CatalogEntry = { id: number; name: string; grade?: number };

const CACHE_TTL = 1000 * 60 * 60 * 6; // 6 hours
let cached: { at: number; data: CatalogEntry[] } | null = null;

async function fetchOne(id: number): Promise<CatalogEntry | null> {
  const urls = [
    `https://timetable.manas.edu.kg/department-printer/${id}`,
    `http://timetable.manas.edu.kg/department-printer/${id}`,
  ];
  for (const u of urls) {
    try {
      const html = await politeFetch(u);
      if (!html) continue;
      const parsed = parseDepartmentHtml(html);
      const name = parsed.meta?.departmentName?.trim();
      if (name) return { id, name, grade: parsed.meta?.grade };
    } catch {
      // try next URL
    }
  }
  return null;
}

export async function getCatalog(): Promise<CatalogEntry[]> {
  const now = Date.now();
  if (cached && now - cached.at < CACHE_TTL) return cached.data;

  const ids = Array.from({ length: 175 }, (_, i) => i + 1);
  const batchSize = 8; // polite concurrency
  const out: CatalogEntry[] = [];

  for (let i = 0; i < ids.length; i += batchSize) {
    const chunk = ids.slice(i, i + batchSize);
    const results = await Promise.all(chunk.map(fetchOne));
    for (const r of results) if (r) out.push(r);
    await new Promise((r) => setTimeout(r, 200)); // tiny delay between batches
  }

  // sort by grade (unknown at end) then name
  out.sort(
    (a, b) => (a.grade ?? 99) - (b.grade ?? 99) || a.name.localeCompare(b.name)
  );

  cached = { at: now, data: out };
  return out;
}

