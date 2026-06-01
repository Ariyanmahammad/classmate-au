import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Note from "@/models/Note";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const note = await Note.create({
      title: body.title,
      subject: body.subject,
      semester: body.semester,
      department: body.department,
      pdfUrl: body.pdfUrl,
    });

    return NextResponse.json({
      success: true,
      note,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}