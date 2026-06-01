import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import PYQ from "@/models/PYQ";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const pyq = await PYQ.create(body);

    return NextResponse.json({
      success: true,
      pyq,
    });
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}