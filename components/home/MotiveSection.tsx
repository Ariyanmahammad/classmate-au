"use client";

import { motion } from "framer-motion";

export default function MotiveSection() {
  return (
    <section
      id="motive"
      className="relative overflow-hidden bg-[#07021a] px-6 py-28 text-white"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
              Our Motive
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Building the Student Community We Always Wanted
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Students often struggle to find notes, ask doubts, connect with
              seniors, discover opportunities, and share knowledge.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              Classmate.AU aims to create one platform where every student can
              learn, teach, collaborate, grow, and help others succeed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold">
                📚 Academic Growth
              </h3>
              <p className="mt-3 text-gray-300">
                Access quality notes, PYQs, and study resources.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold">
                🤝 Collaboration
              </h3>
              <p className="mt-3 text-gray-300">
                Connect with classmates, seniors, juniors, and teachers.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold">
                🚀 Skill Development
              </h3>
              <p className="mt-3 text-gray-300">
                Showcase talents, share skills, and build your profile.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}