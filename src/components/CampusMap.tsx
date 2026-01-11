"use client";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center: [number, number] = [42.8355, 74.5745];

const buildings = [
  { name: "SAHA", lat: 42.834673, lng: 74.572489 },
  { name: "MYO", lat: 42.836278, lng: 74.570869 },
  { name: "Theology Faculty", lat: 42.837193, lng: 74.570442 },
  { name: "Economics Faculty", lat: 42.835220, lng: 74.575177 },
  { name: "Communications Faculty", lat: 42.834641, lng: 74.575219 },
  { name: "Engineering Faculty", lat: 42.833347, lng: 74.575745 },
  { name: "Rectorate", lat: 42.833595, lng: 74.576190 },
  { name: "Sport Faculty", lat: 42.837289, lng: 74.575713 },
  { name: "B Dormitory", lat: 42.835326, lng: 74.572757 },
  { name: "C Dormitory", lat: 42.835656, lng: 74.571700 },
  { name: "Canteen", lat: 42.835829, lng: 74.574624 },
  { name: "Cafeteria", lat: 42.836293, lng: 74.573878 },
  { name: "Medical Center", lat: 42.836203, lng: 74.572859 },
  { name: "A Dormitory", lat: 42.831907, lng: 74.575267 },
];

export default function CampusMap() {
  return (
    <MapContainer
      center={center}
      zoom={16}
      scrollWheelZoom
      style={{ height: "420px", width: "100%", borderRadius: "12px" }}
    >
      {/* Satellite imagery */}
      <TileLayer
        attribution="Tiles © Esri"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />

      {/* Clean campus dots */}
      {buildings.map((b, i) => (
        <CircleMarker
          key={i}
          center={[b.lat, b.lng]}
          radius={8}
          pathOptions={{
            color: "#34d399",
            fillColor: "#34d399",
            fillOpacity: 0.9,
          }}
        >
          <Popup>{b.name}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
