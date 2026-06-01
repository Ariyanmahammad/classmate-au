"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  MessageCircleQuestion,
  Users,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    number: "10K+",
    label: "Students Connected",
    icon: Users,
  },
  {
    number: "5K+",
    label: "Notes Shared",
    icon: BookOpen,
  },
  {
    number: "2K+",
    label: "Doubts Solved",
    icon: MessageCircleQuestion,
  },
  {
    number: "100+",
    label: "Teachers & Mentors",
    icon: GraduationCap,
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#07021a] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed33,transparent_35%),radial-gradient(circle_at_bottom_right,#2563eb33,transparent_35%)]" />

      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-20 h-32 w-32 rounded-full bg-purple-600/20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-16 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full border border-purple-500/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-4 h-96 w-96 -translate-x-1/2 rounded-full border border-blue-500/10"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 text-sm text-purple-200 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Growing Classmate.AU Community
          </div>

          <h2 className="text-4xl font-black md:text-6xl">
            Built for Students,
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Powered by Collaboration
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            A smart academic space where students share notes, PYQs, doubts,
            and guidance together.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                whileHover={{ y: -14, scale: 1.04 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl shadow-purple-950/20 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/10 to-blue-600/0 opacity-0 transition duration-500 group-hover:opacity-100" />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-700/40"
                >
                  <Icon className="h-9 w-9 text-white" />
                </motion.div>

                <motion.h3
                  whileHover={{ scale: 1.08 }}
                  className="relative text-4xl font-black md:text-5xl"
                >
                  {stat.number}
                </motion.h3>

                <p className="relative mt-3 text-gray-300">{stat.label}</p>

                <div className="absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-purple-500/20 blur-2xl transition duration-500 group-hover:bg-blue-500/30" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}