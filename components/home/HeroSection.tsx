"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  MessageCircleQuestion,
  Sparkles,
  Upload,
  Users,
  Video,
} from "lucide-react";
import Navbar from "../shared/Navbar";

const floatingCards = [
  { title: "Ask Doubts", icon: MessageCircleQuestion },
  { title: "Upload Notes", icon: Upload },
  { title: "Join Meet", icon: Video },
  { title: "Find PYQs", icon: BookOpen },
  { title: "Connect", icon: Users },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050014] text-white">
      <Navbar />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#9333ea55,transparent_30%),radial-gradient(circle_at_80%_60%,#2563eb55,transparent_35%),radial-gradient(circle_at_50%_100%,#06b6d455,transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:90px_90px] opacity-30" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -right-40 top-28 h-[420px] w-[420px] rounded-full border border-purple-400/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 top-48 h-[260px] w-[260px] rounded-full border border-blue-400/20"
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pt-28 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-purple-200 backdrop-blur-md"
          >
            <Sparkles size={16} />
            Aliah University Student Community
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl font-black leading-tight md:text-7xl"
          >
            Your Campus.
            <br />
            Your Network.
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Your Growth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-gray-300"
          >
            
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="mt-10 flex flex-col gap-4 pb-24 sm:flex-row xl:pb-0"
          >
            <button className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold shadow-lg shadow-purple-900/40 transition hover:scale-105">
              Start Learning
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/15">
              Explore Platform
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 80 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden h-[560px] lg:block"
        >
          <div className="absolute left-12 top-12 h-[430px] w-[430px] rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-3xl" />

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-16 top-12 w-80 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl"
          >
            <p className="text-sm text-purple-200">Live Doubt</p>
            <h3 className="mt-3 text-2xl font-bold">
              “Can someone explain DBMS normalization?”
            </h3>
            <p className="mt-4 text-sm text-gray-300">
              12 answers · 38 upvotes · CSE 4th Sem
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute right-4 top-52 w-72 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl"
          >
            <p className="text-sm text-blue-200">Notes Uploaded</p>
            <h3 className="mt-3 text-2xl font-bold">Operating System PYQ</h3>
            <p className="mt-4 text-sm text-gray-300">
              PDF · Semester 4 · 2.4MB
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute bottom-20 left-4 w-72 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl"
          >
            <p className="text-sm text-cyan-200">Skill Session</p>
            <h3 className="mt-3 text-2xl font-bold">React Basics Workshop</h3>
            <p className="mt-4 text-sm text-gray-300">
              Today · Google Meet · 7 PM
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-3 left-0 right-0 z-20 hidden overflow-hidden xl:block">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-4"
        >
          {[...floatingCards, ...floatingCards, ...floatingCards].map(
            (card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 backdrop-blur-xl"
                >
                  <Icon className="h-5 w-5 text-purple-300" />
                  <span className="whitespace-nowrap text-sm font-medium">
                    {card.title}
                  </span>
                </div>
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
}