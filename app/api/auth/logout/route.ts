import { NextRequest, NextResponse } from "next/server";
import { deleteSession } from "@/lib/session";

export async function POST(_req: NextRequest) {
  deleteSession();
  return NextResponse.json(
    {
      message: "User logged out successfully",
    },
    { status: 200 }
  );
}
