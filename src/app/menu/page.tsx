import { politeFetch } from "../../lib/fetchers";
import { parseCafeteriaMenu } from "../../lib/menu";

export const runtime = "nodejs";
// Revalidate every 12 hours
export const revalidate = 43200;

export default async function MenuPage() {
  const html = await politeFetch("https://beslenme.manas.edu.kg/menu");
  const { days } = parseCafeteriaMenu(html || "");

  return (
    <main className="min-h-screen bg-[#050711] text-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-8">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Cafeteria Menu
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Updated weekly · Data from beslenme.manas.edu.kg
            </p>
          </div>
        </header>

        {/* Days list */}
        <section className="space-y-4">
          {days.map((day) => (
            <article
              key={`${day.date}-${day.weekday}`}
              className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/80 to-slate-900/40 px-5 py-4 shadow-xl shadow-black/40"
            >
              {/* Day header: weekday + date */}
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-semibold">
                  {day.weekday}
                  <span className="ml-3 text-sm font-normal text-slate-400">
                    {day.date}
                  </span>
                </h2>
                {day.meals.length > 0 && (
                  <span className="text-xs uppercase tracking-wide text-emerald-300/80">
                    {day.meals.length}{" "}
                    {day.meals.length === 1 ? "dish" : "dishes"}
                  </span>
                )}
              </div>

              {/* Menu items */}
              {day.meals.length > 0 ? (
                <ul className="mt-3 grid gap-1 text-sm text-slate-100">
                  {day.meals.map((meal) => (
                    <li
                      key={meal.name + (meal.calories ?? "")}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span>
                        {meal.name}
                        {meal.calories && (
                          <span className="ml-2 text-xs text-slate-400">
                            ({meal.calories} kcal)
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-slate-500">
                  No menu found for this day yet.
                </p>
              )}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
