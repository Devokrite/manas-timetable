import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manas Timetable",
  description: "Fast timetable viewer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 1. 'flex': Puts Sidebar and Main Content side-by-side 
         2. 'h-screen': Forces the app to fill the window height 
         3. 'overflow-hidden': Prevents double scrollbars
      */}
      <body className={`${inter.className} flex h-screen overflow-hidden bg-slate-950 text-slate-100`}>
        
        {/* Sidebar sits here. It stays fixed on left. */}
        <Sidebar />

        {/* Main Content Area:
           1. 'flex-1': Takes up all remaining space next to sidebar
           2. 'overflow-y-auto': Allows ONLY this part to scroll
        */}
        <main className="flex-1 overflow-y-auto relative w-full">
          {children}
        </main>
        
      </body>
    </html>
  );
}
