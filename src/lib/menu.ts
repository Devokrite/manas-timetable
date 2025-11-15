// src/lib/menu.ts
import * as cheerio from "cheerio";

export type CafeteriaMeal = {
  name: string;
  calories?: number;
  imageUrl?: string | null;
};

export type CafeteriaDay = {
  date: string;
  weekday: string;
  meals: CafeteriaMeal[];
};

// Dummy initial object to avoid null/undefined
const EMPTY_DAY: CafeteriaDay = {
  date: "",
  weekday: "",
  meals: [],
};

export async function fetchCafeteriaHtml(): Promise<string> {
  const res = await fetch("https://beslenme.manas.edu.kg/menu", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch cafeteria menu");
  return res.text();
}

export function parseCafeteriaMenu(html: string): CafeteriaDay[] {
  const $ = cheerio.load(html);

  const days: CafeteriaDay[] = [];

  let currentDay: CafeteriaDay = { ...EMPTY_DAY };
  let currentMeals: CafeteriaMeal[] = [];
  let lastImageUrl: string | null = null;

  $("h5, h6, img").each((_, el) => {
    const tag = (el as any).tagName?.toLowerCase?.() ?? "";
    const text = $(el).text().trim();

    // === IMG ===
    if (tag === "img") {
      const src = $(el).attr("src") || "";
      if (!src) return;

      lastImageUrl = src.startsWith("http")
        ? src
        : `https://info.manas.edu.kg${src}`;
      return;
    }

    if (!text) return;

    // === DAY HEADER ===
    const dateMatch = text.match(/^(\d{2}\.\d{2}\.\d{4})\s+(.+)$/);

    if (tag === "h5" && dateMatch) {
      // If previous day has meals, push it
      if (currentDay.date !== "" && currentMeals.length > 0) {
        currentDay.meals = currentMeals;
        days.push(currentDay);
      }

      const [, date, weekday] = dateMatch;

      currentDay = {
        date,
        weekday,
        meals: [],
      };

      currentMeals = [];
      lastImageUrl = null;
      return;
    }

    // === DISH NAME ===
    if (tag === "h5" && !dateMatch) {
      const meal: CafeteriaMeal = {
        name: text,
        imageUrl: lastImageUrl,
      };
      currentMeals.push(meal);
      lastImageUrl = null;
      return;
    }

    // === CALORIES ===
    if (tag === "h6") {
      const calMatch = text.match(/(\d+)\s*(?:kcal|kalori)/i);
      if (calMatch && currentMeals.length > 0) {
        currentMeals[currentMeals.length - 1].calories = Number(calMatch[1]);
      }
    }
  });

  // === FINAL PUSH ===
  if (currentDay.date !== "" && currentMeals.length > 0) {
    currentDay.meals = currentMeals;
    days.push(currentDay);
  }

  return days;
}
