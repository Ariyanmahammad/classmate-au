"use client";

import { motion } from "framer-motion";
import { BookOpen, MessageCircleQuestion, Users, GraduationCap } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#07021a] px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed22,transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-4xl font-black md:text-5xl">
                  {stat.number}
                </h3>

                <p className="mt-3 text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}