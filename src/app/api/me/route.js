import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";

// Test route: tells you who is logged in
export async function GET(request) {
  const { user, errorResponse } = await requireUser(request);
  if (errorResponse) return errorResponse;

  return NextResponse.json({ id: user.id, email: user.email });
}