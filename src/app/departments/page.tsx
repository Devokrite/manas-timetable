import Link from "next/link";

// Update this list with your real departments
const DEPARTMENTS = [
  { id: "1", name: "Computer Engineering (1)" }, 
  { id: "7", name: "Management" }, 
  { id: "10", name: "Biology" },
  { id: "191", name: "Electronic Engineering" },
];

export default function DepartmentsListPage() {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl font-semibold mb-6 text-slate-100">Select Department</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DEPARTMENTS.map((dept) => (
          <Link
            key={dept.id}
            href={`/departments/${dept.id}`}
            className="block p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition group"
          >
            <h2 className="text-lg font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
              {dept.name}
            </h2>
            <span className="text-xs text-slate-500">ID: {dept.id}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
