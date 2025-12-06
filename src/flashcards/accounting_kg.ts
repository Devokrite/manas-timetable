// src/flashcards/accounting_kg.ts
export interface AccountingFlashcard {
  id: string;
  topic: string;
  question: string;
  answer: string;
}

export const accountingKgFlashcards: AccountingFlashcard[] = [
  // Example entries – replace or extend with your own questions/answers
  /*
  {
    id: "acc-1",
    topic: "Негизги түшүнүктөр",
    question: "Бухгалтердик эсеп деген эмне?",
    answer: "Бухгалтердик эсеп – ишкананын финансылык ишмердүүлүгүн системалуу түрдө каттоо, топтоо жана турун анализдөө процесси.",
  },
  {
    id: "acc-2",
    topic: "Тендемдик теңдеме",
    question: "Активдер + Капитал = ?",
    answer: "Активдер + Капитал = Мажбурияттар.  Бул бухгалтердик теңдеменин негизги формуласы.",
  },
  */
];
