'use client';

import { useState } from 'react';
import { Plus, Trash2, Calculator, AlertCircle } from 'lucide-react';

type Course = {
  id: string;
  name: string;
  credits: number;
  visaScore: number; 
  finalScore: number; 
  assignmentScore?: number; // Optional: Only for Management
  hasAssignments?: boolean; // Flag to trigger special logic
};

// Standard coefficients for letter grades
const GRADE_POINTS: Record<string, number> = {
  'AA': 4.0, 'BA': 3.5,
  'BB': 3.0, 'CB': 2.5,
  'CC': 2.0, 'DC': 1.5,
  'DD': 1.0, 'FD': 0.5,
  'FF': 0.0,
};

export default function GpaCalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Economics', credits: 5, visaScore: 0, finalScore: 0 },
    { id: '2', name: 'Mathematics', credits: 5, visaScore: 0, finalScore: 0 },
    { id: '3', name: 'Kyrgyz Language', credits: 4, visaScore: 0, finalScore: 0 },
    { id: '4', name: 'Introduction to Law', credits: 4, visaScore: 0, finalScore: 0 },
    { id: '5', name: 'Accounting', credits: 5, visaScore: 0, finalScore: 0 },
    { id: '6', name: 'Management', credits: 5, visaScore: 0, finalScore: 0, assignmentScore: 0, hasAssignments: true },
    { id: '7', name: 'PE', credits: 0, visaScore: 0, finalScore: 0 },
  ]);

  const addCourse = () => {
    setCourses([
      ...courses,
      { id: crypto.randomUUID(), name: '', credits: 3, visaScore: 0, finalScore: 0 },
    ]);
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number | boolean) => {
    setCourses(
      courses.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  // Helper to calculate the weighted score based on course type
  const calculateTotalScore = (course: Course) => {
    if (course.hasAssignments) {
        // Management Logic: 24% Assign + 36% Visa + 40% Final
        const assign = course.assignmentScore || 0;
        return (assign * 0.24) + (course.visaScore * 0.36) + (course.finalScore * 0.40);
    }
    // Standard Logic: 40% Visa + 60% Final
    return (course.visaScore * 0.4) + (course.finalScore * 0.6);
  };

  // Helper to determine letter grade based on score
  const getLetterGrade = (score: number) => {
    if (score >= 90) return 'AA';
    if (score >= 85) return 'BA';
    if (score >= 80) return 'BB';
    if (score >= 75) return 'CB';
    if (score >= 70) return 'CC';
    if (score >= 65) return 'DC';
    if (score >= 60) return 'DD';
    if (score >= 50) return 'FD';
    return 'FF';
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const totalScore = calculateTotalScore(course);
      const letterGrade = getLetterGrade(totalScore);
      const points = GRADE_POINTS[letterGrade] || 0;
      
      // PE typically doesn't affect GPA if credits are 0, checking credit > 0
      if (course.credits > 0) {
        totalPoints += points * course.credits;
        totalCredits += course.credits;
      }
    });

    return totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
            <h2 className="text-xl font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
            <Calculator className="w-5 h-5 text-blue-500" />
            GPA Calculator
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
                Standard: 40% Visa + 60% Final <br/>
                Management: 24% Assgn + 36% Visa + 40% Final
            </p>
        </div>
        
        <div className="flex items-center gap-4">
             <div className="text-right">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider block">Est. GPA</span>
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 font-mono">
                    {calculateGPA()}
                </span>
             </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {/* Header Row (Hidden on mobile) */}
        <div className="hidden md:flex gap-2 text-xs font-semibold text-zinc-400 px-2">
            <div className="flex-1">Course Name</div>
            <div className="w-16 text-center">Credit</div>
            <div className="w-16 text-center">Assgn</div>
            <div className="w-16 text-center">Visa</div>
            <div className="w-16 text-center">Final</div>
            <div className="w-12 text-center">Avg</div>
            <div className="w-10 text-center">Let</div>
            <div className="w-8"></div>
        </div>

        {courses.map((course) => {
          const totalScore = calculateTotalScore(course);
          const letter = getLetterGrade(totalScore);
          const isPassing = letter !== 'FF' && letter !== 'FD';

          return (
            <div key={course.id} className="flex flex-col md:flex-row gap-2 items-start md:items-center bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-lg border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
              <div className="flex-1 w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Course Name"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-sm font-medium focus:ring-0 placeholder:text-zinc-400"
                  />
                  {course.hasAssignments && (
                      <span className="md:hidden text-[10px] text-purple-500 font-medium block mt-1">Has Assignments</span>
                  )}
              </div>
              
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-between md:justify-end">
                  
                  {/* Credits */}
                  <div className="flex items-center gap-2">
                      <label className="md:hidden text-xs text-zinc-500 w-10">Cred</label>
                      <input
                        type="number"
                        placeholder="Cr"
                        value={course.credits}
                        onChange={(e) => updateCourse(course.id, 'credits', Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-16 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md px-2 py-1 text-sm text-center focus:ring-2 focus:ring-blue-500"
                      />
                  </div>

                  {/* Assignments (Only shows if enabled) */}
                  {course.hasAssignments ? (
                    <div className="flex items-center gap-2">
                        <label className="md:hidden text-xs text-zinc-500 w-8">Asgn</label>
                        <input
                            type="number"
                            placeholder="A"
                            min="0"
                            max="100"
                            value={course.assignmentScore || ''}
                            onChange={(e) => updateCourse(course.id, 'assignmentScore', Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                            className="w-16 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-md px-2 py-1 text-sm text-center focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                  ) : (
                    <div className="hidden md:block w-16"></div>
                  )}

                  {/* Visa */}
                  <div className="flex items-center gap-2">
                      <label className="md:hidden text-xs text-zinc-500 w-8">Visa</label>
                      <input
                        type="number"
                        placeholder="V"
                        min="0"
                        max="100"
                        value={course.visaScore || ''}
                        onChange={(e) => updateCourse(course.id, 'visaScore', Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                        className="w-16 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md px-2 py-1 text-sm text-center focus:ring-2 focus:ring-blue-500"
                      />
                  </div>

                  {/* Final */}
                  <div className="flex items-center gap-2">
                      <label className="md:hidden text-xs text-zinc-500 w-8">Final</label>
                      <input
                        type="number"
                        placeholder="F"
                        min="0"
                        max="100"
                        value={course.finalScore || ''}
                        onChange={(e) => updateCourse(course.id, 'finalScore', Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                        className="w-16 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md px-2 py-1 text-sm text-center focus:ring-2 focus:ring-blue-500"
                      />
                  </div>
              </div>

              {/* Results Section */}
              <div className="flex items-center gap-4 w-full md:w-auto justify-end md:justify-start mt-2 md:mt-0 border-t md:border-t-0 border-zinc-200 dark:border-zinc-700 pt-2 md:pt-0">
                  <div className="w-12 text-center text-sm font-mono text-zinc-500" title="Weighted Average">
                      {totalScore.toFixed(0)}
                  </div>
                  <div className={`w-10 text-center font-bold text-sm rounded px-1 ${isPassing ? 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30' : 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30'}`}>
                      {letter}
                  </div>
                  <button
                    onClick={() => removeCourse(course.id)}
                    className="p-1.5 text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={addCourse}
        className="w-full py-2 flex items-center justify-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors border border-dashed border-blue-200 dark:border-blue-800"
      >
        <Plus className="w-4 h-4" />
        Add Course
      </button>

      <div className="mt-4 flex items-start gap-2 text-xs text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-lg">
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
        <p>
            Standard: (Visa × 0.4) + (Final × 0.6). Management courses use assignments (24% Assign + 36% Visa + 40% Final).
        </p>
      </div>
    </div>
  );
}
