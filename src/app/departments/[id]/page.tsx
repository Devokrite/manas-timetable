import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import Timetable from "../../../components/Timetable";
import { politeFetch } from "../../../lib/fetchers";
import { parseDepartmentHtml } from "../../../lib/parse";

export const runtime = "nodejs";
export const dynamicParams = false;
export const revalidate = false;

// Pre-render the 4 pages
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

  // 1) local static first
  let data = await readStaticJSON(id);

  // 2) fallback (shouldn't happen for our four)
  if (!data) {
    const html = await politeFetch(`https://timetable.manas.edu.kg/department-printer/${id}`);
    data = parseDepartmentHtml(html || "");
  }

  const title = data?.meta?.departmentName?.trim() || `Department #${id}`;

  return (
    <main className="min-h-screen py-10">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-6">
          <Link href="/select" className="btn-ghost">← Back</Link>
          <h1 className="text-2xl font-semibold text-center flex-1">{title}</h1>
          <div className="w-14" /> {/* spacer */}
        </div>

        <div className="card overflow-hidden">
          <Timetable data={data} deptId={id} />
        </div>
      </div>
    </main>
  );
}
