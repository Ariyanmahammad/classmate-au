"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CreateDoubtPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    subject: "",
    tags: "",
  });

  const handleSubmit = async () => {
    const response = await fetch("/api/doubts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        tags: form.tags.split(","),
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Doubt Posted Successfully");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07021a] px-6 py-20 text-white">
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute right-[-120px] bottom-[-120px] h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-3xl"
      >
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Classmate.AU Doubts
          </p>

          <h1 className="text-4xl font-black md:text-6xl">
            Post a Doubt
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Ask your academic doubt clearly and let classmates help you faster.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8"
        >
          <div className="space-y-5">
            <input
              placeholder="Title"
              className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/15"
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />

            <textarea
              placeholder="Describe your doubt"
              rows={6}
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/15"
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
            />

            <select
              className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none transition focus:border-purple-400 focus:bg-[#1a1238]"
              onChange={(e) =>
                setForm({
                  ...form,
                  subject: e.target.value,
                })
              }
            >
              <option value="">Select Subject</option>
              <option>DBMS</option>
              <option>Operating System</option>
              <option>Computer Networks</option>
              <option>TOC</option>
              <option>DAA</option>
              <option>Discrete Mathematics</option>
            </select>

            <input
              placeholder="Tags (comma separated)"
              className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/15"
              onChange={(e) =>
                setForm({
                  ...form,
                  tags: e.target.value,
                })
              }
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSubmit}
              className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 font-bold shadow-lg shadow-purple-900/40 transition hover:shadow-purple-700/50"
            >
              Post Doubt
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}