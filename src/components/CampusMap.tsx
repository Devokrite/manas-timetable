"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type PlaceId =
  | "stadium"
  | "main"
  | "saha"
  | "myo"
  | "theology"
  | "economics"
  | "communications"
  | "engineering"
  | "rectorate"
  | "sportFaculty"
  | "bDorm"
  | "cDorm"
  | "Kraat"
  | "Yemek"
  | "medical"
  | "aDorm";

type Place = {
  id: PlaceId;
  number?: number; // for your numbered buildings
  name: string;
  short?: string;
  lat?: number;
  lng?: number;
};

function numIcon(n?: number) {
  const label = typeof n === "number" ? String(n) : "•";
  return L.divIcon({
    className: "manas-pin",
    html: `
      <div style="
        width: 26px; height: 26px;
        border-radius: 9999px;
        background: rgba(16,185,129,1);
        border: 3px solid rgba(5, 150, 105, 1);
        display:flex; align-items:center; justify-content:center;
        color: #052e2b;
        font-weight: 800;
        font-size: 12px;
        box-shadow: 0 10px 18px rgba(0,0,0,.35);
      ">${label}</div>
    `,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -16],
  });
}

export default function CampusMap() {
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);

  // Default center around Manas University (adjust anytime)
  const defaultCenter = useMemo<[number, number]>(() => [42.83655, 74.57713], []);

  // Base list (your labels)
  const basePlaces: Place[] = useMemo(
    () => [
      { id: "main", name: "Main Campus", short: "Main", lat: 42.83655, lng: 74.57713 },
      { id: "stadium", name: "Stadium", short: "Stadium" },

      { id: "saha", number: 1, name: "Saha" },
      { id: "myo", number: 2, name: "MYO" },
      { id: "theology", number: 3, name: "Theology Faculty" },
      { id: "economics", number: 4, name: "Economics Faculty" },
      { id: "communications", number: 5, name: "Communications Faculty" },
      { id: "engineering", number: 6, name: "Engineering Faculty" },
      { id: "rectorate", number: 7, name: "Rectorate" },
      { id: "sportFaculty", number: 8, name: "Sport Faculty" },
      { id: "bDorm", number: 9, name: "B-Block Dormitory" },
      { id: "cDorm", number: 10, name: "C-Block Dormitory" },
      { id: "Kraat", number: 11, name: "Kraathane" },
      { id: "Yemek", number: 12, name: "Yemekhsnr" },
      { id: "medical", number: 13, name: "Medical / Health Center" },
      { id: "aDorm", number: 14, name: "A-Block Dormitory" },
    ],
    []
  );

  // Load saved coordinates from localStorage (so you don’t lose your work)
  const [places, setPlaces] = useState<Place[]>(() => {
    try {
      const raw = localStorage.getItem("manas-campus-places");
      if (!raw) return basePlaces;
      const saved: Record<string, { lat: number; lng: number }> = JSON.parse(raw);

      return basePlaces.map((p) => {
        const s = saved[p.id];
        if (!s) return p;
        return { ...p, lat: s.lat, lng: s.lng };
      });
    } catch {
      return basePlaces;
    }
  });

  const [selectedId, setSelectedId] = useState<PlaceId | null>(null);
  const selectedPlace = places.find((p) => p.id === selectedId) ?? null;

  // Persist only coords
  useEffect(() => {
    const minimal: Record<string, { lat: number; lng: number }> = {};
    places.forEach((p) => {
      if (typeof p.lat === "number" && typeof p.lng === "number") {
        minimal[p.id] = { lat: p.lat, lng: p.lng };
      }
    });
    localStorage.setItem("manas-campus-places", JSON.stringify(minimal));
  }, [places]);

  // Init map once
  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map("manas-map", {
      center: defaultCenter,
      zoom: 16,
      zoomSnap: 0.25,
      zoomDelta: 0.25,
    });
    mapRef.current = map;

    // Satellite (Esri)
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "Tiles © Esri",
        maxZoom: 20,
        maxNativeZoom: 19,
      }
    ).addTo(map);

    // Labels-only overlay (so names appear without covering satellite)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap © CARTO",
      maxZoom: 20,
      opacity: 1,
    }).addTo(map);

    const layer = L.layerGroup().addTo(map);
    layerRef.current = layer;

    // Click to set marker coords for selected place
    map.on("click", (e: L.LeafletMouseEvent) => {
      if (!selectedId) return;

      setPlaces((prev) =>
        prev.map((p) =>
          p.id === selectedId ? { ...p, lat: e.latlng.lat, lng: e.latlng.lng } : p
        )
      );
    });

    return () => {
      map.off();
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-render markers when places change
  useEffect(() => {
    const map = mapRef.current;
    const layer = layerRef.current;
    if (!map || !layer) return;

    layer.clearLayers();

    places.forEach((p) => {
      if (typeof p.lat !== "number" || typeof p.lng !== "number") return;

      const marker = L.marker([p.lat, p.lng], { icon: numIcon(p.number) }).addTo(layer);
      marker.bindPopup(
        `<div style="font-weight:700">${p.number ? `${p.number}. ` : ""}${p.name}</div>`
      );
    });
  }, [places]);

  const setUnset = (id: PlaceId) => {
    setPlaces((prev) => prev.map((p) => (p.id === id ? { ...p, lat: undefined, lng: undefined } : p)));
  };

  const copyJson = async () => {
    const minimal: Record<string, { lat: number; lng: number }> = {};
    places.forEach((p) => {
      if (typeof p.lat === "number" && typeof p.lng === "number") {
        minimal[p.id] = { lat: p.lat, lng: p.lng };
      }
    });

    const json = JSON.stringify(minimal, null, 2);
    await navigator.clipboard.writeText(json);
    alert("Copied coordinates JSON to clipboard ✅");
  };

  const resetAll = () => {
    localStorage.removeItem("manas-campus-places");
    setPlaces(basePlaces);
    setSelectedId(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 space-y-4">
      <div>
        <h1 className="text-3xl font-bold text-white">Campus Map</h1>
        <p className="text-slate-300 mt-1">
          1) Click a place on the right → 2) Click on the map to place the marker.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
        {/* MAP */}
        <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900">
          <div id="manas-map" className="h-[520px] w-full" />
          <div className="px-4 py-3 border-t border-slate-700 text-sm text-slate-300 flex flex-wrap gap-3 items-center">
            <span>
              Selected:{" "}
              <b className="text-emerald-300">
                {selectedPlace ? (selectedPlace.number ? `${selectedPlace.number}. ` : "") + selectedPlace.name : "None"}
              </b>
            </span>
            <span className="opacity-70">• Click map to set marker</span>
          </div>
        </div>

        {/* PANEL */}
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-semibold">Places</h2>
            <button
              onClick={copyJson}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold"
            >
              Copy JSON
            </button>
          </div>

          <div className="mt-3 space-y-2 max-h-[460px] overflow-auto pr-1">
            {places.map((p) => {
              const isSelected = p.id === selectedId;
              const isSet = typeof p.lat === "number" && typeof p.lng === "number";

              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className={[
                    "w-full text-left rounded-xl border px-3 py-2 transition",
                    isSelected ? "border-emerald-500 bg-emerald-500/10" : "border-slate-700 hover:bg-slate-800/60",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-white font-semibold">
                      {p.number ? `${p.number}. ` : ""}{p.name}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={isSet ? "text-emerald-300 text-xs" : "text-slate-400 text-xs"}>
                        {isSet ? "SET" : "NOT SET"}
                      </span>
                      {isSet && (
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setUnset(p.id);
                          }}
                          className="text-xs px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                        >
                          Clear
                        </span>
                      )}
                    </div>
                  </div>

                  {isSet && (
                    <div className="text-xs text-slate-400 mt-1">
                      {p.lat!.toFixed(6)}, {p.lng!.toFixed(6)}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={resetAll}
            className="mt-4 w-full px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold"
          >
            Reset all markers
          </button>

          <p className="mt-3 text-xs text-slate-400">
            Tip: Once you place all markers, click <b>Copy JSON</b> so you can save the final coordinates.
          </p>
        </div>
      </div>
    </div>
  );
}
