"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, FileText, Send, CheckCircle } from "lucide-react";

export default function PremiumRequestPage() {
  const [subject, setSubject] = useState("");
  const [requirements, setRequirements] = useState("");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07021a] px-6 py-16 text-white">
      <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 rounded-full bg-pink-600/20 blur-3xl" />

      <section className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-purple-200 backdrop-blur">
            <Sparkles size={16} />
            Premium Student Service
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Premium Notes{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Request
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Get custom handwritten-style or exam-focused notes based on your
            subject, syllabus, and exact requirements.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Custom Notes", "Only ₹100", "Fast Delivery"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur"
              >
                <CheckCircle className="mx-auto mb-2 text-purple-300" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-40" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-purple-600 p-3">
                <FileText />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Request Details</h2>
                <p className="text-sm text-gray-300">
                  Fill your subject and requirements
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <input
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/15"
              />

              <textarea
                placeholder="Requirements"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                rows={6}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/15"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 font-bold shadow-lg shadow-purple-900/40 transition hover:shadow-purple-700/50"
              >
                Submit Request
                <Send size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}