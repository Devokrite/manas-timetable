// src/app/tools/page.tsx
import dynamic from "next/dynamic";

// Dynamically import the calculator so it only renders on the client
const GpaCalculator = dynamic(() => import("@/components/GpaCalculator"), {
  ssr: false
});

export default function ToolsPage() {
  return (
    <main className="p-6">
      <GpaCalculator />
    </main>
  );
}
