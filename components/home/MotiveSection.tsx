"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Rocket, Sparkles, GraduationCap, MessageCircle } from "lucide-react";

const cards = [
  {
    title: "Academic Growth",
    desc: "Access quality notes, PYQs, and study resources.",
    icon: BookOpen,
    emoji: "📚",
  },
  {
    title: "Collaboration",
    desc: "Connect with classmates, seniors, juniors, and teachers.",
    icon: Users,
    emoji: "🤝",
  },
  {
    title: "Skill Development",
    desc: "Showcase talents, share skills, and build your profile.",
    icon: Rocket,
    emoji: "🚀",
  },
];

const floatingItems = [
  { icon: GraduationCap, text: "Seniors", className: "left-[8%] top-[18%]" },
  { icon: MessageCircle, text: "Doubts", className: "right-[8%] top-[20%]" },
  { icon: BookOpen, text: "Notes", className: "left-[12%] bottom-[18%]" },
  { icon: Sparkles, text: "Skills", className: "right-[12%] bottom-[18%]" },
];

export default function MotiveSection() {
  return (
    <section
      id="motive"
      className="relative overflow-hidden bg-[#07021a] px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
      />

      {floatingItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              delay: index * 0.15,
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl lg:flex items-center gap-2 ${item.className}`}
          >
            <Icon className="h-5 w-5 text-purple-300" />
            <span className="text-sm font-semibold text-white/80">{item.text}</span>
          </motion.div>
        );
      })}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-purple-200"
            >
              <Sparkles className="h-4 w-4" />
              Our Motive
            </motion.p>

            <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
              Building the Student Community We Always Wanted
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Students often struggle to find notes, ask doubts, connect with
              seniors, discover opportunities, and share knowledge.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-8 text-gray-300">
              Classmate.AU aims to create one platform where every student can
              learn, teach, collaborate, grow, and help others succeed.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {["Notes", "PYQs", "Doubts", "Seniors", "Skills"].map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-gray-200 backdrop-blur-xl"
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-2xl" />

            <div className="relative grid gap-5">
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 opacity-0 transition group-hover:opacity-100" />

                    <div className="relative flex items-start gap-5">
                      <motion.div
                        animate={{ rotate: [0, 8, -8, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl"
                      >
                        {card.emoji}
                      </motion.div>

                      <div>
                        <h3 className="flex items-center gap-2 text-xl font-bold">
                          <Icon className="h-5 w-5 text-purple-300" />
                          {card.title}
                        </h3>
                        <p className="mt-3 text-gray-300">{card.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}