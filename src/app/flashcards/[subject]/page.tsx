import Link from "next/link";
import { notFound } from "next/navigation";
import { SUBJECTS } from "@/data/flashcards";

// FIX: 'params' is a Promise in Next.js 15
export default async function SubjectPage(props: { params: Promise<{ subject: string }> }) {
  const params = await props.params;
  const subjectId = params.subject;
  const subject = SUBJECTS[subjectId];

  if (!subject) {
    return notFound();
  }

  const chaptersList = Object.entries(subject.chapters).map(([id, data]) => ({
    id,
    ...data,
  }));

  return (
    // FIX: Added 'pb-24' for mobile scrolling safety
    <div className="p-6 md:p-10 max-w-5xl mx-auto pb-24">
      {/* Back Button */}
      <Link 
        href="/flashcards"
        className="inline-flex items-center text-sm text-slate-400 hover:text-emerald-400 mb-6 transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        Back to Subjects
      </Link>

      <header className="mb-8 border-b border-slate-800 pb-8">
        <h1 className="text-3xl font-bold text-slate-100 mb-2">{subject.name}</h1>
        <p className="text-slate-400">Select a chapter to begin</p>
      </header>
      
      <div className="grid gap-4">
        {chaptersList.map((chapter) => (
          <Link 
            key={chapter.id} 
            href={`/flashcards/${subjectId}/${chapter.id}`}
            className="group block p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                  {chapter.name}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  {chapter.flashcards.length} cards
                </p>
              </div>
              <span className="text-slate-600 group-hover:translate-x-1 transition-transform group-hover:text-emerald-500">
                Start &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
