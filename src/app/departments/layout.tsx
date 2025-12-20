export default function DepartmentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1">
      {/* The Sidebar is already in your Root Layout (src/app/layout.tsx), 
         so we don't need it here again. 
      */}
      {children}
    </div>
  );
}
