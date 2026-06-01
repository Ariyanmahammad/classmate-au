import { connectDB } from "@/lib/db";
import Doubt from "@/models/Doubt";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const doubts = await Doubt.find()
      .populate("postedBy", "name department semester")
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      doubts,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}