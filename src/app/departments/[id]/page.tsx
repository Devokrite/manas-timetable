import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import Timetable from "@/components/Timetable";

// Helper to read the JSON file directly from your public folder
async function getDepartmentData(id: string) {
  const filePath = path.join(process.cwd(), "public", "departments", `${id}.json`);
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    return null;
  }
}

export default async function DepartmentPage({ params }: { params: { id: string } }) {
  // 1. Fetch the data for this specific ID (e.g., "7")
  const data = await getDepartmentData(params.id);

  // 2. If no file exists (e.g. 999.json), show 404
  if (!data) {
    return notFound();
  }

  // 3. Render the Timetable component with the data
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6 text-emerald-400">
        {data.name || `Department ${params.id}`}
      </h1>
      <Timetable data={data} />
    </div>
  );
}
