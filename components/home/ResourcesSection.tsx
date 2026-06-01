"use client";

import { motion } from "framer-motion";
import { Download, FileText, Filter, Upload, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    title: "Semester Notes",
    description:
      "Open semester-wise notes organized by department, semester, and subject.",
    icon: FileText,
    href: "/notes",
  },
  {
    title: "Previous Year Questions",
    description:
      "Open PYQs separately so students can prepare faster before exams.",
    icon: Download,
    href: "/pyqs",
  },
  {
    title: "Smart Filters",
    description:
      "Find resources using semester, subject, and department filters.",
    icon: Filter,
    href: "/notes",
  },
  {
    title: "Admin Upload",
    description:
      "Only admin can upload verified notes and PYQs for students.",
    icon: Upload,
    href: "/admin",
  },
];

export default function ResourcesSection() {
  return (
    <section
      id="notes"
      className="relative overflow-hidden bg-[#07021a] px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.2),transparent_35%)]" />

      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-20 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute right-24 top-24 h-28 w-28 rounded-full border border-purple-400/30"
      />

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] bottom-20 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm text-gray-200 backdrop-blur-xl md:block"
      >
        500+ Study Resources
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-52 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm text-gray-200 backdrop-blur-xl md:block"
      >
        Notes • PYQs • Filters
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-purple-200"
            >
              <Sparkles className="h-4 w-4" />
              Notes & PYQs
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl font-black leading-tight md:text-6xl"
            >
              Study Materials,
              <span className="block bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Organized Properly
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-5 text-lg leading-8 text-gray-300"
            >
              Notes and PYQs are separate sections so students can quickly find
              exactly what they need before class tests, semester exams, or viva.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
              Resource Hub
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <h3 className="text-3xl font-black">PYQ</h3>
                <p className="mt-1 text-sm text-gray-300">Exam focused</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <h3 className="text-3xl font-black">PDF</h3>
                <p className="mt-1 text-sm text-gray-300">Easy access</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link key={item.title} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.025 }}
                  className="group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-purple-400/50"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.22),transparent_35%)]" />

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-900/30"
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>

                  <div className="relative z-10 flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>

                      <p className="mt-4 leading-7 text-gray-300">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight className="mt-1 h-6 w-6 text-gray-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>

                  <div className="relative z-10 mt-7 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: "20%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: index * 0.12 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}