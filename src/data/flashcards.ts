export const SUBJECTS: Record<string, {
  name: string;
  chapters: Record<string, {
    name: string;
    flashcards?: { q: string; a: string }[];
    is_random?: boolean;
  }>;
}> = {
  eco: {
    name: 'Экономика',
    chapters: {
      eco_ch1: {
        name: '1–2‑бөлүм: Жалпы түшүнүктөр',
        flashcards: [
          { q: 'Экономика илими эмнени изилдейт?', a: 'Чексиз …' },
          // …rest of the cards from the Python file:contentReference[oaicite:2]{index=2}…
        ],
      },
      // …more chapters…
    },
  },
  // …other subjects…
};
