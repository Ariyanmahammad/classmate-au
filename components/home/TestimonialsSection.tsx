"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I found all PYQs before my semester exam. This platform will help every student.",
    name: "Ariyan",
    role: "CSE Student",
  },
  {
    quote:
      "The doubt section makes learning faster because classmates can help instantly.",
    name: "Student",
    role: "Aliah University",
  },
  {
    quote:
      "Skill sharing is a great idea. Students can teach coding, design, speaking, and more.",
    name: "Contributor",
    role: "Community Member",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#07021a] px-6 py-32 text-white">
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute bottom-10 right-[-120px] h-96 w-96 rounded-full bg-blue-600/25 blur-[130px]" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[120px]" />

      {/* Floating Decorative Circles */}
      <motion.div
        animate={{ y: [0, -22, 0], x: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-16 top-24 h-20 w-20 rounded-full border border-purple-300/20 bg-white/5"
      />

      <motion.div
        animate={{ y: [0, 24, 0], x: [0, -14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-24 h-28 w-28 rounded-full border border-blue-300/20 bg-white/5"
      />

      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1/4 top-20 h-12 w-12 rounded-2xl border border-pink-300/20 bg-white/5"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
            Testimonials
          </p>

          <h2 className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-4xl font-black text-transparent md:text-6xl">
            What Students Will Love
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Real student-focused features that make notes, PYQs, doubts, and
            learning easier in one connected university platform.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -14,
                scale: 1.03,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 shadow-2xl shadow-purple-950/20 backdrop-blur-xl"
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Quote Icon */}
              <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-4xl font-black shadow-lg shadow-purple-500/30">
                “
              </div>

              <p className="relative text-lg leading-8 text-gray-200">
                “{item.quote}”
              </p>

              <div className="relative mt-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-blue-500 text-lg font-black">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-white">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>

              {/* Bottom Shine Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-4xl gap-5 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl md:grid-cols-3"
        >
          <div className="text-center">
            <h3 className="text-3xl font-black text-purple-300">PYQs</h3>
            <p className="mt-2 text-sm text-gray-400">Easy semester access</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black text-blue-300">Doubts</h3>
            <p className="mt-2 text-sm text-gray-400">Ask and learn faster</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-black text-pink-300">Skills</h3>
            <p className="mt-2 text-sm text-gray-400">Share and grow together</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}