// src/lib/menu.ts
import * as cheerio from "cheerio";

export type CafeteriaMeal = {
  name: string;
  calories?: number;
  imageUrl?: string | null;
};

export type CafeteriaDay = {
  date: string;     // "13.11.2025"
  weekday: string;  // "Perşembe"
  meals: CafeteriaMeal[];
};

export async function fetchCafeteriaHtml(): Promise<string> {
  const res = await fetch("https://beslenme.manas.edu.kg/menu", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch cafeteria menu");
  }
  return res.text();
}

export function parseCafeteriaMenu(html: string): CafeteriaDay[] {
  const $ = cheerio.load(html);

  const days: CafeteriaDay[] = [];

  let currentDay: CafeteriaDay | null = null;
  let currentMeals: CafeteriaMeal[] = [];
  let lastImageUrl: string | null = null;

  /**
   * Pattern we’re parsing:
   *
   *   h5  -> "13.11.2025 Perşembe"   (date + weekday)
   *   img -> photo for first dish
   *   h5  -> "Bakla Çorbası"         (dish name)
   *   h6  -> "Kalori: 258"           (calories)
   *   img -> photo for second dish
   *   h5  -> second dish name
   *   h6  -> ...
   *
   * then another h5 with date for the next day, etc.
   */

  $("h5, h6, img").each((_i: number, el: cheerio.AnyNode) => {
    const tag = (el as any).tagName?.toLowerCase?.() ?? "";
    const text = $(el).text().trim();

    if (tag === "img") {
      const src = $(el).attr("src") || "";
      if (!src) return;

      const absolute = src.startsWith("http")
        ? src
        : `https://info.manas.edu.kg${src}`;

      lastImageUrl = absolute;
      return;
    }

    if (!text) return;

    if (tag === "h5") {
      const dateMatch = text.match(/^(\d{2}\.\d{2}\.\d{4})\s+(.+)$/);

      if (dateMatch) {
        // This h5 is a *day header* (date + weekday)
        const [, date, weekday] = dateMatch;

        // push previous day
        if (currentDay !== null) {
          const day: CafeteriaDay = currentDay;
          day.meals = currentMeals;
          if (day.meals.length) {
            days.push(day);
          }
        }

        currentDay = {
          date,
          weekday,
          meals: [],
        };
        currentMeals = [];
        lastImageUrl = null;
      } else {
        // This h5 is a *dish name*
        if (currentDay === null) {
          return;
        }

        const meal: CafeteriaMeal = {
          name: text,
          imageUrl: lastImageUrl,
        };
        currentMeals.push(meal);
        lastImageUrl = null;
      }
    } else if (tag === "h6") {
      // calories line: "Kalori: 258"
      const calMatch = text.match(/(\d+)\s*kcal/i);
      const calories = calMatch ? Number(calMatch[1]) : undefined;

      if (
        currentMeals.length &&
        typeof calories === "number" &&
        !currentMeals[currentMeals.length - 1].calories
      ) {
        currentMeals[currentMeals.length - 1].calories = calories;
      }
    }
  });

  // push last day
  if (currentDay !== null) {
    const day: CafeteriaDay = currentDay;
    day.meals = currentMeals;
    if (day.meals.length) {
      days.push(day);
    }
  }

  return days.filter((d) => d.meals.length > 0);
}
