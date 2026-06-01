"use client";

import { motion } from "framer-motion";
import { BookOpen, MessageCircleQuestion, Video, Trophy } from "lucide-react";

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb22,transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Live Community
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            See What’s Happening Around Campus
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            Doubts, notes, skill sessions, and student achievements — all in one active community feed.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600">
                  <Icon className="h-7 w-7" />
                </div>

                <p className="text-sm text-purple-300">{item.title}</p>

                <h3 className="mt-3 text-xl font-bold">{item.heading}</h3>

                <p className="mt-4 text-sm leading-6 text-gray-300">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}