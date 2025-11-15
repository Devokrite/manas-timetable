// src/lib/translate.ts
import translate from "google-translate-open-api";

export async function translateTrToRu(texts: string[]): Promise<string[]> {
  const results: string[] = [];

  for (const text of texts) {
    try {
      const res = await translate(text, {
        tld: "com", // use "com" or "ru"
        to: "ru",
        from: "tr",
      });

      const translated = res.data[0];
      results.push(translated);
    } catch (e) {
      console.error("Translation failed:", e);
      results.push(text);
    }
  }

  return results;
}
