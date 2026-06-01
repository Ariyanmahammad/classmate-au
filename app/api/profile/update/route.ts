import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      {
        department: body.department,
        semester: body.semester,
        subject: body.subject,
        bio: body.bio,
        profileCompleted: true,
      },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.log("Profile update error:", error);

    return NextResponse.json(
      { success: false, message: "Profile update failed" },
      { status: 500 }
    );
  }
}