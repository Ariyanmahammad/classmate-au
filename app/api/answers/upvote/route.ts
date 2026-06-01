import { connectDB } from "@/lib/db";
import Answer from "@/models/Answer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { answerId } = await req.json();

    const answer = await Answer.findByIdAndUpdate(
      answerId,
      {
        $inc: {
          upvotes: 1,
        },
      },
      {
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      answer,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}