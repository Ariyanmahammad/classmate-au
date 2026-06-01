import { connectDB } from "@/lib/db";
import Answer from "@/models/Answer";
import User from "@/models/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false },
        { status: 401 }
      );
    }

    const user = await User.findOne({
      email: session.user.email,
    });

    const body = await req.json();

    const answer = await Answer.create({
      doubtId: body.doubtId,
      answer: body.answer,
      answeredBy: user._id,
    });

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