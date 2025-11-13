import * as cheerio from "cheerio";

type Meal = { label: string; items: string[] };
type Day = { name: string; date?: string; meals: Meal[] };
type Week = { title?: string; days: Day[] };

export function parseCafeteriaMenu(html: string): { weeks: Week[] } {
  const $ = cheerio.load(html);
  const DAY_NAMES = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];

  const weeks: Week[] = [];

  // Find big containers that likely hold the week menu
  const candidates: any[] = [];
  $("section, .container, .content, .panel, .card, main, article, .row, .col, .columns, div").each(
    (_idx, el) => {
      const text = $(el).text();
      let count = 0;
      for (const d of DAY_NAMES) {
        if (text.includes(d)) count++;
      }
      if (count >= 3) {
        candidates.push($(el));
      }
    }
  );

  // biggest text block = likely the main menu area
  let root: any = candidates.sort(
    (a: any, b: any) => b.text().length - a.text().length
  )[0] || $("body");

  // Find all day headings inside that root
  const daysFound: { name: string; node: any }[] = [];
  root.find("*").each((_i: number, el: any) => {
    const txt = $(el).text().trim();
    if (DAY_NAMES.includes(txt)) {
      daysFound.push({ name: txt, node: $(el) });
    }
  });

  const week: Week = { title: findWeekTitle(root), days: [] };

  for (let i = 0; i < daysFound.length; i++) {
    const { name, node } = daysFound[i];
    const next = daysFound[i + 1]?.node ?? null;

    const slice = sliceBetween(node, next);
    const { date, meals } = extractMeals(slice);

    week.days.push({ name, date, meals });
  }

  if (week.days.length) {
    weeks.push(week);
  }

  return { weeks };
}

// Try to find a title near the top (like current week range)
function findWeekTitle(root: any): string | undefined {
  const t = root.find("h1,h2,h3,h4").first().text().trim();
  return t || undefined;
}

// Grab nodes between two markers
function sliceBetween(start: any, end: any): any {
  const out: any[] = [];
  let collecting = false;

  const parent = start.closest("*").parent();
  if (!parent.length) {
    return cheerio.load("<div/>")("div");
  }

  parent.children().each((_i: number, el: any) => {
    if (el === start.get(0)) collecting = true;
    if (collecting) out.push(el);
    if (end && el === end.get(0)) return false;
  });

  const $ = cheerio.load("<div/>");
  out.forEach((el) => $("div").append(el));
  return $("div");
}

// Parse meals from the slice
function extractMeals(slice: any): { date?: string; meals: Meal[] } {
  let date: string | undefined;

  const maybeDate = slice.find("small, .date, time").first().text().trim();
  if (maybeDate) date = maybeDate;

  const meals: Meal[] = [];

  // Tables
  slice.find("table").each((_i: number, table: any) => {
    const $t = cheerio.load(table)("table");
    const ths = $t
      .find("th")
      .map((_j: number, th: any) => cheerio.load(th)("th").text().trim())
      .get();
    const items = $t
      .find("td,li")
      .map((_j: number, td: any) => cheerio.load(td)(td).text().trim())
      .get()
      .filter(Boolean);

    if (items.length) {
      meals.push({ label: ths.length ? ths.join(" • ") : "Menü", items });
    }
  });

  // Headings + lists (e.g. "Öğle", "Akşam")
  slice.find("h4,h5,strong,b").each((_i: number, h: any) => {
    const label = cheerio.load(h)(h).text().trim();
    if (!label) return;

    const items: string[] = [];
    let n = cheerio.load(h)(h).next();
    for (let k = 0; k < 10 && n.length; k++) {
      const tag = (n.get(0)?.tagName || "").toLowerCase();
      if (tag === "ul" || tag === "ol") {
        n.find("li").each((_l: number, li: any) => {
          const t = cheerio.load(li)(li).text().trim();
          if (t) items.push(t);
        });
        break;
      }
      if (tag === "p") {
        const t = n.text().trim();
        if (t) items.push(t);
      }
      n = n.next();
    }
    if (items.length) {
      meals.push({ label, items });
    }
  });

  // Fallback: any <li> items in the slice
  if (!meals.length) {
    const items = slice
      .find("li")
      .map((_i: number, li: any) => cheerio.load(li)(li).text().trim())
      .get()
      .filter(Boolean);
    if (items.length) {
      meals.push({ label: "Menü", items });
    }
  }

  return { date, meals };
}
