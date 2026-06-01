"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

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
    <main className="relative min-h-screen overflow-hidden bg-[#07021a] px-6 py-28 text-white">
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Classmate.AU Resources
          </p>

          <h1 className="text-5xl font-black md:text-6xl">
            Semester Notes
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            Download verified notes uploaded by admin, organized by department,
            subject, and semester.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note, index) => (
            <motion.div
              key={note._id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition hover:border-purple-400/60 hover:bg-white/10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/20 text-purple-300 group-hover:bg-purple-600 group-hover:text-white">
                <FileText size={28} />
              </div>

              <h2 className="text-xl font-bold">{note.title}</h2>

              <p className="mt-3 text-gray-300">{note.subject}</p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-purple-200">
                  {note.department}
                </span>

                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200">
                  Semester {note.semester}
                </span>
              </div>

              <a
                href={note.pdfUrl}
                target="_blank"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold transition hover:bg-purple-700"
              >
                <Download size={18} />
                Download Notes
              </a>
            </motion.div>
          ))}
        </div>

        {notes.length === 0 && (
          <div className="mt-20 text-center text-gray-400">
            No notes available yet.
          </div>
        )}
      </motion.div>
    </main>
  );
}