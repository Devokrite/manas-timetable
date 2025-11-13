import { politeFetch } from "../../lib/fetchers";
import { parseCafeteriaMenu } from "../../lib/menu";

export const runtime = "nodejs";
// refresh the page data automatically (12h). Change to 86400 for daily.
export const revalidate = 43200;

export default async function MenuPage() {
  const html = await politeFetch("https://beslenme.manas.edu.kg/menu");
  const data = parseCafeteriaMenu(html || "");

  return (
    <main className="min-h-screen w-full">
      <header className="px-5 md:px-8 py-5 border-b border-slate-800/70 bg-slate-950/40">
        <div className="flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-semibold">Cafeteria Menu</h1>
          <div className="text-xs text-slate-400">Updated weekly</div>
        </div>
      </header>

      <section className="container-slim py-6">
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {data.weeks.map((week, wi) => (
            <div
              key={wi}
              className="rounded-2xl border border-slate-800/70 bg-slate-950/30 overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-slate-800/70 flex items-center gap-3 bg-slate-950/40">
                <div className="h-2 w-2 rounded-full bg-emerald-400/80 shadow" />
                <div className="text-sm text-slate-300">
                  {week.title || `Week ${wi + 1}`}
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-4">
                {week.days.map((day, di) => (
                  <div key={di} className="cell">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{day.name}</div>
                      {day.date && (
                        <div className="text-xs text-slate-400">
                          {day.date}
                        </div>
                      )}
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {day.meals.map((m, mi) => (
                        <div
                          key={mi}
                          className="rounded-xl border border-slate-800 bg-slate-900/50 p-3"
                        >
                          <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">
                            {m.label}
                          </div>
                          <ul className="text-sm space-y-1">
                            {m.items.map((it, ii) => (
                              <li key={ii} className="badge">
                                {it}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Debug link */}
        <div className="mt-6 text-xs text-slate-500">
          Debug JSON:{" "}
          <a
            className="underline"
            href="/api/menu"
            target="_blank"
            rel="noreferrer"
          >
            /api/menu
          </a>
        </div>
      </section>
    </main>
  );
}
