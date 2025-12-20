import { translateTrToRu } from "@/lib/translate";
import Image from "next/image";
import { fetchCafeteriaHtml, parseCafeteriaMenu } from "@/lib/menu";

// We removed "import Sidebar" because it's already in layout.tsx

export const dynamic = "force-dynamic";
export const revalidate = 1800; // Cache for 30 minutes

export default async function MenuPage() {
  const html = await fetchCafeteriaHtml();
  const days = parseCafeteriaMenu(html);

  const allMeals = days.flatMap((day) => day.meals);
  const uniqueTurkish = Array.from(new Set(allMeals.map((m) => m.name)));

  let ruMap = new Map<string, string>();

  if (uniqueTurkish.length > 0) {
    try {
      const ruTexts = await translateTrToRu(uniqueTurkish);
      ruMap = new Map(uniqueTurkish.map((tr, i) => [tr, ruTexts[i] ?? tr]));
    } catch (e) {
      console.error("Translation error", e);
      ruMap = new Map(uniqueTurkish.map((tr) => [tr, tr]));
    }
  }

  return (
    // FIX: Removed outer "flex" wrapper and Sidebar components.
    // Added 'pb-24' so you can scroll to the bottom on mobile.
    <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 py-6 space-y-6 pb-24">
      <span className="text-[11px] text-slate-400 mb-2 block">
        Updated weekly · Data from{" "}
        <a
          href="https://beslenme.manas.edu.kg/menu"
          className="underline underline-offset-2 hover:text-slate-200"
          target="_blank"
        >
          beslenme.manas.edu.kg
        </a>
      </span>

      <h1 className="text-2xl font-semibold tracking-tight mb-1 text-slate-100">
        Cafeteria Menu
      </h1>

      <div className="space-y-6 mt-4">
        {days.map((day) => (
          <section
            key={day.date + day.weekday}
            className="rounded-3xl bg-slate-900/70 ring-1 ring-slate-800/70 shadow-[0_18px_60px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="p-4 sm:p-5">
              <div className="mb-3 flex items-baseline gap-3">
                <p className="text-base font-semibold text-slate-100">
                  {day.weekday}
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  {day.date}
                </p>
                <div className="ml-auto text-[10px] font-medium text-emerald-400">
                  {day.meals.length} DISHES
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
                {day.meals.slice(0, 4).map((meal, idx) => {
                  const ru = ruMap.get(meal.name);
                  return (
                    <div
                      key={meal.name + idx}
                      className="rounded-2xl border border-slate-800 bg-slate-950/60 overflow-hidden"
                    >
                      <div className="relative h-28">
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
                      </div>
                      <div className="p-2 text-xs text-slate-100 space-y-1">
                        <div className="font-medium">
                          {meal.name} {ru && ru !== meal.name && <span className="text-slate-400">· {ru}</span>}
                        </div>
                        {meal.calories && <div className="text-emerald-400">{meal.calories} kcal</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
