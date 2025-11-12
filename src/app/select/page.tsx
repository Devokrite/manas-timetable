"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Entry = { id: number; name: string; grade?: number };
const ALLOWED = new Set([1, 7, 10, 191]); // only these four

export default function SelectPage() {
  const [items, setItems] = useState<Entry[]>([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    (async () => {
      try {
        const res = await fetch(`/catalog-1.json?v=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const all: Entry[] = json.items || [];
        const only = all.filter((x) => ALLOWED.has(Number(x.id)));
        if (live) setItems(only);
      } catch (e: any) {
        if (live) setError(e?.message || "Failed to load catalog");
      } finally {
        if (live) setLoading(false);
      }
    })();
    return () => { live = false; };
  }, []);

  const filtered = useMemo(() => {
    const s = q.toLowerCase().trim();
    if (!s) return items;
    return items.filter((x) => x.name.toLowerCase().includes(s));
  }, [items, q]);

  return (
    <main className="min-h-screen py-10">
      <div className="container-slim">
        <h1 className="text-3xl font-semibold text-center mb-2">Choose your department</h1>
        <p className="text-center text-slate-500 mb-8">
          Showing <b>1. sınıf</b> departments (4 selected).
        </p>

        <div className="mb-8">
          <input
            className="input"
            placeholder="Search department…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          {loading && <div className="text-sm text-slate-500 mt-2">Loading…</div>}
          {error && <div className="text-sm text-red-500 mt-2">Error: {error}</div>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((d) => (
            <Link key={d.id} href={`/departments/${d.id}`} className="card card-hover p-5">
              <div className="text-lg font-medium">{d.name}</div>
              <div className="text-sm text-slate-500 mt-1">ID: {d.id} • 1. sınıf</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
