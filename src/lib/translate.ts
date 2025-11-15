// src/lib/translate.ts

const API_URL =
  "https://translate.api.cloud.yandex.net/translate/v2/translate";

/**
 * Batch translate Turkish -> Russian.
 * Input:  ["Patates Musakka", "Maş Çorbası"]
 * Output: ["Картофельная мусака", "Суп из маша"]
 */
export async function translateTrToRu(texts: string[]): Promise<string[]> {
  const cleaned = texts.map((t) => t.trim()).filter(Boolean);
  if (cleaned.length === 0) return texts;

  const apiKey = process.env.YANDEX_TRANSLATE_API_KEY;
  if (!apiKey) {
    // no key configured => just return original texts
    return texts;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: Api-Key ${apiKey},
      },
      body: JSON.stringify({
        sourceLanguageCode: "tr",
        targetLanguageCode: "ru",
        format: "PLAIN_TEXT",
        texts: cleaned,
      }),
    });

    if (!res.ok) {
      console.error("Yandex Translate error:", res.status, await res.text());
      return texts;
    }

    const data = (await res.json()) as {
      translations?: { text: string }[];
    };

    if (!data.translations || data.translations.length !== cleaned.length) {
      return texts;
    }

    return data.translations.map((t) => t.text);
  } catch (err) {
    console.error("Yandex Translate request failed:", err);
    return texts;
  }
}
