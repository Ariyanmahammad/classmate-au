"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Sparkles,
  Users,
  FileText,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#07021a] px-6 py-32 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9333ea55,transparent_42%)]" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-blue-600/30 blur-[130px]" />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-[8%] top-24 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
      >
        <BookOpen className="text-purple-300" size={30} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-[10%] top-32 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
      >
        <GraduationCap className="text-blue-300" size={32} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity }}
        className="absolute bottom-28 left-[13%] rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
      >
        <Users className="text-pink-300" size={30} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity }}
        className="absolute bottom-24 right-[15%] rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
      >
        <FileText className="text-cyan-300" size={30} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-white/[0.06] px-8 py-20 text-center shadow-[0_0_80px_rgba(147,51,234,0.25)] backdrop-blur-2xl md:px-16"
      >
        {/* Top Badge */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-purple-200"
        >
          <Sparkles size={16} />
          Your AU Learning Companion
        </motion.div>

        <h2 className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-4xl font-black text-transparent md:text-6xl">
          Ready to Learn Together?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
          Join Classmate.AU and become part of a smarter, stronger, and more
          connected Aliah University community.
        </p>

        {/* Mini Stats */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { number: "Notes", label: "Organized Resources" },
            { number: "PYQs", label: "Semester-wise Papers" },
            { number: "AU", label: "Student Community" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-black text-white">{item.number}</h3>
              <p className="mt-1 text-sm text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto mt-12 flex items-center gap-2 rounded-full bg-white px-9 py-4 font-bold text-purple-700 shadow-[0_0_35px_rgba(255,255,255,0.25)] transition"
        >
          Create Account
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <ArrowRight size={18} />
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
}