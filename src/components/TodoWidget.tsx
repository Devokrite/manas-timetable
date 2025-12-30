'use client';

import { useState } from 'react';
import { CheckSquare, Square, Plus, X } from 'lucide-react';

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TodoWidget() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Check Manas food menu', completed: true },
    { id: '2', text: 'Review English flashcards', completed: false },
  ]);
  const [input, setInput] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: crypto.randomUUID(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col h-full">
      <h2 className="text-xl font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-100 mb-6">
        <CheckSquare className="w-5 h-5 text-purple-500" />
        Quick Tasks
      </h2>

      <div className="flex-1 space-y-2 mb-4 overflow-y-auto min-h-[150px]">
        {tasks.length === 0 && (
          <p className="text-center text-zinc-400 text-sm py-4">No tasks yet. Enjoy your day!</p>
        )}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="group flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            <button
              onClick={() => toggleTask(task.id)}
              className={`flex-shrink-0 ${task.completed ? 'text-purple-500' : 'text-zinc-300 hover:text-zinc-400'}`}
            >
              {task.completed ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
            </button>
            <span className={`flex-1 text-sm ${task.completed ? 'text-zinc-400 line-through' : 'text-zinc-700 dark:text-zinc-300'}`}>
              {task.text}
            </span>
            <button
              onClick={() => removeTask(task.id)}
              className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-500 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={addTask} className="relative">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-lg pl-4 pr-10 py-3 text-sm focus:ring-2 focus:ring-purple-500 placeholder:text-zinc-400"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-purple-500 text-white rounded-md hover:bg-purple-600 disabled:opacity-50 disabled:hover:bg-purple-500 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
