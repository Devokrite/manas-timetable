import { NextResponse } from "next/server";
import { politeFetch } from "../../../lib/fetchers";
import { parseDepartmentHtml } from "../../../lib/parse";

type Entry = { id: number; name: string; grade?: number };

// *** Only first grade ***
const ONLY_GRADE = 1;

async function fetchOne(id: number): Promise<Entry | null> {
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
      const grade = parsed.meta?.grade;
      if (name && grade === ONLY_GRADE) {
        return { id, name, grade };
      }
    } catch { /* try next */ }
  }
  return null;
}

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const start = Math.max(1, parseInt(url.searchParams.get("start") || "1", 10));
  const limit = Math.max(1, Math.min(50, parseInt(url.searchParams.get("limit") || "20", 10)));
  const end = Math.min(175, start + limit - 1);

  const ids = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  // modest concurrency
  const CONC = 8;
  const out: Entry[] = [];
  for (let i = 0; i < ids.length; i += CONC) {
    const chunk = ids.slice(i, i + CONC);
    const results = await Promise.all(chunk.map(fetchOne));
    for (const r of results) if (r) out.push(r);
  }

  // stable sort
  out.sort((a, b) => a.name.localeCompare(b.name));

  return NextResponse.json(
    { items: out, start, end, total: 175, grade: ONLY_GRADE },
    { headers: { "Cache-Control": "s-maxage=600" } }
  );
}

