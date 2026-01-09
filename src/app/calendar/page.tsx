"use client";

import React from "react";

type TimelineEvent = {
  key: string;
  title: string;
  start: Date;
  end?: Date; // optional range
  details: string;
};

function addDays(d: Date, days: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
}

function diffDays(a: Date, b: Date) {
  // a - b in days
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

export default function CalendarPage() {
  // ✅ Timeline bounds (2nd semester)
  const start = new Date(2025, 0, 20); // 20 Jan 2025  (month is 0-based)
  const end = new Date(2025, 4, 23);   // 23 May 2025

  const total = diffDays(end, start);

  // ✅ Convert week ranges into real dates automatically
  // If Week 1 starts on 20 Jan:
  // Week 7 starts after 6 weeks = 42 days
  const week7Start = addDays(start, 6 * 7);     // 42 days after start
  const week8End   = addDays(start, 6 * 7 + 13); // end of week 8 (approx 2 weeks span)

  const week12Start = addDays(start, 11 * 7);   // week 12 start = 77 days after start
  const week13End   = addDays(start, 11 * 7 + 13);

  const events: TimelineEvent[] = [
    {
      key: "start",
      title: "Start of semester",
      start,
      details: "Classes start (2nd semester).",
    },
    {
      key: "visa1",
      title: "1st Visa",
      start: week7Start,
      end: week8End,
      details: "Midterm period (Weeks 7–8).",
    },
    {
      key: "visa2",
      title: "2nd Visa",
      start: week12Start,
      end: week13End,
      details: "Second midterm period (Weeks 12–13).",
    },
    {
      key: "endClasses",
      title: "End of classes",
      start: new Date(2025, 4, 8),
      details: "Last teaching day (end of study period).",
    },
    {
      key: "endFinals",
      title: "End of finals",
      start: end,
      details: "Final exam period ends.",
    },
  ];

  // ✅ Month ticks so it doesn’t feel empty
  const monthTicks = [
    new Date(2025, 0, 20), // Jan 20 (start)
    new Date(2025, 1, 1),  // Feb 1
    new Date(2025, 2, 1),  // Mar 1
    new Date(2025, 3, 1),  // Apr 1
    new Date(2025, 4, 1),  // May 1
    new Date(2025, 4, 23), // May 23 (end)
  ];

  function pos(date: Date) {
    const p = (diffDays(date, start) / total) * 100;
    return clamp(p, 0, 100);
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-slate-100">2nd Semester Timeline</h1>
      <p className="text-slate-300 mt-2">
        Hover a dot to see details. Dates are shown directly (no week counting).
      </p>

      {/* ✅ Scroll container prevents squishing */}
      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6 overflow-x-auto">
        {/* Minimum width so labels never compress */}
        <div className="min-w-[1100px]">
          <div className="relative h-40">
            {/* Timeline line */}
            <div className="absolute left-6 right-6 top-16 h-1 rounded bg-slate-700" />

            {/* Month ticks (more info, less empty) */}
            {monthTicks.map((d, i) => {
              const left = `calc(${pos(d)}% + 6px)`; // small offset
              const isEdge = i === 0 || i === monthTicks.length - 1;
              return (
                <div
                  key={`tick-${i}`}
                  className="absolute top-0"
                  style={{ left, transform: "translateX(-50%)" }}
                >
                  <div className="mt-[58px] h-4 w-[2px] bg-slate-600" />
                  <div className="mt-2 text-xs text-slate-400 text-center whitespace-nowrap">
                    {isEdge ? fmt(d) : new Intl.DateTimeFormat("en-GB", { month: "short" }).format(d)}
                  </div>
                </div>
              );
            })}

            {/* Events */}
            {events.map((e) => {
              const left = `calc(${pos(e.start)}% + 6px)`;
              const range =
                e.end ? `${fmt(e.start)} – ${fmt(e.end)}` : fmt(e.start);

              return (
                <div
                  key={e.key}
                  className="absolute top-0"
                  style={{ left, transform: "translateX(-50%)" }}
                >
                  <div className="group relative flex flex-col items-center">
                    {/* ✅ Tooltip closer + animated pop */}
                    <div
                      className="
                        pointer-events-none absolute top-16 -translate-y-full
                        z-20 w-64 rounded-xl border border-slate-700 bg-slate-950
                        px-3 py-2 text-sm text-slate-100 shadow-lg
                        opacity-0 translate-y-2
                        transition-all duration-200 ease-out
                        group-hover:opacity-100 group-hover:translate-y-0
                      "
                      style={{ marginTop: "-10px" }}
                    >
                      <div className="font-semibold">{e.title}</div>
                      <div className="text-slate-300 mt-1">{range}</div>
                      <div className="text-slate-300 mt-1">{e.details}</div>

                      {/* arrow */}
                      <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-slate-700" />
                      <div
                        className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-slate-950"
                        style={{ marginTop: "1px" }}
                      />
                    </div>

                    {/* Dot */}
                    <div className="mt-[58px] h-4 w-4 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />

                    {/* Label below dot (no squish because min-width + scroll) */}
                    <div className="mt-3 text-center max-w-[160px]">
                      <div className="text-sm font-semibold text-slate-100">
                        {e.title}
                      </div>
                      <div className="text-xs text-slate-300 whitespace-nowrap">
                        {range}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-2 text-xs text-slate-400">
            Tip: If your screen is small, scroll sideways inside this box.
          </div>
        </div>
      </div>
    </main>
  );
}
