"use client";

import { useEffect, useState } from "react";

type PYQ = {
  _id: string;
  title: string;
  subject: string;
  semester: number;
  department: string;
  year: number;
  questionPdf: string;
  solutionPdf: string;
};

export default function PYQsPage() {
  const [pyqs, setPyqs] = useState<PYQ[]>([]);

  useEffect(() => {
    fetch("/api/pyqs/all")
      .then((res) => res.json())
      .then((data) => setPyqs(data.pyqs || []));
  }, []);

  return (
    <main className="min-h-screen bg-[#07021a] px-6 py-28 text-white">
      <h1 className="text-5xl font-black">Previous Year Questions</h1>

      <p className="mt-4 text-gray-300">
        Download PYQs and solutions uploaded by admin.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pyqs.map((pyq) => (
          <div key={pyq._id} className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-xl font-bold">{pyq.title}</h2>

            <p className="mt-2 text-gray-300">{pyq.subject}</p>

            <p className="mt-1 text-sm text-purple-300">
              {pyq.department} · Semester {pyq.semester} · {pyq.year}
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href={pyq.questionPdf}
                target="_blank"
                className="rounded-xl bg-purple-600 px-4 py-2"
              >
                Question
              </a>

              <a
                href={pyq.solutionPdf}
                target="_blank"
                className="rounded-xl bg-blue-600 px-4 py-2"
              >
                Solution
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}