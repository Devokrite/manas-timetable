"use client";

type Slot = {
  day: string;
  time: string;
  courseName: string; // combined text
};

type Data = {
  slots: Slot[];
  meta?: { days?: string[] };
};

export default function Timetable({ data }: { data: Data; deptId?: string }) {
  const days = data.meta?.days?.length ? data.meta.days : ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];

  // collect times in sorted order (string compare is fine because site uses HH:MM-HH:MM)
  const times = Array.from(new Set(data.slots.map(s => s.time))).sort();

  // build a map: key = day|time -> array of course names (handles multiple entries)
  const map = new Map<string, string[]>();
  for (const s of data.slots) {
    const key = `${s.day}|${s.time}`;
    const arr = map.get(key) ?? [];
    arr.push(s.courseName);
    map.set(key, arr);
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left px-4 py-3 border-b border-gray-100 w-36 text-slate-500">Time</th>
            {days.map((d) => (
              <th key={d} className="text-left px-4 py-3 border-b border-gray-100 text-slate-500">{d}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {times.map((t) => (
            <tr key={t} className="border-b border-gray-100">
              <td className="px-4 py-3 font-medium text-slate-700">{t}</td>
              {days.map((d) => {
                const key = `${d}|${t}`;
                const val = map.get(key) || [];
                return (
                  <td key={key} className="px-4 py-3 align-top">
                    <div className="flex flex-col gap-1">
                      {val.length === 0 ? (
                        <span className="text-slate-300">—</span>
                      ) : (
                        val.map((line, i) => (
                          <span
                            key={i}
                            className="inline-block rounded-lg bg-blue-50 text-slate-700 border border-blue-100 px-2 py-1"
                          >
                            {line}
                          </span>
                        ))
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
  );
}
