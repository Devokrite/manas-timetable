import Link from "next/link";
import { SUBJECTS } from "@/data/flashcards";

// Helper to assign icons based on the subject ID
const getIcon = (id: string) => {
  switch (id) {
    case 'eco': return '💰';
    case 'man': return '👔';
    case 'acc': return '📊';
    case 'law': return '⚖️';
    default: return '📚';
  }
};
export default function FlashcardsPage() {
  // ... (your existing subjectsList logic) ...

  return (
    /* FIX: Added 'pb-24' (padding bottom)
       This ensures the last item is high enough to be seen easily.
    */
    <div className="p-6 md:p-10 pb-24 max-w-7xl mx-auto">
      <header className="mb-8">
        {/* ... header content ... */}
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ... your list mapping ... */}
      </div>
    </div>
  );
}

export default function FlashcardsPage() {
  // Convert the SUBJECTS object into an array for the loop
  const subjectsList = Object.entries(SUBJECTS).map(([id, data]) => ({
    id,
    ...data,
    icon: getIcon(id),
    chapterCount: Object.keys(data.chapters).length
  }));

  return (
    <div className="p-6 md:p-10 pb-24 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Flashcards</h1>
        <p className="text-slate-400">Select a subject to start practicing</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjectsList.map((subject) => (
          <Link 
            key={subject.id} 
            href={`/flashcards/${subject.id}`}
            className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{subject.icon}</span>
                <span className="text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded-full">
                  {subject.chapterCount} Chapters
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                {subject.name}
              </h2>
              <p className="text-sm text-slate-400 line-clamp-2">
                Practice {subject.name} questions and answers.
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
