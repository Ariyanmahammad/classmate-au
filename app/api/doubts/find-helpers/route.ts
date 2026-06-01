import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { subject } = await req.json();

    const helpers = await User.find({
      subjectsCanHelp: subject,
    }).select(
      "name semester department subjectsCanHelp"
    );

    return NextResponse.json({
      success: true,
      helpers,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}