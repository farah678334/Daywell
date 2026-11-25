import { NextResponse } from "next/server";

// Test route: open http://localhost:3000/api/health
export async function GET() {
  return NextResponse.json({ status: "ok", app: "Day Well API" });
}
