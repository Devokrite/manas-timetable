// src/app/menu/page.tsx
import { translateTrToRu } from "@/lib/translate";
import Sidebar from "@/components/Sidebar"; // adjust path if needed
import Image from "next/image";
import Link from "next/link";
import { fetchCafeteriaHtml, parseCafeteriaMenu } from "@/lib/menu";

export const dynamic = "force-dynamic";

export default async function MenuPage() {
  const html = await fetchCafeteriaHtml();
  const days = parseCafeteriaMenu(html);
    // --- Build a map: Turkish dish name -> Russian translation ---
  const allMeals = days.flatMap((day) => day.meals);
  const uniqueTurkish = Array.from(new Set(allMeals.map((m) => m.name)));

  let ruMap = new Map<string, string>();

  if (uniqueTurkish.length > 0) {
    try {
      const ruTexts = await translateTrToRu(uniqueTurkish);
      ruMap = new Map(uniqueTurkish.map((tr, i) => [tr, ruTexts[i] ?? tr]));
    } catch (e) {
      console.error("Translation error", e);
      // fall back to just Turkish
      ruMap = new Map(uniqueTurkish.map((tr) => [tr, tr]));
    }
  }
  console.log("🔤 uniqueTurkish", uniqueTurkish);
  console.log("📘 translated ruMap", ruMap);


  return (
    <div className="flex">
      <Sidebar />
        <main className="flex-1 bg-slate-950 text-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/select"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 hover:bg-slate-800"
          >
            ← Back to timetables
          </Link>
          <span className="text-[11px] text-slate-400">
            Updated weekly · Data from{" "}
            <a
              href="https://beslenme.manas.edu.kg/menu"
              className="underline underline-offset-2 hover:text-slate-200"
              target="_blank"
            >
              beslenme.manas.edu.kg
            </a>
          </span>
        </div>

        <h1 className="text-2xl font-semibold tracking-tight mb-1">
          Cafeteria Menu
        </h1>

        <div className="space-y-6 mt-4">
          {days.map((day) => (
            <section
              key={day.date + day.weekday}
              className="rounded-3xl bg-slate-900/70 ring-1 ring-slate-800/70 shadow-[0_18px_60px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-4 sm:p-5 md:flex-row md:items-stretch">
                {/* LEFT: day + dishes list */}
                <div className="flex-1">
                  <div className="mb-3 flex items-baseline gap-3">
                    <p className="text-sm font-semibold text-slate-100">
                      {day.weekday}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      {day.date}
                    </p>
                    <div className="ml-auto text-[10px] font-medium text-emerald-400">
                      {day.meals.length} DISHES
                    </div>
                  </div>

                  <ul className="space-y-1">
                 {day.meals.map((meal) => {
                  const ru = ruMap.get(meal.name);
                  return (
                    <li key={meal.name} className="flex flex-col text-sm text-slate-100">
                    <span className="font-medium">
                {meal.name}
                {ru && ru !== meal.name && (
                  <span className="ml-2 text-slate-400">
                    · {ru}
                  </span>
                )}
                </span>

              <span className="text-xs text-slate-500">
            {meal.calories ? `${meal.calories} kcal` : ""}
        </span>
      </li>
    );
  })}
</ul>

                </div>

                {/* RIGHT: image grid – first 4 dishes */}
                <div className="w-full shrink-0 md:w-[360px] lg:w-[420px]">
                  <div className="grid grid-cols-2 gap-3">
                    {day.meals.slice(0, 4).map((meal, idx) => (
                      <div
                        key={meal.name + idx}
                        className="relative h-28 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60"
                      >
                        {meal.imageUrl ? (
                          <Image
                            src={meal.imageUrl}
                            alt={meal.name}
                            fill
                            sizes="180px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-[10px] text-slate-500">
                            no image
                          </div>
                        )}

                        {/* dark gradient + dish name badge */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-2 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-slate-50 backdrop-blur-sm">
                          <span className="truncate">{meal.name}</span>
                          {meal.calories && (
                            <span className="shrink-0 text-[9px] text-emerald-300/90">
                              {meal.calories} kcal
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
