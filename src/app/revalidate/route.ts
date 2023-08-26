import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  revalidateTag('text');
  return NextResponse.json({ revalidated: true });
}
