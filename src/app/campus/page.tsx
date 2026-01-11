// src/app/campus/page.tsx
import CampusMap from "@/components/CampusMap";

export default function CampusPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-2">Campus Map</h1>
      <p className="text-slate-300 mb-4">
        Pan and zoom like Google Maps (Leaflet).
      </p>
      <CampusMap />
    </div>
  );
}
