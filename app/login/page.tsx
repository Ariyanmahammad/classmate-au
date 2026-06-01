"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  MessageCircleQuestion,
  Sparkles,
  Users,
} from "lucide-react";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07021a] px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.25),transparent_35%)]" />

      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-20 h-80 w-80 rounded-full bg-purple-600/25 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 35, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
      />

      <FloatingIcon className="left-[12%] top-[22%]" icon={<BookOpen />} />
      <FloatingIcon className="right-[14%] top-[25%]" icon={<Users />} delay={1} />
      <FloatingIcon className="bottom-[18%] left-[18%]" icon={<GraduationCap />} delay={1.5} />
      <FloatingIcon className="bottom-[20%] right-[20%]" icon={<MessageCircleQuestion />} delay={0.5} />

      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 text-center shadow-[0_0_45px_rgba(168,85,247,0.25)] backdrop-blur-2xl"
      >
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-fuchsia-600 to-blue-600 shadow-lg shadow-purple-900/40"
        >
          <Sparkles className="h-8 w-8 text-white" />
        </motion.div>

        <h1 className="text-4xl font-black">
          Welcome to Classmate
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            .AU
          </span>
        </h1>

        <p className="mt-4 leading-7 text-gray-300">
          Login with Google to join the student doubt-solving community,
          access notes, PYQs, and connect with classmates.
        </p>

        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => signIn("google", { callbackUrl: "/profile-setup" })}
          className="group relative mt-8 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-6 py-4 font-bold text-black shadow-xl transition"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-purple-200/60 to-transparent transition duration-700 group-hover:translate-x-full" />

          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="relative h-5 w-5"
          />

          <span className="relative">Continue with Google</span>
        </motion.button>

        <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-gray-300">
          <MiniCard title="Notes" />
          <MiniCard title="PYQs" />
          <MiniCard title="Doubts" />
        </div>
      </motion.div>
    </main>
  );
}

function FloatingIcon({
  icon,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute hidden rounded-2xl border border-white/10 bg-white/10 p-4 text-purple-200 backdrop-blur-xl md:block ${className}`}
    >
      {icon}
    </motion.div>
  );
}

function MiniCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3 font-semibold">
      {title}
    </div>
  );
}