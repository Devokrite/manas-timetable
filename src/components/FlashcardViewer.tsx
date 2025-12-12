"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Flashcard {
  q: string;
  a: string;
  diagram?: string;
}

export default function FlashcardViewer({ cards }: { cards: Flashcard[] }) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset state when cards change
  useEffect(() => {
    setIndex(0);
    setIsFlipped(false);
  }, [cards]);

  const currentCard = cards[index];
  const hasNext = index < cards.length - 1;
  const hasPrev = index > 0;

  const handleNext = () => {
    if (hasNext) {
      setIsFlipped(false);
      setTimeout(() => setIndex((i) => i + 1), 150); // small delay for animation feel
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      setIsFlipped(false);
      setTimeout(() => setIndex((i) => i - 1), 150);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setIsFlipped((f) => !f);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, hasNext, hasPrev]); // Re-bind when index changes to capture correct state

  if (!cards.length) {
    return <div className="text-slate-400">No flashcards found for this chapter.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto w-full space-y-6">
      {/* Progress Bar */}
      <div className="flex items-center justify-between text-xs font-medium text-slate-400">
        <span>Card {index + 1} of {cards.length}</span>
        <div className="flex gap-1">
          {cards.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 w-4 rounded-full transition-colors",
                i === index ? "bg-emerald-400" : i < index ? "bg-emerald-400/30" : "bg-slate-800"
              )}
            />
          ))}
        </div>
      </div>

      {/* The Card */}
      <div
        className="group relative aspect-[3/2] cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={cn(
            "relative h-full w-full rounded-2xl transition-all duration-500 transform-style-3d shadow-xl",
            isFlipped ? "rotate-y-180" : ""
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front (Question) */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-slate-800 border border-slate-700 p-8 flex flex-col items-center justify-center text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-semibold">
              Question
            </span>
            <p className="text-xl md:text-2xl font-medium text-slate-100">
              {currentCard.q}
            </p>
            <span className="absolute bottom-4 text-xs text-slate-500">
              Click or Press Space to Flip
            </span>
          </div>

          {/* Back (Answer) */}
          <div 
            className="absolute inset-0 backface-hidden rounded-2xl bg-slate-900 border border-emerald-500/30 p-8 flex flex-col items-center justify-center text-center rotate-y-180 overflow-y-auto"
          >
            <span className="text-xs uppercase tracking-widest text-indigo-400 mb-4 font-semibold">
              Answer
            </span>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-4">
              {currentCard.a}
            </p>
            {currentCard.diagram && (
               <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 w-full overflow-x-auto">
                 <pre className="text-xs md:text-sm font-mono text-emerald-300 leading-tight whitespace-pre text-left mx-auto inline-block">
                   {currentCard.diagram}
                 </pre>
               </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={!hasPrev}
          className="nav-btn justify-center w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!hasNext}
          className="nav-btn justify-center w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
