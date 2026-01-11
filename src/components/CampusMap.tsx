"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Fix default Leaflet marker icons in Next.js
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: (markerIcon2x as unknown as { src: string }).src,
  iconUrl: (markerIcon as unknown as { src: string }).src,
  shadowUrl: (markerShadow as unknown as { src: string }).src,
});

type CampusPlace = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  short?: string;
};

const PLACES: CampusPlace[] = [
  { id: "saha", name: "SAHA", lat: 42.834673, lng: 74.572489, short: "Building 1" },
  { id: "myo", name: "MYO", lat: 42.836278, lng: 74.570869, short: "Building 2" },
  { id: "theology", name: "Theology Faculty", lat: 42.837193, lng: 74.570442, short: "Building 3" },
  { id: "economics", name: "Economics Faculty", lat: 42.83522, lng: 74.575177, short: "Building 4" },
  { id: "communications", name: "Communications Faculty", lat: 42.834641, lng: 74.575219, short: "Building 5" },
  { id: "engineering", name: "Engineering Faculty", lat: 42.833347, lng: 74.575745, short: "Building 6" },
  { id: "rectorate", name: "Rectorate", lat: 42.833595, lng: 74.57619, short: "Building 7" },
  { id: "sport", name: "Sport Faculty", lat: 42.837289, lng: 74.575713, short: "Building 8" },
  { id: "bdorm", name: "B Dormitory (B-Block)", lat: 42.835326, lng: 74.572757, short: "Building 9" },
  { id: "cdorm", name: "C Dormitory (C-Block)", lat: 42.835656, lng: 74.5717, short: "Building 10" },
  { id: "canteen", name: "Canteen / Buffet", lat: 42.835829, lng: 74.574624, short: "Building 11" },
  { id: "cafeteria", name: "Cafeteria", lat: 42.836293, lng: 74.573878, short: "Building 12" },
  { id: "medical", name: "Medical Center", lat: 42.836203, lng: 74.572859, short: "Building 13" },
  { id: "adorm", name: "A Dormitory (A-Block)", lat: 42.831907, lng: 74.575267, short: "Building 14" },
];

// Center map roughly in the middle of campus
const CENTER: [number, number] = [42.8354, 74.5739];

export default function CampusMap() {
  return (
    <div className="w-full">
      <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900">
        <MapContainer
          center={CENTER}
          zoom={16}
          scrollWheelZoom={true}
          style={{ height: "520px", width: "100%" }}
        >
          {/* ✅ Satellite-like tiles (free).
              If you already have a satellite tile URL in your project, replace the url below with yours. */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {PLACES.map((p) => (
            <Marker key={p.id} position={[p.lat, p.lng]}>
              <Popup>
                <div style={{ minWidth: 180 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{p.name}</div>
                  {p.short && <div style={{ fontSize: 12, opacity: 0.8 }}>{p.short}</div>}
                  <div style={{ fontSize: 11, opacity: 0.7, marginTop: 6 }}>
                    {p.lat.toFixed(6)}, {p.lng.toFixed(6)}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="text-sm text-slate-400 mt-3">
        Tip: Drag to move • Scroll to zoom • Click a marker to see the building name
      </div>
    </div>
  );
}
