import GpaCalculator from '@/components/GpaCalculator';
import PomodoroTimer from '@/components/PomodoroTimer';
import TodoWidget from '@/components/TodoWidget';
import { Wrench } from 'lucide-react';

export default function ToolsPage() {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/20 rounded-lg">
              <Wrench className="w-6 h-6 text-amber-600 dark:text-amber-500" />
            </div>
            Student Toolkit
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            Utilities to help you study smarter and stay organized.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pomodoro Timer - Takes up 1 column */}
          <div className="lg:col-span-1">
            <PomodoroTimer />
          </div>

          {/* GPA Calculator - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <GpaCalculator />
          </div>

          {/* Todo Widget - Takes up full width */}
          <div className="lg:col-span-3">
             <TodoWidget />
          </div>
        </div>

      </div>
    </div>
  );
}
