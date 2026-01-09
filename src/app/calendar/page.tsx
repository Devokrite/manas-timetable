"use client";

import React from "react";

type TimelineEvent = {
  key: string;
  title: string;      // short label shown near the dot
  dateLabel: string;  // short date text shown near the dot
  details: string;    // tooltip text on hover
  position: number;   // 0..100 (% along the line)
};

const events: TimelineEvent[] = [
  {
    key: "start",
    title: "Start of semester",
    dateLabel: "20 Jan",
    details: "Classes start (2nd semester).",
    position: 0,
  },
  {
    key: "visa1",
    title: "1st Visa",
    dateLabel: "Week 7–8",
    details: "Midterm exam period (usually weeks 7–8).",
    position: 45,
  },
  {
    key: "visa2",
    title: "2nd Visa",
    dateLabel: "Week 12–13",
    details: "Second midterm exam period (usually weeks 12–13).",
    position: 65,
  },
  {
    key: "endStudy",
    title: "End of classes",
    dateLabel: "8 May",
    details: "Last teaching day (end of study period).",
    position: 85,
  },
  {
    key: "endFinals",
    title: "End of finals",
    dateLabel: "23 May",
    details: "Final exam period ends.",
    position: 100,
  },
];

export default function CalendarPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-slate-100">2nd Semester Timeline</h1>
      <p className="text-slate-300 mt-2">
        Hover over a dot to see details.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        {/* Timeline line */}
        <div className="relative h-24">
          <div className="absolute left-0 right-0 top-12 h-1 rounded bg-slate-700" />

          {/* Events */}
          {events.map((e) => (
            <div
              key={e.key}
              className="absolute top-0"
              style={{ left: `${e.position}%`, transform: "translateX(-50%)" }}
            >
              {/* Tooltip wrapper */}
              <div className="group relative flex flex-col items-center">
                {/* Tooltip */}
                <div className="pointer-events-none absolute -top-2 z-10 w-56 -translate-y-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  <div className="font-semibold">{e.title}</div>
                  <div className="text-slate-300 mt-1">{e.details}</div>
                  {/* tooltip arrow */}
                  <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-slate-700" />
                  <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-slate-950" style={{ marginTop: "1px" }} />
                </div>

                {/* Dot */}
                <div className="mt-10 h-4 w-4 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />

                {/* Label */}
                <div className="mt-3 text-center">
                  <div className="text-sm font-semibold text-slate-100">
                    {e.title}
                  </div>
                  <div className="text-xs text-slate-300">{e.dateLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 text-xs text-slate-400">
          Green dots = key dates for 2nd semester.
        </div>
      </div>
    </main>
  );
}
