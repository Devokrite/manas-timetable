"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const DEPTS = [
  { id: 1, name: "Bilgisayar Mühendisliği" },
  { id: 7, name: "İşletme" },
  { id: 10, name: "Biyoloji" },
  { id: 191, name: "Elektrik-Elektronik Müh." },
];

export default function Sidebar() {
  const pathname = usePathname();
  const activeId = pathname?.match(/\/departments\/(\d+)/)?.[1];
  const onMenu = pathname?.startsWith("/menu");
  const onFlashcards = pathname?.startsWith("/flashcards");

  return (
    <aside className="w-[260px] shrink-0 bg-slate-950/40 border-r border-slate-800/70 p-4 md:p-5 sticky top-0 h-dvh flex flex-col">
      <div className="mb-4 px-1 space-y-2">
        <div className="text-xs uppercase tracking-wider text-slate-400 mb-2">
          Timetables
        </div>
        {DEPTS.map((d) => {
          const active = activeId === String(d.id);
          return (
            <Link
              key={d.id}
              href={`/departments/${d.id}`}
              className={cn("nav-btn", active && "nav-btn--active")}
            >
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/80 shadow" />
              <span className="truncate">{d.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 border-t border-slate-800/60 pt-4 px-1 space-y-2">
        <Link
          href="/menu"
          className={cn("nav-btn", onMenu && "nav-btn--active")}
        >
          🍽️ Cafeteria Menu
        </Link>

        <Link
          href="/flashcards"
          className={cn("nav-btn", onFlashcards && "nav-btn--active")}
        >
          📚 Flashcards
        </Link>
      </div>

      <div className="mt-auto border-t border-slate-800/60 pt-4 px-1">
        <div className="text-xs text-slate-400">Settings</div>
      </div>
    </aside>
  );
}
