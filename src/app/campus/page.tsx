// src/app/campus/page.tsx
import dynamic from "next/dynamic";

// ⛔ IMPORTANT: disable SSR for Leaflet map
const CampusMap = dynamic(() => import("@/components/CampusMap"), {
  ssr: false,
});

export default function CampusPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-2">Campus Map</h1>
      <p className="text-slate-300 mb-4">
        Drag to move • Scroll to zoom
      </p>

      <CampusMap />
    </div>
  );
}
