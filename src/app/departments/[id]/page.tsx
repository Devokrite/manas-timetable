import path from "path";
import fs from "fs/promises";
import Timetable from "../../../components/Timetable";
import { politeFetch } from "../../../lib/fetchers";
import { parseDepartmentHtml } from "../../../lib/parse";

export const runtime = "nodejs";
export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "7" }, { id: "10" }, { id: "191" }];
}

async function readStaticJSON(id: string) {
  try {
    const p = path.join(process.cwd(), "public", "departments", `${id}.json`);
    const txt = await fs.readFile(p, "utf-8");
    return JSON.parse(txt);
  } catch { return null; }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let data = await readStaticJSON(id);
  if (!data) {
    const html = await politeFetch(`https://timetable.manas.edu.kg/department-printer/${id}`);
    data = parseDepartmentHtml(html || "");
  }
  const title = data?.meta?.departmentName?.trim() || `Department #${id}`;

  return (
    <main className="min-h-screen w-full">
      <header className="px-5 md:px-8 py-5 border-b border-slate-800/70 bg-slate-950/40">
        <div className="flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
          <div className="text-xs text-slate-400">1. sınıf</div>
        </div>
      </header>

      <section className="container-slim py-6">
        <Timetable data={data} deptId={id} />
      </section>
    </main>
  );
}
