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
    // make sure we always hit the real page (no cache)
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
   * The HTML pattern is basically:
   *   h5  -> "13.11.2025 Perşembe"   (date + weekday)
   *   img -> photo for first dish
   *   h5  -> "Bakla Çorbası"        (dish name)
   *   h6  -> "Kalori: 258"          (calories)
   *   img -> photo for second dish
   *   h5  -> second dish name
   *   h6  -> ...
   * and so on, then another date h5 when the next day starts.
   */

  $("h5, h6, img").each((_i, el) => {
    const tag = (el as any).tagName?.toLowerCase?.() ?? "";
    const text = $(el).text().trim();

    if (tag === "img") {
      const src = $(el).attr("src") || "";
      if (!src) return;

      // Images live on info.manas.edu.kg; sometimes src may be relative, so normalise
      const absolute = src.startsWith("http")
        ? src
        : `https://info.manas.edu.kg${src}`;

      lastImageUrl = absolute;
      return;
    }

    // from here on we handle h5 / h6
    if (!text) return;

    if (tag === "h5") {
      const dateMatch = text.match(/^(\d{2}\.\d{2}\.\d{4})\s+(.+)$/);

      if (dateMatch) {
        // This h5 is a *day header* (date + weekday)
        const [, date, weekday] = dateMatch;

        // push previous day first
        if (currentDay) {
          currentDay.meals = currentMeals;
          if (currentDay.meals.length) {
            days.push(currentDay);
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
        if (!currentDay) {
          // if somehow no day started yet, ignore
          return;
        }

        const meal: CafeteriaMeal = {
          name: text,
          imageUrl: lastImageUrl, // whatever img we saw right before this
        };
        currentMeals.push(meal);
        lastImageUrl = null; // don't leak this image to the next dish
      }
    } else if (tag === "h6") {
      // calories line: "Kalori: 258"
      const calMatch = text.match(/(\d+)\s*kcal/i);
      const calories = calMatch ? Number(calMatch[1]) : undefined;

      if (currentMeals.length && calories && !currentMeals[currentMeals.length - 1].calories) {
        currentMeals[currentMeals.length - 1].calories = calories;
      }
    }
  });

  // push the last day
  if (currentDay) {
    currentDay.meals = currentMeals;
    if (currentDay.meals.length) {
      days.push(currentDay);
    }
  }

  // just in case there is junk on the page
  return days.filter((d) => d.meals.length > 0);
}
