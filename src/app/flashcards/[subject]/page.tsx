import Sidebar from "@/components/Sidebar";

interface PageProps {
  params: {
    subject: string;
  };
}

const SUBJECT_TITLES: Record<string, string> = {
  economics: "Economics",
  accounting: "Accounting",
  management: "Management",
};

export default function FlashcardsSubjectPage({ params }: PageProps) {
  const raw = params.subject;
  const title = SUBJECT_TITLES[raw] ?? raw;

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
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 py-6 space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            {title} Flashcards
          </h1>
          <p className="text-sm text-slate-300">
            Here we will show flashcards generated from your {title.toLowerCase()}{" "}
            lessons and presentations.
          </p>
          <p className="text-sm text-slate-400">
            When you&apos;re ready, send me your {title.toLowerCase()} files
            (presentations, notes, PDFs), and I&apos;ll help you build the
            actual flashcards UI and logic.
          </p>
        </div>
      </main>
    </div>
  );
}
