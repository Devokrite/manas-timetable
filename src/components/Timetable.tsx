"use client";
import { useMemo, useState, Fragment, useEffect } from "react";
import type { Slot } from "../lib/parse";

// Normalize string for mapping keys
function norm(s: string) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Turkish weekday map
const WEEK_TR = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];
const trMap: Record<string, string> = {
  pazartesi: "Pazartesi",
  sali: "Salı",
  carsamba: "Çarşamba",
  çarsamba: "Çarşamba",
  persembe: "Perşembe",
  perşembe: "Perşembe",
  cuma: "Cuma",
};

// Decide final day labels
function resolveDayLabels(fromMeta: string[]) {
  if (!fromMeta?.length) return WEEK_TR;
  const cleaned = fromMeta.map((d) => {
    const k = norm(d);
    // handle "Day1/Day2..." placeholders
    if (/^day\s*\d+$/i.test(d)) return ""; // mark as unknown
    return trMap[k] ?? d;
  });

  // If they were placeholders, fallback to Turkish weekdays
  if (cleaned.every((d) => !d)) return WEEK_TR;

  // Some rows could still be empty -> fill from left with Turkish defaults
  const out = cleaned.slice();
  for (let i = 0; i < out.length && i < WEEK_TR.length; i++) {
    if (!out[i]) out[i] = WEEK_TR[i];
  }
  return out;
}

// Sort helper
function timeKey(t: string) {
  const m = t.match(/^(\d{1,2}):?(\d{2})?/);
  if (!m) return 0;
  const h = parseInt(m[1] ?? "0", 10);
  const mm = parseInt(m[2] ?? "0", 10);
  return h * 100 + mm;
}

export default function Timetable({
  data,
  deptId,
}: {
  data: { slots: Slot[]; meta?: { days?: string[]; departmentName?: string } };
  deptId: string;
}) {
  const [qRaw, setQRaw] = useState("");
  const [q, setQ] = useState("");

  // debounce search
  useEffect(() => {
    const t = setTimeout(() => setQ(qRaw), 200);
    return () => clearTimeout(t);
  }, [qRaw]);

  // filter
  const filtered = useMemo(() => {
    if (!q) return data.slots;
    const s = q.toLowerCase();
    return data.slots.filter((x) =>
      [x.courseCode, x.courseName, x.teacher, x.room, x.day, x.time].some((v) =>
        v?.toLowerCase().includes(s)
      )
    );
  }, [q, data.slots]);

  // get day headers (Turkish)
  const dayHeaders = resolveDayLabels(data.meta?.days || []);

  // unique times excluding stray "#" if any (parser already skips)
  const times = Array.from(new Set(filtered.map((s) => s.time)))
    .filter((t) => t && t !== "#")
    .sort((a, b) => timeKey(a) - timeKey(b));

  // Build cell map
  const cell: Record<string, Record<string, Slot[]>> = {};
  for (const d of dayHeaders) cell[d] = {};
  for (const t of times) for (const d of dayHeaders) cell[d][t] = [];
  for (const s of filtered) {
    // Map original day to header bucket (by index if names differ)
    const idx = (data.meta?.days || []).indexOf(s.day);
    const bucket = (idx >= 0 && dayHeaders[idx]) ? dayHeaders[idx] : s.day;
    if (!cell[bucket]) cell[bucket] = {};
    if (!cell[bucket][s.time]) cell[bucket][s.time] = [];
    cell[bucket][s.time].push(s);
  }

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* Top bar */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          {data.meta?.departmentName?.trim() || `Department #${deptId}`}
        </h2>
        <div className="flex items-center gap-2">
          <input
            className="w-[260px] max-w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 outline-none placeholder-white/60"
            placeholder="Search teacher / course / room"
            value={qRaw}
            onChange={(e) => setQRaw(e.target.value)}
          />
          <a
            className="text-sm underline opacity-80 hover:opacity-100"
            href={`/api/department/${deptId}`}
            target="_blank"
          >
            JSON
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <div
          className="min-w-[960px] grid"
          style={{
            gridTemplateColumns: `160px repeat(${dayHeaders.length}, minmax(220px, 1fr))`,
          }}
        >
          {/* Headers */}
          <div className="sticky top-0 z-10 bg-black/40 backdrop-blur px-3 py-3 border-b border-white/10">
            <div className="text-sm font-semibold opacity-80">Time</div>
          </div>
          {dayHeaders.map((d) => (
            <div
              key={d}
              className="sticky top-0 z-10 bg-black/40 backdrop-blur px-3 py-3 border-b border-white/10 border-l border-white/10"
            >
              <div className="text-sm font-semibold">{d}</div>
            </div>
          ))}

          {/* Rows */}
          {times.map((t) => (
            <Fragment key={t}>
              <div className="px-3 py-3 border-b border-white/10">
                <div className="text-sm font-medium">{t}</div>
              </div>
              {dayHeaders.map((d) => {
                const items = cell[d][t] || [];
                return (
                  <div key={`${d}-${t}`} className="px-3 py-3 border-b border-l border-white/10">
                    {items.length === 0 ? (
                      <div className="text-xs opacity-30">–</div>
                    ) : (
                      <div className="space-y-2">
                        {items.map((s, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm"
                          >
                            <div className="leading-snug font-medium">{s.courseName}</div>
                            {(s.teacher || s.room || s.courseCode) && (
                              <div className="mt-1 text-xs opacity-70">
                                {s.teacher ? <span className="mr-2">{s.teacher}</span> : null}
                                {s.room ? <span className="mr-2">• {s.room}</span> : null}
                                {s.courseCode ? <span className="mr-2">[{s.courseCode}]</span> : null}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

