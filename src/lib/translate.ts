import translate from "google-translate-open-api";

export async function translateTrToRu(texts: string[]): Promise<string[]> {
  const results: string[] = [];

  for (const text of texts) {
    try {
      const res = await translate(text, {
        tld: "com", // could also be "ru"
        to: "ru",
        from: "tr",
      });

      const translated = Array.isArray(res.data) ? res.data[0] : text;
      results.push(translated);
    } catch (e) {
      console.error("Translation failed:", e);
      results.push(text); // fallback
    }
  }

  return results;
}
