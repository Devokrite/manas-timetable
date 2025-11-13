import * as cheerio from "cheerio";

export function parseCafeteriaMenu(html: string) {
  const $ = cheerio.load(html);
  const DAY_NAMES = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];

  const weeks: Array<{
    title?: string;
    days: Array<{ name: string; date?: string; meals: Array<{ label: string; items: string[] }> }>;
  }> = [];

  const candidates: cheerio.Cheerio[] = [];
  $("section, .container, .content, .panel, .card, main, article, .row, .col, .columns, div").each((_, el) => {
    const text = $(el).text();
    let count = 0;
    for (const d of DAY_NAMES) if (text.includes(d)) count++;
    if (count >= 3) candidates.push($(el));
  });

  let root = candidates.sort((a, b) => b.text().length - a.text().length)[0] || $("body");

  const daysFound: Array<{ name: string; $node: cheerio.Cheerio }> = [];
  root.find("*").each((_, el) => {
    const txt = $(el).text().trim();
    if (DAY_NAMES.includes(txt)) daysFound.push({ name: txt, $node: $(el) });
  });

  const week = { title: findWeekTitle(root), days: [] as any[] };
  for (let i = 0; i < daysFound.length; i++) {
    const { name, $node } = daysFound[i];
    const $end = daysFound[i + 1]?.$node || null;
    const $slice = sliceBetween($node, $end);
    const { date, meals } = extractMeals($slice);
    week.days.push({ name, date, meals });
  }
  if (week.days.length) weeks.push(week);

  return { weeks };
}

function findWeekTitle(root: cheerio.Cheerio) {
  const t = root.find("h1,h2,h3,h4").first().text().trim();
  return t || undefined;
}

function sliceBetween($start: cheerio.Cheerio, $end: cheerio.Cheerio | null) {
  const out: cheerio.Element[] = [];
  let collecting = false;

  const $parent = $start.closest("*").parent();
  if (!$parent.length) return cheerio.load("<div/>")("div");

  $parent.children().each((_, el) => {
    if (el === $start.get(0)) collecting = true;
    if (collecting) out.push(el);
    if ($end && el === $end.get(0)) return false;
  });

  const $ = cheerio.load("<div/>");
  out.forEach((el) => $("div").append(el));
  return $("div");
}

function extractMeals($slice: cheerio.Cheerio) {
  let date: string | undefined;
  const maybeDate = $slice.find("small, .date, time").first().text().trim();
  if (maybeDate) date = maybeDate;

  const meals: Array<{ label: string; items: string[] }> = [];

  $slice.find("table").each((_, table) => {
    const $t = cheerio.load(table)("table");
    const ths = $t.find("th").map((_, th) => cheerio.load(th)("th").text().trim()).get();
    const items = $t.find("td,li").map((_, td) => cheerio.load(td)(td).text().trim()).get().filter(Boolean);
    if (items.length) meals.push({ label: ths.length ? ths.join(" • ") : "Menü", items });
  });

  $slice.find("h4,h5,strong,b").each((_, h) => {
    const label = cheerio.load(h)(h).text().trim();
    if (!label) return;
    const items: string[] = [];
    let $n = cheerio.load(h)(h).next();
    for (let i = 0; i < 10 && $n.length; i++) {
      const tag = ($n.get(0)?.tagName || "").toLowerCase();
      if (["ul", "ol"].includes(tag)) {
        $n.find("li").each((_, li) => {
          const t = cheerio.load(li)(li).text().trim();
          if (t) items.push(t);
        });
        break;
      }
      if (tag === "p") {
        const t = $n.text().trim();
        if (t) items.push(t);
      }
      $n = $n.next();
    }
    if (items.length) meals.push({ label, items });
  });

  if (!meals.length) {
    const items = $slice.find("li").map((_, li) => cheerio.load(li)(li).text().trim()).get().filter(Boolean);
    if (items.length) meals.push({ label: "Menü", items });
  }

  return { date, meals };
}
