// src/components/CampusMap.tsx
"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// ✅ Avoid Leaflet default icon image issues on Next/Vercel by using a div icon
const dotIcon = L.divIcon({
  className: "",
  html: `<div style="
    width:14px;height:14px;
    background:#34d399;
    border:2px solid rgba(0,0,0,0.35);
    border-radius:999px;
    box-shadow: 0 0 0 6px rgba(52,211,153,0.15);
  "></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

type Place = {
  id: string;
  name: string;
  desc: string;
  lat: number;
  lng: number;
};

const places: Place[] = [
  // ✅ Replace these with your real points later
  { id: "main", name: "Main Campus", desc: "KTMU (placeholder)", lat: 42.836547, lng: 74.577128 },
  { id: "stadium", name: "Stadium", desc: "Sports area (placeholder)", lat: 42.8381, lng: 74.5729 },
];

export default function CampusMap() {
  const center: [number, number] = [42.836547, 74.577128];

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900">
      <div style={{ height: 520, width: "100%" }}>
        <MapContainer
          center={center}
          zoom={16}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            // ✅ FREE “flat” map tiles (OSM)
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {places.map((p) => (
            <Marker key={p.id} position={[p.lat, p.lng]} icon={dotIcon}>
              <Popup>
                <div style={{ minWidth: 180 }}>
                  <div style={{ fontWeight: 700 }}>{p.name}</div>
                  <div style={{ marginTop: 6 }}>{p.desc}</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="px-4 py-3 text-xs text-slate-400">
        Tip: Use two fingers on trackpad to zoom, drag to move.
      </div>
    </div>
  );
}
