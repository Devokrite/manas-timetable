import { NextResponse } from "next/server";
import { getCatalog } from "../../../lib/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  const items = await getCatalog();
  return NextResponse.json({ items }, {
    headers: { "Cache-Control": "s-maxage=10800" } // ~3h edge cache
  });
}

