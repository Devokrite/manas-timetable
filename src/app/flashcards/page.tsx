import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const SUBJECTS = [
  { id: "economics", label: "Economics" },
  { id: "accounting", label: "Accounting" },
  { id: "management", label: "Management" },
];

export default function FlashcardsPage() {
  return (
    <div className="flex">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Collapsible sidebar on mobile */}
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
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 py-6 space-y-6">
          <h1 className="text-2xl font-semibold tracking-tight">Flashcards</h1>
          <p className="text-sm text-slate-300">
            Choose a subject. Later we&apos;ll generate flashcards from your
            lessons and presentations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {SUBJECTS.map((s) => (
              <Link
                key={s.id}
                href={`/flashcards/${s.id}`}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm font-medium text-slate-100 hover:bg-slate-800 hover:border-slate-600 transition flex items-center justify-center text-center"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
