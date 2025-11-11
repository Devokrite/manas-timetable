import Link from "next/link";
import Timetable from "../../../components/Timetable";
import { politeFetch } from "../../../lib/fetchers";
import { parseDepartmentHtml } from "../../../lib/parse";

export const revalidate = 21600; // 6h

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  const urls = [
    `https://timetable.manas.edu.kg/department-printer/${id}`,
    `http://timetable.manas.edu.kg/department-printer/${id}`,
  ];

  let html = "";
  for (const u of urls) {
    try {
      html = await politeFetch(u);
      if (html) break;
    } catch {}
  }

  const data = parseDepartmentHtml(html || "");
  const title = data?.meta?.departmentName?.trim()
    ? data.meta.departmentName.trim()
    : `Department #${id}`;

  return (
    <main className="min-h-screen p-6">
      {/* Back to select */}
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

