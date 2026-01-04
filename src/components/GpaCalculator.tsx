// src/components/GpaCalculator.tsx
"use client";

import React, { useState } from "react";

// Define a subject type to hold metadata about each course
interface SubjectMeta {
  id: string;
  name: string;
  credits: number;
  hasAssignment?: boolean;
}

// List of subjects for the first semester.  Adjust the `credits` or `hasAssignment`
// fields to match your curriculum.
const subjects = [
  { name: "Economics", credits: 5, type: "normal" },
  { name: "Mathematics", credits: 5, type: "normal" },
  { name: "Kyrgyz language", credits: 5, type: "normal" },
  { name: "Accounting", credits: 5, type: "normal" },
  { name: "Management", credits: 5, type: "management" },
  { name: "Law", credits: 4, type: "normal" },
  { name: "Physical education", credits: 0, type: "normal" }
];


// Map letter grades to grade points for GPA computation
const gradePoints: Record<string, number> = {
  AA: 4.0,
  BA: 3.5,
  BB: 3.0,
  CB: 2.5,
  CC: 2.0,
  DC: 1.5,
  DD: 1.0,
  FF: 0.0
};

// Convert a numeric score into a letter grade
function toLetter(score: number): keyof typeof gradePoints {
  if (score >= 90) return "AA";
  if (score >= 85) return "BA";
  if (score >= 80) return "BB";
  if (score >= 75) return "CB";
  if (score >= 65) return "CC";
  if (score >= 58) return "DC";
  if (score >= 50) return "DD";
  return "FF";
}

// Calculate the total score for a course according to weighting rules
function computeTotal(
  subject: SubjectMeta,
  visa: number,
  finalExam: number,
  assignment: number
): number {
  // Guard against NaN by defaulting undefined values to zero
  const v = isNaN(visa) ? 0 : visa;
  const f = isNaN(finalExam) ? 0 : finalExam;
  const a = isNaN(assignment) ? 0 : assignment;
  // Management has assignments (24%), visa (36%), final (40%)
  if (subject.hasAssignment) {
    return 0.36 * v + 0.24 * a + 0.40 * f;
  }
  // Other courses: 40% visa + 60% final
  return 0.40 * v + 0.60 * f;
}

export default function GpaCalculator() {
  // State holds the raw input values per subject
  const [scores, setScores] = useState<
    Record<
      string,
      {
        visa: number | "";
        final: number | "";
        assignment: number | "";
      }
    >
  >(() => {
    // Initialise each subject with empty strings (no input yet)
    const initial: any = {};
    subjects.forEach((subj) => {
      initial[subj.id] = { visa: "", final: "", assignment: "" };
    });
    return initial;
  });

  // Handler to update a particular field for a subject
  const handleChange = (
    subjectId: string,
    field: "visa" | "final" | "assignment",
    value: string
  ) => {
    // Convert input string to number if possible, else empty string
    const numValue = value === "" ? "" : parseFloat(value);
    setScores((prev) => ({
      ...prev,
      [subjectId]: { ...prev[subjectId], [field]: numValue }
    }));
  };

  // Compute results per subject: total, letter, point
  const results = subjects.map((subj) => {
    const { visa, final, assignment } = scores[subj.id];
    const total = computeTotal(
      subj,
      typeof visa === "number" ? visa : 0,
      typeof final === "number" ? final : 0,
      typeof assignment === "number" ? assignment : 0
    );
    const letter = toLetter(total);
    const point = gradePoints[letter];
    return { subj, total, letter, point };
  });

  // Overall GPA across all subjects
  const gpa = (() => {
    const totalCredits = subjects.reduce((acc, s) => acc + s.credits, 0);
    const weightedPoints = results.reduce(
      (acc, r) => acc + r.point * r.subj.credits,
      0
    );
    return weightedPoints / totalCredits;
  })();

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <h2 className="text-3xl font-bold text-center">GPA Calculator</h2>
      <p className="text-sm text-slate-400 text-center">
        Enter your scores below.  The midterm (visa) and final are required for
        all courses; assignments are only used for Management.
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
                <label className="text-sm text-slate-300 mb-1">Midterm (Visa)</label>
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
                  <label className="text-sm text-slate-300 mb-1">Homework</label>
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
            {/* Display the computed results for this subject */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <span>
                Total Score: <strong>{results.find((r) => r.subj.id === subj.id)?.total.toFixed(2)}</strong>
              </span>
              <span>
                Grade: <strong>{results.find((r) => r.subj.id === subj.id)?.letter}</strong>
              </span>
              <span>
                Points: <strong>{results.find((r) => r.subj.id === subj.id)?.point.toFixed(1)}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border border-slate-700 rounded-xl bg-slate-800 mt-6">
        <h3 className="text-lg font-semibold text-emerald-400 mb-2">
          Overall GPA
        </h3>
        <p className="text-2xl font-bold text-white">
          {Number.isNaN(gpa) ? "0.00" : gpa.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
