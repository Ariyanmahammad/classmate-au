"use client";

import { useEffect, useState } from "react";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/api/notes/all")
      .then((res) => res.json())
      .then((data) => setNotes(data.notes));
  }, []);

  return (
    <main className="min-h-screen bg-[#07021a] p-8 text-white">
      <h1 className="text-5xl font-black">Notes</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note: any) => (
          <div
            key={note._id}
            className="rounded-2xl bg-white/5 p-6"
          >
            <h2 className="text-xl font-bold">
              {note.title}
            </h2>

            <p className="mt-2 text-gray-300">
              {note.subject}
            </p>

            <a
              href={note.pdfUrl}
              target="_blank"
              className="mt-4 inline-block rounded-xl bg-purple-600 px-4 py-2"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}