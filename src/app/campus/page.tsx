"use client";

import dynamic from "next/dynamic";

const CampusMap = dynamic(() => import("@/components/CampusMap"), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-slate-300">
      Loading map…
    </div>
  ),
});

export default function CampusPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-2">Campus Map</h1>
      <p className="text-slate-300 mb-4">Drag to move • Scroll to zoom</p>
      <CampusMap />
    </div>
  );
}
