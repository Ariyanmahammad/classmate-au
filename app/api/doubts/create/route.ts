import { connectDB } from "@/lib/db";
import Doubt from "@/models/Doubt";
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

    const doubt = await Doubt.create({
      ...body,
      postedBy: user._id,
    });

    return NextResponse.json({
      success: true,
      doubt,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}