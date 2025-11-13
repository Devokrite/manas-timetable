import Link from "next/link";
import { politeFetch } from "../../lib/fetchers";
import { parseCafeteriaMenu } from "../../lib/menu";

export const runtime = "nodejs";
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
            <div className="mb-3">
              {/* Back to departments */}
              <Link
                href="/select"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 hover:border-emerald-400 hover:text-emerald-200"
              >
                <span className="text-sm">←</span>
                <span>Back to timetables</span>
              </Link>
            </div>

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
              <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:justify-between">
                {/* Left side: text menu */}
                <div className="flex-1">
                  {/* Day header */}
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
                </div>

                {/* Right side: 4 image slots linked to 1st–4th dishes */}
                <div className="md:w-72 lg:w-80">
                  <div className="grid grid-cols-2 gap-3">
  {Array.from({ length: 4 }).map((_, idx) => {
    const meal = day.meals[idx];
    return (
      <div
        key={idx}
        className="aspect-square rounded-xl border border-slate-600/80 bg-slate-900/80 shadow-inner shadow-black/40"
      >
        <div className="flex h-full flex-col justify-between p-2">
          <div className="h-5 w-10 rounded-md bg-slate-800/70" />
          <p className="line-clamp-2 text-[11px] text-slate-200/90">
            {meal ? meal.name : "No dish"}
          </p>
        </div>
      </div>
    );
  })}
</div>

      </div>
    );
  })}
</div>
</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
