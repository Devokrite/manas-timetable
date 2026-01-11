"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icons (required in Next.js)

const places = [
  { name: "SAHA", lat: 42.834673, lng: 74.572489 },
  { name: "MYO", lat: 42.836278, lng: 74.570869 },
  { name: "Theology Faculty", lat: 42.837193, lng: 74.570442 },
  { name: "Economics Faculty", lat: 42.83522, lng: 74.575177 },
  { name: "Communications Faculty", lat: 42.834641, lng: 74.575219 },
  { name: "Engineering Faculty", lat: 42.833347, lng: 74.575745 },
  { name: "Rectorate", lat: 42.833595, lng: 74.57619 },
  { name: "Sport Faculty", lat: 42.837289, lng: 74.575713 },
  { name: "B Dormitory", lat: 42.835326, lng: 74.572757 },
  { name: "C Dormitory", lat: 42.835656, lng: 74.5717 },
  { name: "Canteen", lat: 42.835829, lng: 74.574624 },
  { name: "Cafeteria", lat: 42.836293, lng: 74.573878 },
  { name: "Medical Center", lat: 42.836203, lng: 74.572859 },
  { name: "A Dormitory", lat: 42.831907, lng: 74.575267 },
];

export default function CampusMap() {
  useEffect(() => {
    // Fix default icon pa

    const map = L.map("campus-map", {
      center: [42.8354, 74.5739],
      zoom: 16,
      zoomControl: true,
    });

    // 🛰️ Satellite-style tiles (FREE)
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "Tiles © Esri",
        maxZoom: 19,
      }
    ).addTo(map);

    // ✅ Green dot style (like your screenshot)
const dotStyle: L.CircleMarkerOptions = {
  radius: 8,
  color: "#A7F3D0",      // border (light mint)
  weight: 2,
  fillColor: "#34D399",  // fill (emerald)
  fillOpacity: 1,
};

places.forEach((p) => {
  const dot = L.circleMarker([p.lat, p.lng], dotStyle).addTo(map);

  dot.bindPopup(`<b>${p.name}</b>`);

  // Optional: show name on hover (nice UX)
  dot.bindTooltip(p.name, {
    direction: "top",
    offset: [0, -10],
    opacity: 0.95,
  });
});


    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="w-full">
      <div
        id="campus-map"
        className="rounded-2xl border border-slate-700"
        style={{ height: "520px", width: "100%" }}
      />
      <p className="text-sm text-slate-400 mt-3">
        Drag to move • Scroll to zoom • Click a building for details
      </p>
    </div>
  );
}
