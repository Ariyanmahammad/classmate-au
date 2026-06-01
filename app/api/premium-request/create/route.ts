import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import PremiumNoteRequest from "@/models/PremiumNoteRequest";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const request = await PremiumNoteRequest.create(body);

    return NextResponse.json({
      success: true,
      request,
    });
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}