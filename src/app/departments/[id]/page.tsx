// src/app/departments/[id]/page.tsx
import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import Timetable from "../../../components/Timetable";
import { politeFetch } from "../../../lib/fetchers";
import { parseDepartmentHtml } from "../../../lib/parse";

export const runtime = "nodejs";
export const dynamicParams = false;        // only build params we declare below
export const revalidate = false;           // fully static (no ISR)

// the 4 pages we want to be fully static
export function generateStaticParams() {
  return [{ id: "1" }, { id: "7" }, { id: "10" }, { id: "191" }];
}

async function readStaticJSON(id: string) {
  try {
    const p = path.join(process.cwd(), "public", "departments", `${id}.json`);
    const txt = await fs.readFile(p, "utf-8");
    return JSON.parse(txt);
  } catch {
    return null;
  }
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  // 1) Try local static JSON (build-time)
  let data = await readStaticJSON(id);

  // 2) Fallback only if file missing (won’t happen for our 4 pages)
  if (!data) {
    const html = await politeFetch(`https://timetable.manas.edu.kg/department-printer/${id}`);
    data = parseDepartmentHtml(html || "");
  }

  const title = data?.meta?.departmentName?.trim() || `Department #${id}`;

  return (
    <main className="min-h-screen p-6">
      <div className="mb-3">
        <Link href="/select" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border hover:border-white/40 bg-white/5 text-sm">
          ← Back
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <Timetable data={data} deptId={id} />
    </main>
  );
}
