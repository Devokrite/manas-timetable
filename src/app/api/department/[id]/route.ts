import { NextResponse } from "next/server";
import { politeFetch } from "@/lib/fetchers";
import { parseDepartmentHtml } from "@/lib/parse";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  // try https first, then http
  const urls = [
    `https://timetable.manas.edu.kg/department-printer/${id}`,
    `http://timetable.manas.edu.kg/department-printer/${id}`,
  ];

  let html = "";
  for (const u of urls) {
    try {
      html = await politeFetch(u);
      if (html) break;
    } catch {
      // try next
    }
  }

  if (!html) {
    return NextResponse.json({ slots: [] }, { status: 502 });
  }

  const data = parseDepartmentHtml(html);
  return NextResponse.json(data, {
    headers: { "Cache-Control": "s-maxage=10800" },
  });
}

