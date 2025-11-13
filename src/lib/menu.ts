import * as cheerio from "cheerio";

export interface CafeteriaMeal {
  name: string;
  calories?: string;
}

export interface CafeteriaDay {
  date: string;      // e.g. "13.11.2025"
  weekday: string;   // e.g. "Perşembe"
  meals: CafeteriaMeal[];
}

export interface CafeteriaMenu {
  days: CafeteriaDay[];
}

export function parseCafeteriaMenu(html: string): CafeteriaMenu {
  const $ = cheerio.load(html);

  const days: CafeteriaDay[] = [];

  let currentDay: CafeteriaDay | null = null;
  let currentMeals: CafeteriaMeal[] = [];
  let lastMealIndex: number | null = null;

  // The page is basically a sequence of h5 (dates + dish names) and h6 (calories)
  $("h5, h6").each((_, el: any) => {
    const tag = (el.tagName || "").toLowerCase();
    const text = $(el).text().trim();
    if (!text) return;

    if (tag === "h5") {
      // Day heading? Example: "13.11.2025 Perşembe"
      const m = text.match(/^(\d{2}\.\d{2}\.\d{4})\s+(.+)/);
      if (m) {
        // If we were already inside a day, finalize it
        if (currentDay) {
          currentDay.meals = currentMeals;
          days.push(currentDay);
        }

        currentDay = {
          date: m[1],      // 13.11.2025
          weekday: m[2],   // Perşembe
          meals: [],
        };
        currentMeals = [];
        lastMealIndex = null;
      } else if (currentDay) {
        // This h5 is a dish name under the current day
        currentMeals.push({ name: text });
        lastMealIndex = currentMeals.length - 1;
      }
    } else if (tag === "h6" && currentDay && lastMealIndex != null) {
      // Likely "Kalori: 258"
      if (/kalori/i.test(text)) {
        const calories = text.replace(/.*?:\s*/i, "").trim();
        const meal = currentMeals[lastMealIndex];
        meal.calories = calories;
      }
    }
  });

  // Push the last day we were building
  if (currentDay) {
    currentDay.meals = currentMeals;
    days.push(currentDay);
  }

  return { days };
}
