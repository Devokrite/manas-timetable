// src/lib/translate.ts
import translate from "@vitalets/google-translate-api";

export async function translateTrToRu(texts: string[]): Promise<string[]> {
  const results: string[] = [];

  for (const text of texts) {
    try {
      const res = await translate(text, { from: "tr", to: "ru" });
      results.push(res.text);
    } catch (e) {
      console.error("Translation failed:", e);
      results.push(text); // fallback
    }
  }

  return results;
}
