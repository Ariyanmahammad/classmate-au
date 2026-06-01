"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4"
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 shadow-[0_0_35px_rgba(168,85,247,0.25)] backdrop-blur-3xl"
      >
        <Link href="/" className="text-xl font-extrabold text-white">
          Classmate
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            .AU
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-gray-300 md:flex">
          {[
            { name: "Motive", href: "#motive" },
            { name: "Features", href: "#features" },
            { name: "Notes & PYQs", href: "#notes" },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2, scale: 1.05 }}
              className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.name}
            </motion.a>
          ))}

          <Link
            href="/contact"
            target="_blank"
            className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
          >
            Contact
          </Link>
        </div>

        {session ? (
          <div className="relative">
            <motion.button
              type="button"
              onClick={() => setOpen(!open)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-2 rounded-full border border-white/10 bg-white/10 p-1 pr-3"
            >
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 opacity-40 blur-md" />

              <img
                src={session.user?.image || "/default-avatar.png"}
                alt="Profile"
                className="relative h-10 w-10 rounded-full border-2 border-purple-400 object-cover"
              />

              <span className="relative hidden text-sm font-medium text-white md:block">
                {session.user?.name?.split(" ")[0]}
              </span>
            </motion.button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-16 w-64 rounded-3xl border border-white/10 bg-[#0b0620] p-3 shadow-[0_0_35px_rgba(168,85,247,0.3)] backdrop-blur-xl"
                >
                  <div className="mb-2 rounded-2xl bg-white/10 px-4 py-3">
                    <p className="text-sm font-semibold text-white">
                      {session.user?.name}
                    </p>
                    <p className="truncate text-xs text-gray-400">
                      {session.user?.email}
                    </p>
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                  >
                    My Profile
                  </Link>

                  <Link
                    href="/dashboard"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/doubts"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
                  >
                    Doubts
                  </Link>

                  <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="mt-2 block w-full rounded-xl px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/login"
              className="rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 px-6 py-2.5 font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.45)]"
            >
              Join Now
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}
