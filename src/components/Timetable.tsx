"use client";

type Slot = { day: string; time: string; courseName: string };
type Data = { slots: Slot[]; meta?: { days?: string[] } };

const DAY_ORDER = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];

function colorFor(text: string) {
  const hash = Array.from(text).reduce((a, c) => a + c.charCodeAt(0), 0);
  const colors = ["blue","violet","green","orange","cyan"];
  return colors[hash % colors.length] as "blue"|"violet"|"green"|"orange"|"cyan";
}

export default function Timetable({ data }: { data: Data; deptId?: string }) {
  const days = (data.meta?.days?.length ? data.meta.days : DAY_ORDER).slice(0,5);
  // stable order: Mon..Fri by DAY_ORDER
  const dayIdx = new Map(days.map((d,i)=>[d,i]));
  days.sort((a,b)=>DAY_ORDER.indexOf(a)-DAY_ORDER.indexOf(b));

  // turn "8:00-8:45" -> 480, "19:00-19:45" -> 1140
function startMinutes(t: string) {
  const start = t.split("-")[0].trim();       // "8:00"
  const [h, m] = start.split(":").map(Number);
  return h * 60 + m;
}

// unique times, sorted by numeric start
const times = Array.from(new Set(data.slots.map((s) => s.time)))
  .sort((a, b) => startMinutes(a) - startMinutes(b));

  const map = new Map<string, string[]>();
  for (const s of data.slots) {
    const key = `${s.day}|${s.time}`;
    const arr = map.get(key) ?? [];
    arr.push(s.courseName);
    map.set(key, arr);
  }

  return (
    <div className="p-4 md:p-6">
      <div className="rounded-2xl border border-slate-800/70 bg-slate-950/30 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-800/70 flex items-center gap-3 bg-slate-950/40">
          <div className="h-2 w-2 rounded-full bg-emerald-400/80 shadow" />
          <div className="text-sm text-slate-300">Calendar</div>
        </div>

        <div className="overflow-x-auto p-3 md:p-5">
          <table className="min-w-[720px] w-full text-sm">
            <thead>
              <tr className="text-slate-400">
                <th className="text-left p-2 md:p-3 w-28">Time</th>
                {days.map((d) => (
                  <th key={d} className="text-left p-2 md:p-3">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-100">
              {times.map((t) => (
                <tr key={t}>
                  <td className="p-2 md:p-3 text-slate-300">{t}</td>
                  {days.map((d) => {
                    const key = `${d}|${t}`;
                    const items = map.get(key) || [];
                    return (
                      <td key={key} className="p-2 md:p-3">
                        <div className="cell">
                          {items.length === 0 ? (
                            <div className="text-slate-600">—</div>
                          ) : (
                            <div className="flex flex-col gap-1.5">
                              {items.map((txt, i) => {
                                const c = colorFor(txt);
                                // pick between pill and hex to add variety:
                                const shaped = (i % 2 === 0) ? "badge hex" : "badge";
                                return (
                                  <span key={i} className={`${shaped} ${"badge " + c}`}>
                                    {txt}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
