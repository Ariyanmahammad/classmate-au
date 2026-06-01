"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "../shared/Navbar";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07021a] text-white">
      <Navbar />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed55,transparent_35%),radial-gradient(circle_at_bottom_right,#2563eb55,transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-purple-200 backdrop-blur-md"
          >
            <Sparkles size={16} />
            Aliah University Student Community
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl font-black leading-tight md:text-7xl"
          >
            Teach. Learn. Share.
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Grow Together.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-gray-300"
          >
            A modern platform for Aliah University students to ask doubts,
            upload notes and PYQs, share skills, connect with teachers, and
            build a stronger learning community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold shadow-lg shadow-purple-900/40 transition hover:scale-105">
              Get Started
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/15">
              Explore Features
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}