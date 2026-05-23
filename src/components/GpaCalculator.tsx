"use client";

import React, { useState } from "react";

// Define course and semester types
type Course = {
  id: string;
  name: string;
  credits: number;
  hasAssignment?: boolean;
};
type Semester = {
  id: string;
  name: string;
  courses: Course[];
};

// Define semesters and courses with credits; only Management has assignments in semester 1
const semesters: Semester[] = [
  {
    id: "sem1",
    name: "Semester 1",
    courses: [
      { id: "eco1", name: "Economics", credits: 5 },
      { id: "math1", name: "Mathematics", credits: 5 },
      { id: "kg1", name: "Kyrgyz Language", credits: 5 },
      { id: "law1", name: "Law", credits: 4 },
      { id: "acc1", name: "Accounting", credits: 5 },
      { id: "man1", name: "Management", credits: 5, hasAssignment: true },
      { id: "pe1", name: "Physical Education", credits: 0 },
    ],
  },
  {
    id: "sem2",
    name: "Semester 2",
    courses: [
      { id: "eco2", name: "Economics", credits: 5 },
      { id: "behav", name: "Жүрүш-Туруш Илимдери (Behavioral Sciences)", credits: 5 },
      { id: "kg2", name: "Kyrgyz Language", credits: 4 },
      { id: "acc2", name: "Accounting", credits: 5 },
      { id: "stat", name: "Statistics", credits: 5 },
      { id: "eng2", name: "English", credits: 2 },
      { id: "info2", name: "Informatics", credits: 4 },
      { id: "pe2", name: "Physical Education", credits: 0 },
    ],
  },
  {
    id: "sem3",
    name: "Semester 3",
    courses: [
      { id: "phil", name: "Philosophy", credits: 2 },
      { id: "manas", name: "Манас таануу (Manas Studies)", credits: 2 },
      { id: "motheory", name: "Management and Organizing Theories", credits: 5 },
      { id: "mkt", name: "Marketing", credits: 5 },
      { id: "research", name: "ИЛИМИЙ ИЗИЛДӨӨ ЫКМАЛАРЫ (Scientific Research Methods)", credits: 6 },
      { id: "commlaw", name: "Commercial Law", credits: 5 },
      { id: "hist", name: "Kyrgyzstan History", credits: 2 },
    ],
  },
];

// Map letters to grade points
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

// Compute weighted total based on whether assignment is included
function computeTotal(course: Course, visa: number, finalExam: number, assignment: number): number {
  const v = isNaN(visa) ? 0 : visa;
  const f = isNaN(finalExam) ? 0 : finalExam;
  const a = isNaN(assignment) ? 0 : assignment;
  if (course.hasAssignment) {
    // Management: 36% visa, 24% assignment, 40% final
    return 0.36 * v + 0.24 * a + 0.40 * f;
  }
  // Default: 40% visa, 60% final
  return 0.40 * v + 0.60 * f;
}

export default function GpaCalculator() {
  // Build initial scores state: nested object keyed by semesterId and courseId
  type ScoreRecord = Record<string, { visa: number | ""; final: number | ""; assignment: number | "" }>;
  type ScoresState = Record<string, ScoreRecord>;

  const initialScores: ScoresState = {};
  semesters.forEach((sem) => {
    initialScores[sem.id] = {};
    sem.courses.forEach((course) => {
      initialScores[sem.id][course.id] = { visa: "", final: "", assignment: "" };
    });
  });

  const [scores, setScores] = useState<ScoresState>(initialScores);
  const [activeSemId, setActiveSemId] = useState<string>(semesters[0].id);

  // Update score handler
  const handleChange = (
    semId: string,
    courseId: string,
    field: "visa" | "final" | "assignment",
    value: string
  ) => {
    const num: number | "" = value === "" ? "" : parseFloat(value);
    setScores((prev) => ({
      ...prev,
      [semId]: {
        ...prev[semId],
        [courseId]: {
          ...prev[semId][courseId],
          [field]: num,
        },
      },
    }));
  };

  // Compute results and GPA per semester
  const resultsBySemester = semesters.map((sem) => {
    const results = sem.courses.map((course) => {
      const { visa, final, assignment } = scores[sem.id][course.id];
      const total = computeTotal(
        course,
        typeof visa === "number" ? visa : 0,
        typeof final === "number" ? final : 0,
        typeof assignment === "number" ? assignment : 0
      );
      const letter = toLetter(total);
      const point = gradePoints[letter];
      return { course, total, letter, point };
    });
    const totalCredits = results.reduce((sum, r) => sum + r.course.credits, 0);
    const totalPoints = results.reduce((sum, r) => sum + r.point * r.course.credits, 0);
    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    return { sem, results, gpa };
  });

  // Compute cumulative GPA across all semesters
  const cumulative = (() => {
    let totalCredits = 0;
    let totalPoints = 0;
    resultsBySemester.forEach(({ results }) => {
      results.forEach((r) => {
        totalCredits += r.course.credits;
        totalPoints += r.point * r.course.credits;
      });
    });
    return totalCredits > 0 ? totalPoints / totalCredits : 0;
  })();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <h2 className="text-3xl font-bold text-center">GPA Calculator</h2>
      <p className="text-sm text-slate-400 text-center">
        Select a semester, enter your scores, and see the per-semester and cumulative GPA.
      </p>
      {/* Semester Tabs */}
      <div className="flex gap-2 justify-center mt-4">
        {semesters.map((sem) => (
          <button
            key={sem.id}
            onClick={() => setActiveSemId(sem.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeSemId === sem.id
                ? "bg-emerald-600 text-white"
                : "bg-slate-700 text-slate-200 hover:bg-slate-600"
            }`}
          >
            {sem.name}
          </button>
        ))}
      </div>

      {/* Active semester details */}
      {resultsBySemester
        .filter(({ sem }) => sem.id === activeSemId)
        .map(({ sem, results, gpa }) => (
          <div key={sem.id} className="space-y-6 mt-4">
            <h3 className="text-2xl font-semibold text-center">{sem.name} Courses</h3>
            <div className="space-y-8">
              {sem.courses.map((course) => {
                const scoreRec = scores[sem.id][course.id];
                const result = results.find((r) => r.course.id === course.id)!;
                return (
                  <div
                    key={course.id}
                    className="p-4 border border-slate-700 rounded-xl bg-slate-800 space-y-4"
                  >
                    <h4 className="text-xl font-semibold text-emerald-400">{course.name}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col">
                        <label className="text-sm text-slate-300 mb-1">Midterm (Visa)</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={scoreRec.visa}
                          onChange={(e) => handleChange(sem.id, course.id, "visa", e.target.value)}
                          className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-100"
                        />
                      </div>
                      {course.hasAssignment && (
                        <div className="flex flex-col">
                          <label className="text-sm text-slate-300 mb-1">Homework</label>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={scoreRec.assignment}
                            onChange={(e) => handleChange(sem.id, course.id, "assignment", e.target.value)}
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
                          value={scoreRec.final}
                          onChange={(e) => handleChange(sem.id, course.id, "final", e.target.value)}
                          className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-100"
                        />
                      </div>
                    </div>
                    {/* Display results per course */}
                    <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                      <span>
                        Total Score: <strong>{result.total.toFixed(2)}</strong>
                      </span>
                      <span>
                        Grade: <strong>{result.letter}</strong>
                      </span>
                      <span>
                        Points: <strong>{result.point.toFixed(1)}</strong>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Semester GPA */}
            <div className="p-4 border border-slate-700 rounded-xl bg-slate-800 mt-6">
              <h4 className="text-lg font-semibold text-emerald-400 mb-2">{sem.name} GPA</h4>
              <p className="text-2xl font-bold text-white">{gpa.toFixed(2)}</p>
            </div>
          </div>
        ))}

      {/* Cumulative GPA */}
      <div className="p-4 border border-slate-700 rounded-xl bg-slate-800 mt-6">
        <h4 className="text-lg font-semibold text-emerald-400 mb-2">Cumulative GPA</h4>
        <p className="text-2xl font-bold text-white">{cumulative.toFixed(2)}</p>
      </div>
    </div>
  );
}
