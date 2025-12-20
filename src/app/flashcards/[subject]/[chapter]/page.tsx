import { notFound } from "next/navigation";
import Link from "next/link";
import FlashcardViewer from "@/components/FlashcardViewer"; 
import { SUBJECTS } from "@/data/flashcards";

export default async function ChapterPage(props: { params: Promise<{ subject: string; chapter: string }> }) {
  const params = await props.params;
  const { subject: subjectId, chapter: chapterId } = params;

  const subject = SUBJECTS[subjectId];
  const chapter = subject?.chapters[chapterId];

  if (!subject || !chapter) {
    return notFound();
  }

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-6 shrink-0">
        <Link 
          href={`/flashcards/${subjectId}`}
          className="text-sm text-slate-400 hover:text-white flex items-center gap-2"
        >
          &larr; {subject.name}
        </Link>
        <div className="text-center">
          <h1 className="text-lg font-semibold text-slate-100">{chapter.name}</h1>
          <span className="text-xs text-slate-500">{chapter.flashcards.length} Cards</span>
        </div>
        <div className="w-20" /> {/* Spacer for centering */}
      </div>

      {/* The Flashcard Player */}
      <div className="flex-1 min-h-0">
        <FlashcardViewer 
          cards={chapter.flashcards} 
          title={chapter.name} 
        />
      </div>
    </div>
  );
}
