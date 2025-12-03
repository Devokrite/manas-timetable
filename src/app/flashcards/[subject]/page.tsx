import Sidebar from "@/components/Sidebar";
import { economicsKgFlashcards, Flashcard } from "@/flashcards/economics_kg";

interface PageProps {
  params: { subject: string };
}

export default function FlashcardsSubjectPage({ params }: PageProps) {
  const { subject } = params;

  const titleMap: Record<string, string> = {
    economics: "Экономика",
    accounting: "Бухгалтердик эсеп",
    management: "Менеджмент",
  };

  const title = titleMap[subject] ?? subject;

  // ✅ Явно указываем тип
  const flashcards: Flashcard[] =
    subject === "economics" ? economicsKgFlashcards : [];

  return (
    <div className="flex">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile sidebar */}
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

      <main className="flex-1 bg-slate-950 text-slate-50">
        <div className="mx-auto w/full max-w-3xl px-6 sm:px-8 py-6 space-y-6">
          <h1 className="text-2xl font-semibold">{title} — Флэшкарталар</h1>

          {flashcards.length === 0 ? (
            <p className="text-slate-400">
              Бул предмет үчүн флэшкарталар азырынча кошула элек. Сабак
              материалдарын жиберсеңиз — түзүп берем.
            </p>
          ) : (
            <div classN
