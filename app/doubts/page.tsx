"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DoubtsPage() {
  const [doubts, setDoubts] = useState([]);

  useEffect(() => {
    fetch("/api/doubts/all")
      .then((res) => res.json())
      .then((data) => setDoubts(data.doubts));
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07021a] px-6 py-16 text-white">
      <div className="absolute -top-32 left-10 h-80 w-80 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto max-w-6xl"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
          Community Help
        </p>

        <h1 className="mb-4 text-5xl font-black md:text-6xl">
          Doubts Feed
        </h1>

        <p className="mb-12 max-w-2xl text-gray-300">
          Explore questions shared by students and help each other learn better.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {doubts.map((doubt: any, index) => (
            <motion.div
              key={doubt._id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl transition-all hover:border-purple-400/40 hover:bg-white/[0.1]"
            >
              <div className="mb-4 inline-flex rounded-full bg-purple-500/20 px-4 py-1 text-xs font-semibold text-purple-200">
                Semester {doubt.semester}
              </div>

              <h2 className="text-2xl font-bold transition-colors group-hover:text-purple-300">
                {doubt.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                {doubt.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-blue-500/15 px-3 py-1 text-blue-200">
                  {doubt.subject}
                </span>
                <span className="rounded-full bg-pink-500/15 px-3 py-1 text-pink-200">
                  {doubt.department}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}