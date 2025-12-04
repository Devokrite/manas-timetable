// src/app/flashcards/economics_kg.ts

export type EconomicsFlashcard = {
  id: string;
  topic: string;
  question: string;
  answer: string;
};

export const economicsKgFlashcards: EconomicsFlashcard[] = [
  {
    id: "econ-base-1",
    topic: "Экономиканын негиздери",
    question: "Экономика эмне?",
    answer:
      "Экономика — бул чектелген ресурстарды адамдардын чексиз муктаждыктарын канааттандыруу үчүн бөлүштүрүүнү изилдеген илим.",
  },
  {
    id: "econ-base-2",
    topic: "Ресурстар",
    question: "Экономикалык ресурстар деген эмне?",
    answer:
      "Жер, эмгек, капитал жана ишкердик жөндөм ресурстар деп аталат. Алар товар жана кызмат өндүрүүдө колдонулат.",
  },
];
