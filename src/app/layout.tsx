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
      {/* FIX: Changed 'h-screen' to 'h-[100dvh]' 
          This fixes the issue where mobile address bars cover the bottom content.
      */}
      <body className={`${inter.className} flex h-[100dvh] overflow-hidden bg-slate-950 text-slate-100`}>
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto relative w-full">
          {children}
        </main>
        
      </body>
    </html>
  );
}
