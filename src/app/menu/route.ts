import { NextResponse } from "next/server";
import { politeFetch } from "../../../lib/fetchers";
import { parseCafeteriaMenu } from "../../../lib/menu";

export const runtime = "nodejs";

export async function GET() {
  const html = await politeFetch("https://beslenme.manas.edu.kg/menu");
  const json = parseCafeteriaMenu(html || "");
  return NextResponse.json(json, { headers: { "Cache-Control": "s-maxage=43200, stale-while-revalidate" } });
}
