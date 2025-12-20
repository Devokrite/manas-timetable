import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar"; // <--- SIDEBAR IS HERE
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
      {/* flex: Side-by-side layout
         h-screen: Full height 
         overflow-hidden: No double scrollbars
      */}
      <body className={`${inter.className} flex h-screen overflow-hidden bg-slate-950 text-slate-100`}>
        
        {/* SIDEBAR (Left Panel) */}
        <Sidebar />

        {/* MAIN CONTENT (Right Panel) */}
        <main className="flex-1 overflow-y-auto relative w-full">
          {children}
        </main>
        
      </body>
    </html>
  );
}
