"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
        <Link href="/" className="text-xl font-bold text-white">
          Classmate<span className="text-purple-400">.AU</span>
        </Link>

        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#motive" className="transition hover:text-white">Motive</a>
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#notes" className="transition hover:text-white">Notes & PYQs</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>

        {session ? (
          <div className="group relative">
            <button>
              <img
                src={session.user?.image || "/default-avatar.png"}
                alt="Profile"
                className="h-10 w-10 rounded-full border-2 border-purple-500 object-cover"
              />
            </button>

            <div className="invisible absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#0b0620] p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              <p className="px-3 py-2 text-sm font-semibold text-white">
                {session.user?.name}
              </p>

              <Link href="/profile" className="block rounded-xl px-3 py-2 text-sm text-gray-300 hover:bg-white/10">
                My Profile
              </Link>

              <Link href="/dashboard" className="block rounded-xl px-3 py-2 text-sm text-gray-300 hover:bg-white/10">
                Dashboard
              </Link>

              <Link href="/doubts" className="block rounded-xl px-3 py-2 text-sm text-gray-300 hover:bg-white/10">
                Doubts
              </Link>

              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="block w-full rounded-xl px-3 py-2 text-left text-sm text-red-400 hover:bg-white/10"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link
            href="/login"
            className="rounded-full bg-purple-600 px-5 py-2 font-medium text-white transition hover:bg-purple-700"
          >
            Join Now
          </Link>
        )}
      </div>
    </motion.nav>
  );
}