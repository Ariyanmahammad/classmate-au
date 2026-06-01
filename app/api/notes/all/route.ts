import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/Note";

export async function GET() {
  try {
    await connectDB();

    const notes = await Note.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      notes,
    });
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}