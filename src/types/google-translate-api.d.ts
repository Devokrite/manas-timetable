declare module '@vitalets/google-translate-api' {
  interface TranslationResult {
    text: string;
    from: { language: { iso: string } };
    raw: string;
  }

  export default function translate(
    text: string,
    options: { from?: string; to: string }
  ): Promise<TranslationResult>;
}
