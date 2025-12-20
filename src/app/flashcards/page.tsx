import Link from "next/link";
import { flashcards } from "@/data/flashcards";

export default function FlashcardsPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Flashcards</h1>
        <p className="text-slate-400">Select a subject to start practicing</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flashcards.map((subject) => (
          <Link 
            key={subject.id} 
            href={`/flashcards/${subject.id}`}
            className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{subject.icon}</span>
                <span className="text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded-full">
                  {subject.chapters.length} Chapters
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                {subject.title}
              </h2>
              <p className="text-sm text-slate-400 line-clamp-2">
                {subject.description}
              </p>
            </div>
            
            {/* Hover Effect Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
        ))}
      </div>
    </div>
  );
}
