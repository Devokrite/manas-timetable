// Run with: node scripts/build-catalog-1.js
// Outputs: public/catalog-1.json  (contains ALL departments we detect; UI will filter grade=1)

const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const OUT = path.join(process.cwd(), "public", "catalog-1.json");

const MAX_ID = 175;
const CONC = 16;   // higher concurrency = faster one-time build
const BATCH = 16;

function sleep(ms){ return new Promise(r=>setTimeout(r, ms)); }

async function fetchHtml(id) {
  const headers = {
    // Some servers return minimal HTML without a UA
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

function extractTitle($) {
  const cands = [
    $("caption").first().text(),
    $("h1").first().text(),
    $("h2").first().text(),
    $("h3").first().text(),
    $("title").text(),
  ]
    .map((s) => (s || "").trim())
    .filter(Boolean);

  if (cands.length) return cands[0];

  // Fallback: the page sometimes has a plain text heading near the table
  const near = $("table").first().prevAll().slice(0, 5).text().trim();
  if (near) return near;

  // As a last resort, grab the first big text block
  const big = $("body").text().trim().split("\n").map(s=>s.trim()).filter(Boolean)[0] || "";
  return big;
}

function parseGradeAndName(title) {
  // Accept variants like: "1 - sınıf İşletme", "1.sınıf ...", "1   sınıf"
  const low = title.toLowerCase();
  const m = low.match(/(\d+)\s*[\.\-]?\s*s[ıi]n[ıi]f/); // sınıf
  const grade = m ? parseInt(m[1], 10) : undefined;

  // Remove "1 sınıf -", "1.sınıf", etc. from the front to get department name
  const name = title.replace(/^\s*\d+\s*[\.\-]?\s*s[ıi]n[ıi]f\s*[-–—]?\s*/i, "").trim();

  // If stripping failed and name is empty, just use original title (better than nothing)
  return { grade, name: name || title.trim() };
}

async function fetchOne(id) {
  const html = await fetchHtml(id);
  if (!html) return null;
  const $ = cheerio.load(html);
  const title = extractTitle($);
  if (!title) return null;
  const { grade, name } = parseGradeAndName(title);
  if (!name) return null;
  // We keep ALL grades; UI will filter to grade=1
  return { id, name, grade };
}

async function run() {
  console.log("Building catalog (all grades) …");
  const all = [];
  for (let start = 1; start <= MAX_ID; start += BATCH) {
    const ids = Array.from(
      { length: Math.min(BATCH, MAX_ID - start + 1) },
      (_, i) => start + i
    );

    // Do sub-batches at high concurrency
    for (let i = 0; i < ids.length; i += CONC) {
      const part = ids.slice(i, i + CONC);
      const results = await Promise.all(part.map(fetchOne));
      for (const r of results) if (r) all.push(r);
    }

    await sleep(120); // politeness
    console.log(`.. processed up to ID ${Math.min(start + BATCH - 1, MAX_ID)} (found so far: ${all.length})`);
  }

  // Deduplicate by id and sort by name
  const uniq = [];
  const seen = new Set();
  for (const it of all) {
    if (seen.has(it.id)) continue;
    seen.add(it.id);
    uniq.push(it);
  }
  uniq.sort((a, b) => a.name.localeCompare(b.name));

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ items: uniq }, null, 2), "utf-8");
  console.log(`Saved ${uniq.length} entries to ${OUT}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

