import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { SUBJECTS } from "@/data/flashcards";
import { notFound } from "next/navigation";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const data = SUBJECTS[subject];

  if (!data) return notFound();

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 bg-slate-950 text-slate-50 p-6 md:p-10">
        <div className="mb-8">
          <Link
            href="/flashcards"
            className="text-xs text-slate-500 hover:text-slate-300 mb-2 inline-block"
          >
            ← Back to Subjects
          </Link>
          <h1 className="text-2xl font-semibold">{data.name}</h1>
        </div>

        <div className="space-y-3">
          {Object.entries(data.chapters).map(([key, chapter]) => (
            <Link
              key={key}
              href={`/flashcards/${subject}/${key}`}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition"
            >
              <span className="font-medium text-slate-300">
                {chapter.name}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-500">
                {(chapter.flashcards || []).length} cards
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
