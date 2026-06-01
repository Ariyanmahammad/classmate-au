import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Please login again." },
        { status: 401 }
      );
    }

    const body = await req.json();

    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        department: body.department,
        semester: Number(body.semester),
        bio: body.bio,
        subjectsCanHelp: body.skills || [],
        isProfileComplete: true,
      },
      {
        new: true,
        upsert: true,
      }
    );

    return NextResponse.json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.log("Profile update error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Profile update failed",
      },
      { status: 500 }
    );
  }
}