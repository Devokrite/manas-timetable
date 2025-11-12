import Sidebar from "../../components/Sidebar";

export default function DepartmentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
