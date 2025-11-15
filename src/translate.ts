export async function translateToRU(text: string): Promise<string> {
  const apiKey = process.env.YANDEX_API_KEY;
  if (!apiKey) return text;

  try {
    const response = await fetch(
      "https://translate.api.cloud.yandex.net/translate/v2/translate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Api-Key ${apiKey}`,
        },
        body: JSON.stringify({
          targetLanguageCode: "ru",
          texts: [text],
        }),
      }
    );

    const data = await response.json();

    return data.translations?.[0]?.text ?? text;
  } catch (e) {
    return text; // fallback if API fails
  }
}
