import Sidebar from "@/components/Sidebar";
import FlashcardViewer from "@/components/FlashcardViewer";
import { SUBJECTS } from "@/data/flashcards";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ subject: string; chapter: string }>;
}) {
  const { subject, chapter } = await params;
  
  const subjectData = SUBJECTS[subject];
  if (!subjectData) return notFound();

  const chapterData = subjectData.chapters[chapter];
  if (!chapterData) return notFound();

  const cards = chapterData.flashcards || [];

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 bg-slate-950 text-slate-50 p-6 md:p-10 flex flex-col">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <Link
              href={`/flashcards/${subject}`}
              className="text-xs text-slate-500 hover:text-slate-300 mb-1 inline-block"
            >
              ← Back to {subjectData.name}
            </Link>
            <h1 className="text-xl font-semibold text-slate-200">
              {chapterData.name}
            </h1>
          </div>
        </header>

        <div className="flex-1 flex flex-col justify-center pb-20">
          <FlashcardViewer cards={cards} />
        </div>
      </main>
    </div>
  );
}
