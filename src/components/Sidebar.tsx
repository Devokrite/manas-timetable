"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Inline SVG Icons
const UtensilsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

const Building2Icon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

const LibraryIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m16 6 4 14" />
    <path d="M12 6v14" />
    <path d="M8 8v12" />
    <path d="M4 4v16" />
  </svg>
);

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

// You can update this constant whenever you make changes
const RECENT_UPDATE = {
  date: "20th December",
  message: "Added Chapter 11 to Management"
};

const menuItems = [
  {
    title: "Menu",
    href: "/menu",
    icon: UtensilsIcon,
  },
  {
    title: "Departments",
    href: "/departments", // Points to the listing page
    icon: Building2Icon,
  },
  {
    title: "Flashcards",
    href: "/flashcards",
    icon: LibraryIcon,
  },
  {
    title: "Catalog",
    href: "/catalog", 
    icon: BookOpenIcon,
    disabled: true
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 flex flex-col flex-shrink-0 sticky top-0 overflow-y-auto">
      <div className="p-6">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Manas Timetable
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          if (item.disabled) return null;
          
          // Simplified active logic
          const isActive = pathname.startsWith(item.href);
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-emerald-500/10 text-emerald-400 font-medium" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                isActive ? "text-emerald-400" : "text-slate-500 group-hover:text-slate-300"
              )} />
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Recent Updates Footer */}
      <div className="p-4 m-4 rounded-xl bg-slate-800/50 border border-slate-700/50 mt-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
            Recent Update
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          <span className="text-emerald-400 font-medium">{RECENT_UPDATE.date}:</span> {RECENT_UPDATE.message}
        </p>
      </div>
    </aside>
  );
}
