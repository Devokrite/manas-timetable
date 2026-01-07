// src/components/GpaCalculator.tsx
"use client";

import React, { useState } from "react";

// Define the shape of a subject
interface Subject {
  id: string;
  name: string;
  credits: number;
  hasAssignment?: boolean;
}// src/components/GpaCalculator.tsx
"use client";

import React, { useState } from "react";

/**
 * Semester and course definitions. Each semester has an id, a display name, and
 * a list of courses. Courses may optionally include a `hasAssignment` flag
 * indicating that homework should be included in the weighted total (as with
 * Management in semester 1). Credits are used to weight the GPA.
 */
interface Course {
  id: string;
  name: string;
  credits: number;
  hasAssignment?: boolean;
}
interface Semester {
  id: string;
  name: string;
  courses: Course[];
}

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

// Mapping from letter grades to grade points used for GPA calculation
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

// Convert a numeric total score to a letter grade
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

// Compute the weighted total for a course. Management in semester 1 includes
// homework; all other courses use the standard 40/60 split.
function computeTotal(course: Course, visa: number, finalExam: number, assignment: number) {
  const v = isNaN(visa) ? 0 : visa;
  const f = isNaN(finalExam) ? 0 : finalExam;
  const a = isNaN(assignment) ? 0 : assignment;
  if (course.hasAssignment) {
    // Management uses 36% visa, 24% assignment, 40% final
    return 0.36 * v + 0.24 * a + 0.40 * f;
  }
  // Other courses: 40% visa, 60% final
  return 0.40 * v + 0.60 * f;
}

export default function GpaCalculator() {
  // Determine initial state for scores. Each semester and course gets its own record.
  type ScoreRecord = Record<string, { visa: number | ""; final: number | ""; assignment: number | "" }>;
  type ScoresState = Record<string, ScoreRecord>;

  const createInitialScores = (): ScoresState => {
    const init: ScoresState = {};
    semesters.forEach((sem) => {
      init[sem.id] = {};
      sem.courses.forEach((course) => {
        init[sem.id][course.id] = { visa: "", final: "", assignment: "" };
      });
    });
    return init;
  };

  const [scores, setScores] = useState<ScoresState>(createInitialScores);
  const [activeSemId, setActiveSemId] = useState<string>(semesters[0].id);

  // Handle changes to input fields
  const handleChange = (
    semId: string,
    courseId: string,
    field: "visa" | "final" | "assignment",
    value: string
  ) => {
    const numValue: number | "" = value === "" ? "" : parseFloat(value);
    setScores((prev) => ({
      ...prev,
      [semId]: {
        ...prev[semId],
        [courseId]: { ...prev[semId][courseId], [field]: numValue },
      },
    }));
  };

  // Compute results for each semester
  const resultsBySemester = semesters.map((sem) => {
    const results = sem.courses.map((course) => {
      const { visa, final: finalExam, assignment } = scores[sem.id][course.id];
      const total = computeTotal(
        course,
        typeof visa === "number" ? visa : 0,
        typeof finalExam === "number" ? finalExam : 0,
        typeof assignment === "number" ? assignment : 0
      );
      const letter = toLetter(total);
      const point = gradePoints[letter];
      return { course, total, letter, point };
    });
    // Compute GPA for this semester
    const totalCredits = results.reduce((sum, r) => sum + r.course.credits, 0);
    const totalPoints = results.reduce(
      (sum, r) => sum + r.point * r.course.credits,
      0
    );
    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    return { sem, results, gpa };
  });

  // Optionally compute cumulative GPA across all semesters
  const cumulative = (() => {
    let totalCredits = 0;
    let totalPoints = 0;
    resultsBySemester.forEach(({ results }) => {
      results.forEach((r) => {
        totalCredits += r.course.credits;
        totalPoints += r.point * r.course.credits;
      });
    });
    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    return gpa;
  })();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <h2 className="text-3xl font-bold text-center">GPA Calculator</h2>
      <p className="text-sm text-slate-400 text-center">
        Select a semester, enter your scores, and view your GPA. The midterm
        (visa) and final exam are required for all courses; homework is only
        used for Management.
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

      {/* Active Semester Content */}
      {resultsBySemester
        .filter(({ sem }) => sem.id === activeSemId)
        .map(({ sem, results, gpa }) => (
          <div key={sem.id} className="space-y-6 mt-4">
            <h3 className="text-2xl font-semibold text-center">
              {sem.name} Courses
            </h3>
            <div className="space-y-8">
              {sem.courses.map((course) => {
                const scoreRecord = scores[sem.id][course.id];
                const result = results.find((r) => r.course.id === course.id)!;
                return (
                  <div
                    key={course.id}
                    className="p-4 border border-slate-700 rounded-xl bg-slate-800 space-y-4"
                  >
                    <h4 className="text-xl font-semibold text-emerald-400">
                      {course.name}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col">
                        <label className="text-sm text-slate-300 mb-1">
                          Midterm (Visa)
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={scoreRecord.visa}
                          onChange={(e) =>
                            handleChange(sem.id, course.id, "visa", e.target.value)
                          }
                          className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-100"
                        />
                      </div>
                      {course.hasAssignment && (
                        <div className="flex flex-col">
                          <label className="text-sm text-slate-300 mb-1">
                            Homework
                          </label>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={scoreRecord.assignment}
                            onChange={(e) =>
                              handleChange(
                                sem.id,
                                course.id,
                                "assignment",
                                e.target.value
                              )
                            }
                            className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-100"
                          />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <label className="text-sm text-slate-300 mb-1">
                          Final Exam
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={scoreRecord.final}
                          onChange={(e) =>
                            handleChange(sem.id, course.id, "final", e.target.value)
                          }
                          className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-100"
                        />
                      </div>
                    </div>
                    {/* Per-course results */}
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
              <h4 className="text-lg font-semibold text-emerald-400 mb-2">
                {sem.name} GPA
              </h4>
              <p className="text-2xl font-bold text-white">{gpa.toFixed(2)}</p>
            </div>
          </div>
        ))}

      {/* Cumulative GPA across all semesters */}
      <div className="p-4 border border-slate-700 rounded-xl bg-slate-800 mt-6">
        <h4 className="text-lg font-semibold text-emerald-400 mb-2">
          Cumulative GPA (All Semesters)
        </h4>
        <p className="text-2xl font-bold text-white">{cumulative.toFixed(2)}</p>
      </div>
    </div>
  );
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
