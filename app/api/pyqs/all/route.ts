import { NextResponse } from "next/server";

const localPYQs = [
  {
    _id: "1",
    title: "1st Semester PYQ",
    subject: "All Subjects",
    semester: 1,
    department: "CSE",
    year: 2026,
    questionPdf: "/pyqs/1st.pdf",
    solutionPdf: "",
  },
  {
    _id: "2",
    title: "2nd Semester PYQ",
    subject: "All Subjects",
    semester: 2,
    department: "CSE",
    year: 2026,
    questionPdf: "/pyqs/2nd.pdf",
    solutionPdf: "",
  },
  {
    _id: "3",
    title: "3rd Semester PYQ",
    subject: "All Subjects",
    semester: 3,
    department: "CSE",
    year: 2026,
    questionPdf: "/pyqs/3rd.pdf",
    solutionPdf: "",
  },
  {
    _id: "4",
    title: "4th Semester PYQ",
    subject: "All Subjects",
    semester: 4,
    department: "CSE",
    year: 2026,
    questionPdf: "/pyqs/4th.pdf",
    solutionPdf: "",
  },
  {
    _id: "5",
    title: "5th Semester PYQ",
    subject: "All Subjects",
    semester: 5,
    department: "CSE",
    year: 2026,
    questionPdf: "/pyqs/5th-sem-pyq.pdf",
    solutionPdf: "",
  },
  {
    _id: "6",
    title: "6th Semester PYQ 2026 Phase 1",
    subject: "All Subjects",
    semester: 6,
    department: "CSE",
    year: 2026,
    questionPdf: "/pyqs/6th sem PYQ-2026-PHASE-1.pdf",
    solutionPdf: "",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    pyqs: localPYQs,
  });
}