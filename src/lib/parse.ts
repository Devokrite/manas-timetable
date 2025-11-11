import * as cheerio from "cheerio";

export type Slot = {
  day: string;
  time: string;
  courseCode?: string;
  courseName?: string;
  teacher?: string;
  room?: string;
};

function isDayPlaceholders(days: string[]) {
  return days.length > 0 && days.every(d => /^day\s*\d+$/i.test(d));
}

function extractTitle($: cheerio.CheerioAPI) {
  const candidates = [
    $("caption").first().text(),
    $("h1").first().text(),
    $("h2").first().text(),
    $("h3").first().text(),
    $("title").text(),
  ].map(s => s.trim()).filter(Boolean);
  return candidates[0] ?? "";
}

function extractGradeFrom(text: string): number | undefined {
  // examples: "1 - sınıf İşletme", "2.sınıf …", "3   sınıf"
  const m = text.toLowerCase().match(/(\d+)\s*[\.\-]?\s*s[ıi]n[ıi]f/);
  const n = m ? parseInt(m[1], 10) : NaN;
  return Number.isFinite(n) ? n : undefined;
}

export function parseDepartmentHtml(html: string) {
  const $ = cheerio.load(html);

  const tables = $("table").toArray();
  if (!tables.length) {
    return { slots: [], meta: { days: [], departmentName: "", grade: undefined } };
  }
  const table = tables.sort((a, b) => $(b).text().length - $(a).text().length)[0];

  // days
  let days: string[] = $(table).find("thead th").slice(1).map((_, th) => $(th).text().trim()).get();
  const rows = $(table).find("tbody tr").toArray();

  if (!days.length || isDayPlaceholders(days)) {
    const hashRow = rows.find(tr => $(tr).children("td").first().text().trim() === "#");
    if (hashRow) {
      days = $(hashRow).children("td").slice(1).map((_, td) =>
        $(td).text().replace(/\s+/g, " ").trim()
      ).get().filter(Boolean);
    }
  }

  const title = extractTitle($);
  const departmentName = title.replace(/^\s*\d+\s*[\.\-]?\s*s[ıi]n[ıi]f\s*\-?\s*/i, "").trim(); // strip leading “1 sınıf - ”
  const grade = extractGradeFrom(title);

  const slots: Slot[] = [];
  for (const tr of rows) {
    const tds = $(tr).children("td");
    if (!tds.length) continue;
    const time = $(tds[0]).text().trim();
    if (time === "#") continue; // skip header-ish row

    tds.slice(1).each((i, td) => {
      const day = days[i] ?? `Day ${i + 1}`;
      const rawHtml = $(td).html() ?? "";
      const unified = rawHtml.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "");
      const entries = unified.split("\n").map(s => s.replace(/\s+/g, " ").trim()).filter(Boolean);
      for (const entry of entries) slots.push({ day, time, courseName: entry });
    });
  }

  return { slots, meta: { days, departmentName, grade } };
}

