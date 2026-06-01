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
      <div className="absolute left-20 top-40 h-32 w-32 animate-pulse rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute right-20 bottom-20 h-40 w-40 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute left-1/3 bottom-10 h-24 w-24 animate-bounce rounded-full bg-pink-500/10 blur-2xl" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300"
          >
            Best Performers
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-4xl font-black text-transparent md:text-6xl"
          >
            Celebrate Students Who Inspire Others
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-5 text-lg leading-8 text-gray-300"
          >
            Highlight top students, active contributors, skill sharers, and
            performers of the AU community.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {performers.map((performer, index) => {
            const Icon = performer.icon;

            return (
              <motion.div
                key={performer.name}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -18,
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                }}
                style={{
                  marginTop:
                    index === 1 ? "40px" : index === 2 ? "80px" : "0px",
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-8 text-center shadow-[0_0_40px_rgba(99,102,241,0.15)] backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl transition group-hover:bg-blue-500/30" />

                <span className="absolute left-6 top-6 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
                  Featured
                </span>

                <div className="absolute right-6 top-6">
                  <Award className="h-6 w-6 text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.8)]" />
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-6 mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 shadow-[0_0_40px_rgba(99,102,241,0.5)]"
                >
                  <Icon className="h-10 w-10 text-white" />
                </motion.div>

                <h3 className="relative z-10 text-2xl font-bold">
                  {performer.name}
                </h3>

                <p className="relative z-10 mt-3 text-gray-300">
                  {performer.role}
                </p>

                <div className="relative z-10 mt-6 flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-yellow-300 text-yellow-300"
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 mt-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/40"
                >
                  View Profile
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}