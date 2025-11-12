// Run: node scripts/build-timetables.js
// Produces: public/departments/<id>.json for each listed department

const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const IDS = [10, 7, 1, 191]; // your chosen departments
const OUT_DIR = path.join(process.cwd(), "public", "departments");

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchHtml(id) {
  const headers = {
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118 Safari/537.36",
  };
  const urls = [
    `https://timetable.manas.edu.kg/department-printer/${id}`,
    `http://timetable.manas.edu.kg/department-printer/${id}`,
  ];
  for (const u of urls) {
    try {
      const res = await fetch(u, { headers, cache: "no-store" });
      if (res.ok) return await res.text();
    } catch {}
  }
  return "";
}

function parseDepartmentHtml(html) {
  if (!html) return { slots: [], meta: { days: [], departmentName: "" } };
  const $ = cheerio.load(html);

  const title =
    ($("caption").first().text() ||
      $("h1").first().text() ||
      $("h2").first().text() ||
      $("title").text() ||
      "").trim();

  const gm = title.toLowerCase().match(/(\d+)\s*[\.\-]?\s*s[ıi]n[ıi]f/);
  const grade = gm ? parseInt(gm[1], 10) : undefined;
  const departmentName = title.replace(/^\s*\d+\s*[\.\-]?\s*s[ıi]n[ıi]f\s*[-–—]?\s*/i, "").trim() || title;

  const table = $("table").toArray().sort((a,b)=>$(b).text().length-$(a).text().length)[0];
  if (!table) return { slots: [], meta: { days: [], departmentName, grade } };

  let days = $(table).find("thead th").slice(1).map((_, th) => $(th).text().trim()).get();
  const rows = $(table).find("tbody tr").toArray();
  if (!days.length || days.every(d => /^day\s*\d+$/i.test(d))) {
    const hashRow = rows.find(tr => $(tr).children("td").first().text().trim() === "#");
    if (hashRow) {
      days = $(hashRow)
        .children("td")
        .slice(1)
        .map((_, td) => $(td).text().replace(/\s+/g," ").trim())
        .get()
        .filter(Boolean);
    }
  }

  const slots = [];
  for (const tr of rows) {
    const tds = $(tr).children("td");
    if (!tds.length) continue;
    const time = $(tds[0]).text().trim();
    if (time === "#") continue;
    tds.slice(1).each((i, td) => {
      const day = days[i] ?? `Day ${i+1}`;
      const raw = $(td).html() ?? "";
      const txt = raw.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "");
      const entries = txt.split("\n").map(s => s.replace(/\s+/g," ").trim()).filter(Boolean);
      for (const entry of entries) slots.push({ day, time, courseName: entry });
    });
  }

  return { slots, meta: { days, departmentName, grade } };
}

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let done = 0;
  for (const id of IDS) {
    process.stdout.write(`Fetching ${id} … `);
    const html = await fetchHtml(id);
    if (!html) { console.log("failed"); continue; }
    const data = parseDepartmentHtml(html);
    const file = path.join(OUT_DIR, `${id}.json`);
    fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf-8");
    console.log(`saved → ${path.relative(process.cwd(), file)}`);
    done++;
    await sleep(120);
  }
  console.log(`\nDone. Saved ${done}/${IDS.length} JSON files in ${path.relative(process.cwd(), OUT_DIR)}`);
}

run().catch(e => { console.error(e); process.exit(1); });
