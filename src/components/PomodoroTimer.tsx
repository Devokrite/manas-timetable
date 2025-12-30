'use client';

import { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw } from 'lucide-react';

type Mode = 'focus' | 'short' | 'long';

const MODES: Record<Mode, { label: string; minutes: number; color: string }> = {
  focus: { label: 'Focus', minutes: 25, color: 'text-rose-500' },
  short: { label: 'Short Break', minutes: 5, color: 'text-emerald-500' },
  long: { label: 'Long Break', minutes: 15, color: 'text-blue-500' },
};

export default function PomodoroTimer() {
  const [mode, setMode] = useState<Mode>('focus');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const switchMode = (newMode: Mode) => {
    setMode(newMode);
    setIsActive(false);
    setTimeLeft(MODES[newMode].minutes * 60);
  };

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(MODES[mode].minutes * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((MODES[mode].minutes * 60 - timeLeft) / (MODES[mode].minutes * 60)) * 100;

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Timer className={`w-5 h-5 ${MODES[mode].color}`} />
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Study Timer</h2>
      </div>

      <div className="flex gap-1 mb-8 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
        {(Object.keys(MODES) as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => switchMode(m)}
            className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${
              mode === m
                ? 'bg-white dark:bg-zinc-700 shadow-sm text-zinc-900 dark:text-zinc-100'
                : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
            }`}
          >
            {MODES[m].label}
          </button>
        ))}
      </div>

      <div className="relative flex flex-col items-center justify-center mb-8">
         <div className="text-6xl font-mono font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 tabular-nums">
            {formatTime(timeLeft)}
         </div>
         <p className="text-sm text-zinc-500 mt-2 font-medium uppercase tracking-widest">{isActive ? 'Running' : 'Paused'}</p>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={toggleTimer}
          className={`px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-transform active:scale-95 flex items-center gap-2 ${
            isActive ? 'bg-zinc-800 dark:bg-zinc-700' : 'bg-black dark:bg-white dark:text-black'
          }`}
        >
          {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
      
      <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-800 mt-8 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-linear ${
            mode === 'focus' ? 'bg-rose-500' : mode === 'short' ? 'bg-emerald-500' : 'bg-blue-500'
          }`} 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
