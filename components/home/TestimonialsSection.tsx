"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I found all PYQs before my semester exam. This platform will help every student.",
    name: "Ariyan",
    role: "CSE Student",
  },
  {
    quote: "The doubt section makes learning faster because classmates can help instantly.",
    name: "Student",
    role: "Aliah University",
  },
  {
    quote: "Skill sharing is a great idea. Students can teach coding, design, speaking, and more.",
    name: "Contributor",
    role: "Community Member",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#07021a] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Testimonials
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            What Students Will Love
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl"
            >
              <p className="text-lg leading-8 text-gray-200">“{item.quote}”</p>

              <div className="mt-8">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}