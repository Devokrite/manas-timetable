"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Entry = { id: number; name: string; grade?: number };

const ALLOWED = new Set([1, 7, 10, 191]); // <-- only these 4

export default function SelectPage() {
  const [items, setItems] = useState<Entry[]>([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let live = true;

    (async () => {
      try {
        // cache-bust the static file to avoid stale CDN content
        const res = await fetch(`/catalog-1.json?v=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const all: Entry[] = json.items || [];
        const onlyAllowed = all.filter((x) => ALLOWED.has(Number(x.id)));
        if (live) setItems(onlyAllowed);
      } catch (e: any) {
        if (live) setError(e?.message || "Failed to load catalog");
      } finally {
        if (live) setLoading(false);
      }
    })();

    return () => { live = false; };
  }, []);

  const filtered = useMemo(() => {
    const s = q.toLowerCase();
    return items.filter((x) => x.name.toLowerCase().includes(s));
  }, [items, q]);

  return (
    <main className="min-h-screen p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Choose your timetable</h1>
      <p className="mb-4 opacity-80">Showing <strong>1. sınıf</strong> departments only (4 selected).</p>

      <div className="mb-4 flex gap-2 items-center">
        <input
          className="rounded-xl border px-3 py-2 bg-white/10 flex-1"
          placeholder="Search department…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {loading && <span className="text-sm opacity-70 whitespace-nowrap">Loading…</span>}
      </div>

      {error && <div className="mb-3 text-sm text-red-400">Error: {error}</div>}

      {filtered.length === 0 && !loading ? (
        <div className="opacity-70">No departments found.</div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filtered.map((d) => (
            <Link
              key={d.id}
              href={`/departments/${d.id}`}
              className="rounded-2xl border hover:border-white/40 bg-white/5 p-3"
            >
              <div className="font-medium">{d.name}</div>
              <div className="text-xs opacity-60 mt-1">ID: {d.id} • 1. sınıf</div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
