"use client";

import React from "react";

type TimelineEvent = {
  key: string;
  title: string;
  start: Date;
  end?: Date;
  details: string;
};

function addDays(d: Date, days: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
}

function diffDays(a: Date, b: Date) {
  const ms = a.getTime() - b.getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function fmt(d: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
  }).format(d);
}

function fmtRange(start: Date, end?: Date) {
  return end ? `${fmt(start)} – ${fmt(end)}` : fmt(start);
}

export default function CalendarPage() {
  // Timeline bounds (2nd semester)
  const start = new Date(2025, 0, 20); // 20 Jan 2025
  const end = new Date(2025, 4, 23);   // 23 May 2025
  const total = diffDays(end, start);

  // Convert weeks to dates (Week 1 starts on 20 Jan)
  const visa1Start = addDays(start, 6 * 7);      // Week 7 start
  const visa1End   = addDays(start, 6 * 7 + 13); // ~2 weeks range
  const visa2Start = addDays(start, 11 * 7);     // Week 12 start
  const visa2End   = addDays(start, 11 * 7 + 13);

  const events: TimelineEvent[] = [
    { key: "start", title: "Start", start, details: "Classes start (2nd semester)." },
    { key: "visa1", title: "1st Visa", start: visa1Start, end: visa1End, details: "Midterm period (Weeks 7–8)." },
    { key: "visa2", title: "2nd Visa", start: visa2Start, end: visa2End, details: "Second midterm period (Weeks 12–13)." },
    { key: "endClasses", title: "End of classes", start: new Date(2025, 4, 8), details: "Last teaching day." },
    { key: "endFinals", title: "End of finals", start: end, details: "Final exams end." },
  ];

  // Month ticks
  const monthTicks = [
    { d: new Date(2025, 0, 20), label: "Jan" },
    { d: new Date(2025, 1, 1),  label: "Feb" },
    { d: new Date(2025, 2, 1),  label: "Mar" },
    { d: new Date(2025, 3, 1),  label: "Apr" },
    { d: new Date(2025, 4, 1),  label: "May" },
  ];

  function pos(date: Date) {
    const p = (diffDays(date, start) / total) * 100;
    return clamp(p, 0, 100);
  }

  // Helpers to keep labels/tooltips INSIDE the box at the edges
  function edgeAlign(p: number) {
    if (p <= 6) return "left";   // near start
    if (p >= 94) return "right"; // near end
    return "center";
  }

  function markerStyle(p: number) {
    const align = edgeAlign(p);
    if (align === "left") return { left: "0%", transform: "translateX(0)" };
    if (align === "right") return { left: "100%", transform: "translateX(-100%)" };
    return { left: `${p}%`, transform: "translateX(-50%)" };
  }

  function tooltipStyle(p: number) {
    const align = edgeAlign(p);
    // tooltip anchored to the DOT, not random height
    if (align === "left") return { left: 0, transform: "translateX(0)" };
    if (align === "right") return { right: 0, transform: "translateX(0)" };
    return { left: "50%", transform: "translateX(-50%)" };
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-slate-100">2nd Semester Timeline</h1>
      <p className="text-slate-300 mt-2 text-sm">
        Hover a dot to see details.
      </p>

      <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5">
        {/* ✅ Make everything fit better by reducing font + height */}
        <div className="relative h-28 px-3">
          {/* Line */}
          <div className="absolute left-3 right-3 top-12 h-1 rounded bg-slate-700" />

          {/* Month ticks (centered exactly on tick line) */}
          {monthTicks.map((t) => {
            const p = pos(t.d);
            return (
              <div
                key={t.label}
                className="absolute top-0"
                style={{ left: `${p}%`, transform: "translateX(-50%)" }}
              >
                {/* tick */}
                <div className="mt-[44px] h-4 w-[2px] bg-slate-600" />
                {/* month label */}
                <div className="mt-1 text-[11px] text-slate-400 text-center whitespace-nowrap">
                  {t.label}
                </div>
              </div>
            );
          })}

          {/* Events */}
          {events.map((e) => {
            const p = pos(e.start);
            const range = fmtRange(e.start, e.end);
            const align = edgeAlign(p);

            return (
              <div key={e.key} className="absolute top-0" style={markerStyle(p)}>
                <div className="group relative flex flex-col items-center">
                  {/* ✅ DOT sits exactly on the line */}
                  <div className="mt-[46px] h-4 w-4 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />

                  {/* ✅ Tooltip anchored to the dot (NOT floating too high) */}
                  <div
                    className="
                      pointer-events-none absolute
                      bottom-[calc(100%+2px)]
                      z-20 w-56
                      rounded-xl border border-slate-700 bg-slate-950
                      px-3 py-2 text-xs text-slate-100 shadow-lg
                      opacity-0 translate-y-2
                      transition-all duration-200 ease-out
                      group-hover:opacity-100 group-hover:translate-y-0
                    "
                    style={tooltipStyle(p)}
                  >
                    <div className="font-semibold">{e.title}</div>
                    <div className="text-slate-300 mt-1">{range}</div>
                    <div className="text-slate-300 mt-1">{e.details}</div>

                    {/* arrow */}
                    <div
                      className="absolute top-full h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-slate-700"
                      style={{
                        left: align === "left" ? 16 : align === "right" ? "calc(100% - 16px)" : "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                    <div
                      className="absolute top-full h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-slate-950"
                      style={{
                        marginTop: "1px",
                        left: align === "left" ? 16 : align === "right" ? "calc(100% - 16px)" : "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </div>

                  {/* ✅ Compact label below (no 3-line mess) */}
                  <div className="mt-3 text-center">
                    <div className="text-[12px] font-semibold text-slate-100 whitespace-nowrap">
                      {e.title}
                    </div>
                    <div className="text-[11px] text-slate-300 whitespace-nowrap">
                      {range}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
