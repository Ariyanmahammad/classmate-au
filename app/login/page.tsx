"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07021a] px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl"
      >
        <h1 className="text-3xl font-black">
          Welcome to Classmate<span className="text-purple-400">.AU</span>
        </h1>

        <p className="mt-4 text-gray-300">
          Login with Google to join the student doubt-solving community.
        </p>

        <button
          onClick={() => signIn("google", { callbackUrl: "/profile-setup" })}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-bold text-black transition hover:scale-105"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="h-5 w-5"
          />
          Continue with Google
        </button>
      </motion.div>
    </main>
  );
}