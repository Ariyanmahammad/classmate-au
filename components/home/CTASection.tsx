"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#07021a] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9333ea44,transparent_45%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-600/30 to-blue-600/30 px-8 py-20 text-center backdrop-blur-xl"
      >
        <h2 className="text-4xl font-black md:text-6xl">
          Ready to Learn Together?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
          Join Classmate.AU and become part of a smarter, stronger, and more connected Aliah University community.
        </p>

        <button className="mx-auto mt-10 flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-purple-700 transition hover:scale-105">
          Create Account
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </section>
  );
}