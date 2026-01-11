"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";

type Building = {
  id: number;
  name: string;
  lat: number;
  lng: number;
};

const buildings: Building[] = [
  { id: 1, name: "SAHA", lat: 42.834673, lng: 74.572489 },
  { id: 2, name: "MYO", lat: 42.836278, lng: 74.570869 },
  { id: 3, name: "Theology Faculty", lat: 42.837193, lng: 74.570442 },
  { id: 4, name: "Economics Faculty", lat: 42.83522, lng: 74.575177 },
  { id: 5, name: "Communications Faculty", lat: 42.834641, lng: 74.575219 },
  { id: 6, name: "Engineering Faculty", lat: 42.833347, lng: 74.575745 },
  { id: 7, name: "Rectorate", lat: 42.833595, lng: 74.57619 },
  { id: 8, name: "Sport Faculty", lat: 42.837289, lng: 74.575713 },
  { id: 9, name: "B Dormitory", lat: 42.835326, lng: 74.572757 },
  { id: 10, name: "C Dormitory", lat: 42.835656, lng: 74.5717 },
  { id: 11, name: "Canteen", lat: 42.835829, lng: 74.574624 },
  { id: 12, name: "Cafeteria", lat: 42.836293, lng: 74.573878 },
  { id: 13, name: "Medical Center", lat: 42.836203, lng: 74.572859 },
  { id: 14, name: "A Dormitory", lat: 42.831907, lng: 74.575267 },
];

export default function CampusMap() {
  const mapDivRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

  const [active, setActive] = useState<Building | null>(null);

  const center = useMemo(() => {
    // center around campus (roughly)
    return L.latLng(42.8357, 74.5739);
  }, []);

  useEffect(() => {
    if (!mapDivRef.current) return;
    if (mapRef.current) return; // prevent double init

    // Create map
    const map = L.map(mapDivRef.current, {
      center,
      zoom: 16,
      minZoom: 14,
      maxZoom: 20,
      zoomControl: true,
      attributionControl: true,
    });

    mapRef.current = map;

    // ✅ Satellite tiles (free). This is the closest to what you want visually.
    // NOTE: Apple satellite is not officially available for Leaflet without paid/private APIs.
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 20,
        attribution: "Tiles © Esri",
      }
    ).addTo(map);

    // Add markers layer group
    const layer = L.layerGroup().addTo(map);
    markersRef.current = layer;

    // Style for your green dots (like your timeline dots)
    const dotStyle: L.CircleMarkerOptions = {
      radius: 7,
      color: "#a7f3d0", // border
      weight: 2,
      fillColor: "#34d399", // fill
      fillOpacity: 1,
    };

    buildings.forEach((b) => {
      const marker = L.circleMarker([b.lat, b.lng], dotStyle);

      // small hover label
      marker.bindTooltip(b.name, { direction: "top", offset: [0, -8], opacity: 0.95 });

      // click -> show popup + also update right/bottom panel
      marker.on("click", () => {
        setActive(b);
        marker.bindPopup(`<b>${b.name}</b><br/>${b.lat.toFixed(6)}, ${b.lng.toFixed(6)}`).openPopup();
      });

      marker.addTo(layer);
    });

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = null;
    };
  }, [center]);

  const flyToBuilding = (b: Building) => {
    const map = mapRef.current;
    if (!map) return;
    setActive(b);
    map.flyTo([b.lat, b.lng], 18, { duration: 0.9 });
  };

  const resetView = () => {
    const map = mapRef.current;
    if (!map) return;
    setActive(null);
    map.flyTo(center, 16, { duration: 0.7 });
  };

  return (
    <div className="w-full">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h1 className="text-2xl font-bold text-white">Campus Map</h1>
          <p className="text-sm text-slate-400">Drag to move • Scroll to zoom • Click a dot</p>
        </div>

        <button
          onClick={resetView}
          className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
        <div className="rounded-2xl border border-slate-700 overflow-hidden bg-slate-900">
          <div ref={mapDivRef} className="h-[520px] w-full" />
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-slate-400">Buildings</div>
            {active ? <div className="text-xs text-emerald-300">Selected</div> : null}
          </div>

          <div className="space-y-2 max-h-[520px] overflow-auto pr-1">
            {buildings.map((b) => (
              <button
                key={b.id}
                onClick={() => flyToBuilding(b)}
                className={`w-full text-left px-3 py-2 rounded-xl border transition ${
                  active?.id === b.id
                    ? "border-emerald-400 bg-emerald-400/10"
                    : "border-slate-700 bg-slate-800/40 hover:bg-slate-800"
                }`}
              >
                <div className="text-white font-medium">
                  {b.id}. {b.name}
                </div>
                <div className="text-xs text-slate-400">
                  {b.lat.toFixed(6)}, {b.lng.toFixed(6)}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
