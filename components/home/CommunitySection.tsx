"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  MessageCircleQuestion,
  Video,
  Trophy,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const items = [
  {
    title: "Latest Doubt",
    heading: "How does DBMS Normalization work?",
    text: "18 answers · 43 upvotes · CSE",
    icon: MessageCircleQuestion,
  },
  {
    title: "Recent Notes",
    heading: "Operating System Unit 3 Notes",
    text: "PDF · Semester 4 · CSE",
    icon: BookOpen,
  },
  {
    title: "Upcoming Session",
    heading: "React Basics Workshop",
    text: "Today · 7 PM · Google Meet",
    icon: Video,
  },
  {
    title: "Top Contributor",
    heading: "Ariyan helped 32 students this week",
    text: "Doubts · Notes · Skills",
    icon: Trophy,
  },
];

export default function CommunitySection() {
  return (
    <section className="relative overflow-hidden bg-[#07021a] px-6 py-28 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb33,transparent_45%)]" />
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-[8%] top-28 hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl md:block"
      >
        <Sparkles className="h-8 w-8 text-purple-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 22, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-[10%] top-40 hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl md:block"
      >
        <Users className="h-8 w-8 text-blue-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-32 left-[15%] hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl lg:block"
      >
        <Zap className="h-8 w-8 text-yellow-300" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Live Community
          </p>

          <h2 className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-4xl font-black text-transparent md:text-6xl">
            See What’s Happening Around Campus
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            Doubts, notes, skill sessions, and student achievements — all in one active community feed.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -14, scale: 1.04 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-blue-950/40 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-blue-600/0 to-purple-600/0 opacity-0 transition duration-500 group-hover:from-purple-600/20 group-hover:via-blue-600/10 group-hover:to-pink-600/20 group-hover:opacity-100" />

                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl transition duration-500 group-hover:bg-blue-500/30" />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-blue-600/30"
                >
                  <Icon className="h-7 w-7" />
                </motion.div>

                <div className="relative z-10">
                  <p className="text-sm font-medium text-purple-300">
                    {item.title}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-snug">
                    {item.heading}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {item.text}
                  </p>

                  <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-28" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Live Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-5 text-sm text-gray-300 backdrop-blur-xl"
        >
          <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-300">
            ● 128 students online
          </span>
          <span>42 notes shared today</span>
          <span className="hidden md:inline">•</span>
          <span>17 doubts solved</span>
          <span className="hidden md:inline">•</span>
          <span>5 live discussions active</span>
        </motion.div>
      </div>
    </section>
  );
}