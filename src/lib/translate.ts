// src/lib/translate.ts
export async function translateTrToRu(texts: string[]): Promise<string[]> {
  const results: string[] = [];

  for (const text of texts) {
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=tr&tl=ru&dt=t&q=${encodeURIComponent(
        text
      )}`;
      const res = await fetch(url);
      const json = await res.json();
      const translated = json?.[0]?.[0]?.[0] || text;

      console.log(`✅ ${text} → ${translated}`);
      results.push(translated);
    } catch (e) {
      console.error("❌ Translation failed for:", text, e);
      results.push(text);
    }
  }

  return results;
}
