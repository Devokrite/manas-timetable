"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function CampusMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current, {
      center: [42.836547, 74.577128], // Manas University
      zoom: 16,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    // FREE OpenStreetMap tiles
   L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution: "Tiles © Esri",
    maxZoom: 19,
  }
).addTo(map);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
  opacity: 0.25,
}).addTo(map);



    // Custom dot marker
    const dotIcon = L.divIcon({
      className: "",
      html: `<div style="
        width:14px;
        height:14px;
        background:#34d399;
        border-radius:50%;
        box-shadow: 0 0 0 6px rgba(52,211,153,0.3);
      "></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    // Example markers (you will add more)
    L.marker([42.836547, 74.577128], { icon: dotIcon })
      .addTo(map)
      .bindPopup("<b>Main Campus</b><br>Kyrgyz-Turkish Manas University");

    L.marker([42.8381, 74.5729], { icon: dotIcon })
      .addTo(map)
      .bindPopup("<b>Stadium</b><br>Sports area");

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full rounded-2xl border border-slate-700"
      style={{ height: "520px" }}
    />
  );
}
