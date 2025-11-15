// src/lib/translate.ts
const API_URL =
  "https://translate.api.cloud.yandex.net/translate/v2/translate";

/**
 * Simple in-memory cache so we don't spam the API
 * key: original Turkish string
 * value: Russian translation
 */
const cache = new Map<string, string>();

export async function translateTrToRu(text: string): Promise<string> {
  const trimmed = text.trim();
  if (!trimmed) return "";

  // 1. Check cache
  const cached = cache.get(trimmed);
  if (cached) return cached;

  // 2. Get API key from env (set in Vercel as YANDEX_TRANSLATE_API_KEY)
  const apiKey = process.env.YANDEX_API_KEY;
  if (!apiKey) {
    // If no key configured, just return original text to avoid breaking the UI
    return trimmed;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Api-Key ${apiKey}`,
      },
      body: JSON.stringify({
        sourceLanguageCode: "tr",
        targetLanguageCode: "ru",
        format: "PLAIN_TEXT",
        texts: [trimmed],
      }),
    });

    if (!res.ok) {
      console.error("Yandex Translate error:", res.status, await res.text());
      return trimmed;
    }

    const data = (await res.json()) as {
      translations?: { text: string }[];
    };

    const translated =
      data.translations && data.translations[0]
        ? data.translations[0].text
        : trimmed;

    cache.set(trimmed, translated);
    return translated;
  } catch (err) {
    console.error("Yandex Translate request failed:", err);
    return trimmed;
  }
}
