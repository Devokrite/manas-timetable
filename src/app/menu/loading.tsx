export default function Loading() {
  return (
    <div className="p-8 animate-pulse">
      <div className="h-8 w-48 bg-slate-800 rounded mb-6"></div>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-slate-800/50 rounded-xl border border-slate-700/50"></div>
        ))}
      </div>
    </div>
  );
}
