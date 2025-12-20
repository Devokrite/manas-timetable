import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { SUBJECTS } from "@/data/flashcards";

export const dynamic = "force-dynamic";

export default function FlashcardsPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 bg-slate-950 text-slate-50 p-6 md:p-10">
        <div className="mb-6 flex flex-col items-start gap-4">
          <Link 
            href="/" 
            className="text-xs font-medium text-slate-500 hover:text-emerald-400 transition-colors flex items-center gap-1"
          >
            ← Back to Timetable
          </Link>
          <h1 className="text-2xl font-semibold">Flashcards</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(SUBJECTS).map(([key, subject]) => (
            <Link
              key={key}
              href={`/flashcards/${key}`}
              className="block p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition group"
            >
              <h2 className="text-lg font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
                {subject.name}
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                {Object.keys(subject.chapters).length} Chapters
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
