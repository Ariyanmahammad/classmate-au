"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  GraduationCap,
  Handshake,
  Lightbulb,
  MessageCircleQuestion,
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
      className="relative overflow-hidden bg-[#07021a] px-6 py-24 text-white"
    >
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Platform Features
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Everything Students Need in One Place
          </h2>

          <p className="mt-5 text-gray-300 md:text-lg">
            Classmate.AU brings learning, sharing, doubt-solving, notes,
            skills, and community connection into one modern platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition hover:border-purple-400/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold">{feature.title}</h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {feature.description}
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}