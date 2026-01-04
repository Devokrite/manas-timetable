// src/components/GpaCalculator.tsx
"use client";

import React, { useState } from "react";

// Define the shape of a subject
interface Subject {
  id: string;
  name: string;
  credits: number;
  hasAssignment?: boolean;
}

// List of subjects with their credit values
const subjects: Subject[] = [
  { id: "eco", name: "Economics", credits: 5 },
  { id: "math", name: "Mathematics", credits: 5 },
  { id: "kg", name: "Kyrgyz Language", credits: 5 },
  { id: "law", name: "Law", credits: 4 },
  { id: "acc", name: "Accounting", credits: 5 },
  { id: "man", name: "Management", credits: 5, hasAssignment: true },
  { id: "pe", name: "Physical Education", credits: 0 },
];

// Letter grade to grade point mapping
const gradePoints: Record<string, number> = {
  AA: 4.0,
  BA: 3.5,
  BB: 3.0,
  CB: 2.5,
  CC: 2.0,
  DC: 1.5,
  DD: 1.0,
  FF: 0.0,
};

// Convert numeric score to letter grade
const toLetter = (score: number): keyof typeof gradePoints => {
  if (score >= 90) return "AA";
  if (score >= 85) return "BA";
  if (score >= 80) return "BB";
  if (score >= 75) return "CB";
  if (score >= 65) return "CC";
  if (score >= 58) return "DC";
  if (score >= 50) return "DD";
  return "FF";
};

// Compute total score based on course type
function computeTotal(
  subject: Subject,
  visa: number,
  finalExam: number,
  assignment: number
): number {
  const v = isNaN(visa) ? 0 : visa;
  const f = isNaN(finalExam) ? 0 : finalExam;
  const a = isNaN(assignment) ? 0 : assignment;
  // Management uses homework (24%), visa (36%), final (40%)
  if (subject.hasAssignment) {
    return 0.36 * v + 0.24 * a + 0.40 * f;
  }
  // Other subjects: visa 40%, final 60%
  return 0.40 * v + 0.60 * f;
}

export default function GpaCalculator() {
  // State to hold input values for each subject
  const [scores, setScores] = useState<
    Record<string, { visa: number | ""; final: number | ""; assignment: number | "" }>
  >(() => {
    const init: Record<string, any> = {};
    subjects.forEach((s) => {
      init[s.id] = { visa: "", final: "", assignment: "" };
    });
    return init;
  });

  // Update handler for score inputs
  const handleChange = (
    id: string,
    field: "visa" | "final" | "assignment",
    value: string
  ) => {
    const numValue = value === "" ? "" : parseFloat(value);
    setScores((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: numValue },
    }));
  };

  // Build the results array
  const results = subjects.map((subj) => {
    const { visa, final: finalExam, assignment } = scores[subj.id];
    const total = computeTotal(
      subj,
      typeof visa === "number" ? visa : 0,
      typeof finalExam === "number" ? finalExam : 0,
      typeof assignment === "number" ? assignment : 0
    );
    const letter = toLetter(total);
    const point = gradePoints[letter];
    return { subj, total, letter, point };
  });

  // Compute overall GPA
  const totalCredits = results.reduce((sum, r) => sum + r.subj.credits, 0);
  const totalPoints = results.reduce(
    (sum, r) => sum + r.point * r.subj.credits,
    0
  );
  const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <h2 className="text-3xl font-bold text-center">GPA Calculator</h2>
      <p className="text-sm text-slate-400 text-center">
        Enter your scores below. The midterm (visa) and final exam are required
        for all courses. Homework is used only for Management.
      </p>

      <div className="space-y-8">
        {subjects.map((subj) => (
          <div
            key={subj.id}
            className="p-4 border border-slate-700 rounded-xl bg-slate-800 space-y-4"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              {subj.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-slate-300 mb-1">
                  Midterm (Visa)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={scores[subj.id].visa}
                  onChange={(e) =>
                    handleChange(subj.id, "visa", e.target.value)
                  }
                  className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-100"
                />
              </div>
              {subj.hasAssignment && (
                <div className="flex flex-col">
                  <label className="text-sm text-slate-300 mb-1">
                    Homework
                  </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={scores[subj.id].assignment}
                      onChange={(e) =>
                        handleChange(subj.id, "assignment", e.target.value)
                      }
                      className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-100"
                    />
                </div>
              )}
              <div className="flex flex-col">
                <label className="text-sm text-slate-300 mb-1">Final Exam</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={scores[subj.id].final}
                  onChange={(e) =>
                    handleChange(subj.id, "final", e.target.value)
                  }
                  className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-100"
                />
              </div>
            </div>

            {/* Per-subject results */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <span>
                Total Score:{" "}
                <strong>
                  {results.find((r) => r.subj.id === subj.id)?.total.toFixed(2)}
                </strong>
              </span>
              <span>
                Grade:{" "}
                <strong>
                  {results.find((r) => r.subj.id === subj.id)?.letter}
                </strong>
              </span>
              <span>
                Points:{" "}
                <strong>
                  {results
                    .find((r) => r.subj.id === subj.id)
                    ?.point.toFixed(1)}
                </strong>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Overall GPA */}
      <div className="p-4 border border-slate-700 rounded-xl bg-slate-800 mt-6">
        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
          Overall GPA
        </h3>
        <p className="text-2xl font-bold text-white">{gpa.toFixed(2)}</p>
      </div>
    </div>
  );
}
