"use client";

import { motion } from "framer-motion";
import { Code2, Mic, Palette, PenTool, Video, Zap } from "lucide-react";

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
      <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Skill Sharing
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Learn Skills From Your Own Campus
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Students can post their skills, teach others, conduct sessions,
            and build their personal profile inside the AU community.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold">{skill.title}</h3>

                <p className="mt-4 leading-7 text-gray-300">
                  Share, teach, learn, and grow with students having similar
                  interests.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}