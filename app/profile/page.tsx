"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  Mail,
  GraduationCap,
  BookOpen,
  Sparkles,
  UserRound,
  Pencil,
} from "lucide-react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#07021a] text-white">
        Loading profile...
      </main>
    );
  }

  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#07021a] px-6 text-white">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h1 className="text-3xl font-bold">Please login first</h1>

          <Link
            href="/login"
            className="mt-6 inline-block rounded-full bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700"
          >
            Go to Login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07021a] px-6 py-28 text-white">
      <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-purple-600/25 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-2xl"
      >
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-xl" />

            <img
              src={session.user?.image || "/default-avatar.png"}
              alt="Profile"
              className="relative h-36 w-36 rounded-full border-4 border-purple-400 object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
              <Sparkles className="h-4 w-4" />
              Student Profile
            </div>

            <h1 className="text-4xl font-black md:text-5xl">
              {session.user?.name}
            </h1>

            <p className="mt-3 flex items-center justify-center gap-2 text-gray-300 md:justify-start">
              <Mail className="h-4 w-4 text-purple-300" />
              {session.user?.email}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <Badge icon={<GraduationCap />} text={`Department: ${session.user?.department || "Not added"}`} />
              <Badge icon={<BookOpen />} text={`Semester: ${session.user?.semester || "Not added"}`} />
            </div>
          </div>

          <Link
            href="/profile-setup"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold shadow-lg shadow-purple-900/30 hover:scale-105"
          >
            <Pencil className="h-4 w-4" />
            Edit Profile
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ProfileCard
            title="About Me"
            icon={<UserRound />}
            content="Your profile is ready. You can update your bio and academic details from profile setup."
          />

          <ProfileCard
            title="Can Help With"
            icon={<Sparkles />}
            content="Subjects and skills will appear here after future profile improvements."
          />
        </div>
      </motion.div>
    </main>
  );
}

function Badge({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-200">
      <span className="text-purple-300">{icon}</span>
      {text}
    </div>
  );
}

function ProfileCard({
  title,
  icon,
  content,
}: {
  title: string;
  icon: React.ReactNode;
  content: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-2xl bg-purple-600/20 p-3 text-purple-300">
          {icon}
        </div>

        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <p className="leading-7 text-gray-300">{content}</p>
    </div>
  );
}