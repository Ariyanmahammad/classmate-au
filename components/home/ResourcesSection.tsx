"use client";

import { motion } from "framer-motion";
import { Download, FileText, Filter, Upload } from "lucide-react";
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
      <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Notes & PYQs
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Study Materials, Organized Properly
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            Notes and PYQs are separate sections so students can quickly find
            exactly what they need before class tests, semester exams, or viva.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link key={item.title} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full cursor-pointer rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl transition hover:border-purple-400/40"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}