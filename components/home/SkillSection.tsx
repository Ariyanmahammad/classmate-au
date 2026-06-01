"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Mic,
  Palette,
  PenTool,
  Video,
  Zap,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";

const skills = [
  { title: "Web Development", icon: Code2 },
  { title: "Public Speaking", icon: Mic },
  { title: "UI/UX Design", icon: Palette },
  { title: "Content Writing", icon: PenTool },
  { title: "Video Editing", icon: Video },
  { title: "Competitive Coding", icon: Zap },
];

export default function SkillSection() {
  return (
    <section className="relative overflow-hidden bg-[#07021a] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.22),transparent_35%)]" />

      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-24 h-24 w-24 rounded-full bg-purple-500/20 blur-xl"
      />

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-16 h-32 w-32 rounded-full bg-blue-500/20 blur-xl"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute right-24 top-20 h-72 w-72 rounded-full border border-purple-400/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-16 left-20 h-60 w-60 rounded-full border border-blue-400/20"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-purple-400/30 bg-white/10 px-5 py-2 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-purple-300" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
              Skill Sharing
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-black md:text-6xl"
          >
            Learn Skills From Your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Own Campus
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-5 text-lg leading-8 text-gray-300"
          >
            Students can post their skills, teach others, conduct sessions,
            and build their personal profile inside the AU community.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            ["Peer Learning", "Learn directly from seniors and classmates"],
            ["Campus Sessions", "Host mini workshops and study circles"],
            ["Profile Growth", "Build reputation through skills"],
          ].map(([title, desc], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-center backdrop-blur-xl"
            >
              <Users className="mx-auto mb-3 h-7 w-7 text-purple-300" />
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-purple-950/20 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-blue-600/0 transition duration-500 group-hover:from-purple-600/20 group-hover:to-blue-600/20" />

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-600/30"
                >
                  <Icon className="h-8 w-8" />
                </motion.div>

                <div className="relative">
                  <h3 className="text-2xl font-bold">{skill.title}</h3>

                  <p className="mt-4 leading-7 text-gray-300">
                    Share, teach, learn, and grow with students having similar
                    interests.
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-purple-300 opacity-0 transition duration-300 group-hover:opacity-100">
                    Explore Skill
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}