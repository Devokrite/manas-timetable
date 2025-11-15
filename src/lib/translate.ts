// src/lib/translate.ts
import translate from "@vitalets/google-translate-api";


export async function translateTrToRu(texts: string[]): Promise<string[]> {
  const results: string[] = [];

  for (const text of texts) {
    try {
      const translated = await GoogleTranslator.translate(text, { from: "tr", to: "ru" });
      results.push(translated);
    } catch (e) {
      console.error("Translation failed:", e);
      results.push(text); // fallback to Turkish
    }
  }

  return results;
}
