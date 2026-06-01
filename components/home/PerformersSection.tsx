"use client";

import { motion } from "framer-motion";
import { Award, Code2, GraduationCap, Star } from "lucide-react";

const performers = [
  {
    name: "Top Contributor",
    role: "Most helpful student",
    icon: Star,
  },
  {
    name: "Academic Performer",
    role: "Best semester result",
    icon: GraduationCap,
  },
  {
    name: "Coding Performer",
    role: "DSA / project excellence",
    icon: Code2,
  },
];

export default function PerformersSection() {
  return (
    <section className="relative overflow-hidden bg-[#07021a] px-6 py-28 text-white">
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Best Performers
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Celebrate Students Who Inspire Others
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Highlight top students, active contributors, skill sharers, and
            performers of the AU community.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {performers.map((performer, index) => {
            const Icon = performer.icon;

            return (
              <motion.div
                key={performer.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl"
              >
                <div className="absolute right-6 top-6">
                  <Award className="h-6 w-6 text-yellow-300" />
                </div>

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600">
                  <Icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold">{performer.name}</h3>

                <p className="mt-3 text-gray-300">{performer.role}</p>

                <button className="mt-6 rounded-full border border-white/15 px-5 py-2 text-sm font-medium transition hover:bg-white/10">
                  View Profile
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}