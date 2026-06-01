"use client";

import { useEffect, useState } from "react";

type Note = {
  _id: string;
  title: string;
  subject: string;
  semester: number;
  department: string;
  pdfUrl: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch("/api/notes/all")
      .then((res) => res.json())
      .then((data) => setNotes(data.notes || []));
  }, []);

  return (
    <main className="min-h-screen bg-[#07021a] px-6 py-28 text-white">
      <h1 className="text-5xl font-black">Semester Notes</h1>

      <p className="mt-4 text-gray-300">
        Download verified notes uploaded by admin.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div key={note._id} className="rounded-2xl bg-white/5 p-6">
            <h2 className="text-xl font-bold">{note.title}</h2>

            <p className="mt-2 text-gray-300">{note.subject}</p>

            <p className="mt-1 text-sm text-purple-300">
              {note.department} · Semester {note.semester}
            </p>

            <a
              href={note.pdfUrl}
              target="_blank"
              className="mt-5 inline-block rounded-xl bg-purple-600 px-4 py-2"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}