"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  GraduationCap,
  Handshake,
  Lightbulb,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Teach to Learn",
    description:
      "Students can teach topics they know and strengthen their own concepts.",
    icon: GraduationCap,
  },
  {
    title: "Ask Your Doubts",
    description:
      "Post academic doubts and get answers from classmates and teachers.",
    icon: MessageCircleQuestion,
  },
  {
    title: "Notes & PYQs",
    description:
      "Access organized notes, PDFs, previous year questions, and study materials.",
    icon: BookOpen,
  },
  {
    title: "Share Your Skill",
    description:
      "Showcase your skills like coding, design, speaking, writing, or teaching.",
    icon: Lightbulb,
  },
  {
    title: "Connect Together",
    description:
      "Connect with classmates, seniors, juniors, and teachers in one platform.",
    icon: Handshake,
  },
  {
    title: "Grow Smarter",
    description:
      "Track top contributors, best performers, and active learners.",
    icon: Brain,
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#07021a] px-6 py-28 text-white"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.22),transparent_35%)]" />

      {/* Floating blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 35, 0], x: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"
      />

      {/* Floating small icons */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[12%] top-[18%] hidden rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur md:block"
      >
        <Sparkles className="h-6 w-6 text-purple-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[14%] top-[22%] hidden rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur md:block"
      >
        <BookOpen className="h-6 w-6 text-blue-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -22, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[14%] left-[18%] hidden rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur lg:block"
      >
        <Brain className="h-6 w-6 text-pink-300" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold text-purple-200 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Platform Features
          </div>

          <h2 className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-4xl font-black text-transparent md:text-6xl">
            Everything Students Need in One Place
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-300 md:text-lg">
            Classmate.AU brings learning, sharing, doubt-solving, notes,
            skills, and community connection into one modern platform.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-7 shadow-2xl shadow-purple-950/20 backdrop-blur-xl transition hover:border-purple-400/50"
              >
                {/* card shine */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />

                {/* corner glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl transition group-hover:bg-blue-500/25" />

                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 3 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-fuchsia-600 to-blue-600 shadow-lg shadow-purple-700/30"
                >
                  <Icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="relative text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="relative mt-4 min-h-[84px] leading-7 text-gray-300">
                  {feature.description}
                </p>

                <div className="relative mt-6 flex items-center justify-between">
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-400/60 via-white/20 to-transparent" />

                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="ml-4 text-sm font-semibold text-purple-300 opacity-0 transition group-hover:opacity-100"
                  >
                    Explore →
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}