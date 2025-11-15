// src/lib/translate.ts
import { GoogleTranslator } from 'deep-translator';

export async function translateTrToRu(texts: string[]): Promise<string[]> {
  const results: string[] = [];

  for (const text of texts) {
    try {
      const translated = await new GoogleTranslator({ source: 'tr', target: 'ru' }).translate(text);
      results.push(translated);
    } catch (e) {
      console.error("Translation failed for:", text, e);
      results.push(text); // fallback to original
    }
  }

  return results;
}
