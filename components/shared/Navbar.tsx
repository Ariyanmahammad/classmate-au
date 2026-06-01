"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
        
        <h1 className="text-xl font-bold text-white">
          Classmate
          <span className="text-purple-400">.AU</span>
        </h1>

        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#motive" className="hover:text-white transition">
            Motive
          </a>

          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#notes" className="hover:text-white transition">
            Notes
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        <button className="rounded-full bg-purple-600 px-5 py-2 font-medium text-white transition hover:bg-purple-700">
          Login
        </button>
      </div>
    </motion.nav>
  );
}