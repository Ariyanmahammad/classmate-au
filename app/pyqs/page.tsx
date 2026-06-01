"use client";

import { motion } from "framer-motion";
import { FileText, Download, Sparkles, GraduationCap } from "lucide-react";
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
    <main className="relative min-h-screen overflow-hidden bg-[#07021a] px-6 py-28 text-white">
      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute right-[-100px] top-60 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="absolute bottom-0 left-1/2 h-96 w-96 rounded-full bg-pink-600/10 blur-[140px]" />

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-16 top-28 hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl md:block"
      >
        <Sparkles className="text-purple-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-14 top-72 hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl md:block"
      >
        <GraduationCap className="text-blue-300" />
      </motion.div>

      <section className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-200">
            <FileText size={16} />
            Batch 2023-2027 PYQ Library
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            Previous Year{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            Download semester-wise PYQs and solutions uploaded by admin.
            Organized only for B.Tech CSE students.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pyqs.map((pyq, index) => (
            <motion.div
              key={pyq._id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />

              <div className="absolute right-5 top-5 rounded-2xl bg-purple-500/10 p-3 text-purple-300">
                <FileText />
              </div>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-900/40">
                <Download />
              </div>

              <h2 className="pr-12 text-2xl font-bold">{pyq.title}</h2>

              <p className="mt-3 text-gray-300">{pyq.subject}</p>

              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-purple-500/15 px-3 py-1 text-purple-200">
                  {pyq.department}
                </span>
                <span className="rounded-full bg-blue-500/15 px-3 py-1 text-blue-200">
                  Semester {pyq.semester}
                </span>
                <span className="rounded-full bg-pink-500/15 px-3 py-1 text-pink-200">
                  {pyq.year}
                </span>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href={pyq.questionPdf}
                  target="_blank"
                  className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-center font-semibold transition hover:shadow-lg hover:shadow-purple-700/40"
                >
                  Question
                </a>

                {pyq.solutionPdf && (
                  <a
                    href={pyq.solutionPdf}
                    target="_blank"
                    className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-3 text-center font-semibold transition hover:shadow-lg hover:shadow-blue-700/40"
                  >
                    Solution
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}