"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutGrid, 
  Utensils, 
  Building2, 
  BookOpen, 
  Library
} from "lucide-react";

// You can update this constant whenever you make changes
const RECENT_UPDATE = {
  date: "20th December",
  message: "Added Chapter 11 to Management"
};

const menuItems = [
  {
    title: "Timetable",
    href: "/",
    icon: LayoutGrid,
  },
  {
    title: "Menu",
    href: "/menu",
    icon: Utensils,
  },
  {
    title: "Departments",
    href: "/departments/1", // Default to first dept
    icon: Building2,
  },
  {
    title: "Flashcards",
    href: "/flashcards",
    icon: Library,
  },
  {
    title: "Catalog",
    href: "/catalog", // Assuming you might have a catalog page or similar
    icon: BookOpen,
    disabled: true // Example of disabled item
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 flex flex-col flex-shrink-0 sticky top-0">
      <div className="p-6">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Manas Timetable
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          if (item.disabled) return null;
          
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          
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
      <div className="p-4 m-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
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
