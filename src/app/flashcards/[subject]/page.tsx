import Sidebar from "@/components/Sidebar";
import { economicsKgFlashcards } from "@/flashcards/economics_kg";
import { accountingKgFlashcards } from "@/flashcards/accounting_kg";
import { managementKgFlashcards } from "@/flashcards/management_kg";

// Define a type for consistency across subjects
export interface Flashcard {
  id: string;
  topic: string;
  question: string;
  answer: string;
}

// Map each subject slug to its flashcards array
const flashcardsMap: Record<string, Flashcard[]> = {
  economics: economicsKgFlashcards,
  accounting: accountingKgFlashcards,
  management: managementKgFlashcards,
};

// Human‑readable titles per subject
const titleMap: Record<string, string> = {
  economics: "Экономика",
  accounting: "Бухгалтердик эсеп",
  management: "Менеджмент",
};

interface PageProps {
  params: { subject: string };
}

export default function FlashcardsSubjectPage({ params }: { params: { subject: string } }) {
  const { subject } = params;
  // Pick flashcards for the current subject; empty array if not found
  const flashcards = flashcardsMap[subject] ?? [];
  const title = titleMap[subject] ?? subject;

  return (
    <div className="flex">
      {/* Left sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {/* Collapsible sidebar on small screens */}
      <div className="md:hidden block px-4 pt-4">
        <details className="bg-slate-900/90 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden ring-1 ring-slate-700">
          <summary className="cursor-pointer select-none px-4 py-3 text-base font-medium text-white flex items-center justify-between">
            <span className="text-xl">☰</span>
          </summary>
          <div className="collapsible-content px-4 py-4 space-y-4">
            <Sidebar />
          </div>
        </details>
      </div>
      {/* Main content */}
      <main className="flex-1 bg-slate-950 text-slate-50">
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 py-6 space-y-6">
          <h1 className="text-2xl font-semibold">
            {title} — Флэшкарталар
          </h1>
          {flashcards.length === 0 ? (
            <p className="text-slate-400">
              Бул предмет үчүн флэшкарталар азырынча кошула элек.
              Сабак материалдарын жиберсеңиз — түзүп берем.
            </p>
          ) : (
            <div className="space-y-4">
              {flashcards.map((card) => (
                <details
                  key={card.id}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-4"
                >
                  <summary className="cursor-pointer text-lg font-medium text-emerald-400">
                    {card.question}
                  </summary>
                  <p className="mt-2 text-slate-200">{card.answer}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
