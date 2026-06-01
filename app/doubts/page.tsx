"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircleQuestion,
  Search,
  Sparkles,
  Tags,
  BookOpen,
  GraduationCap,
  MousePointerClick,
} from "lucide-react";

export default function DoubtsPage() {
  const [doubts, setDoubts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/doubts/all")
      .then((res) => res.json())
      .then((data) => setDoubts(data.doubts || []));
  }, []);

  const filteredDoubts = doubts.filter((doubt: any) => {
    const text = `${doubt.title} ${doubt.description} ${doubt.subject} ${doubt.department}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07021a] px-6 py-24 text-white">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-blue-600/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-pink-600/20 blur-3xl" />

      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[22%] hidden rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur md:block"
      >
        <MessageCircleQuestion className="h-7 w-7 text-purple-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[18%] hidden rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur md:block"
      >
        <Sparkles className="h-7 w-7 text-blue-300" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div className="mb-12 text-center">
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold text-purple-200 backdrop-blur">
            <MessageCircleQuestion className="h-4 w-4" />
            Community Help
          </div>

          <h1 className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Doubts Feed
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300 md:text-lg">
            Explore doubts posted by students, find topics quickly, and help your classmates learn better.
          </p>
        </div>

        <div className="mb-12 grid gap-5 md:grid-cols-3">
          <InfoCard icon={<BookOpen />} title="Total Doubts" value={doubts.length} />
          <InfoCard icon={<GraduationCap />} title="Community Mode" value="Active" />
          <InfoCard icon={<Sparkles />} title="Learning Together" value="On" />
        </div>

        <div className="mb-12 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl md:flex-row md:items-center">
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <Search className="h-5 w-5 text-purple-300" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search doubts by title, subject, department..."
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="rounded-2xl border border-purple-400/20 bg-purple-500/10 px-5 py-3 text-sm font-semibold text-purple-200">
            Showing {filteredDoubts.length} doubts
          </div>
        </div>

        {filteredDoubts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-10 text-center backdrop-blur-xl">
            <MessageCircleQuestion className="mx-auto mb-4 h-12 w-12 text-purple-300" />
            <h2 className="text-2xl font-bold">No doubts found</h2>
            <p className="mt-3 text-gray-400">
              Try another search or post a new doubt.
            </p>
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-2">
            {filteredDoubts.map((doubt: any, index) => (
              <motion.button
                type="button"
                key={doubt._id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -10, scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => alert("Full doubt page coming soon 🚀")}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 text-left shadow-2xl shadow-purple-950/20 backdrop-blur-xl transition hover:border-purple-400/50 hover:bg-white/[0.1]"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-purple-500/20 blur-2xl transition group-hover:bg-blue-500/25" />

                <div className="relative mb-5 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-4 py-1.5 text-xs font-semibold text-purple-200">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Semester {doubt.semester || "N/A"}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-400 opacity-0 transition group-hover:opacity-100">
                    <MousePointerClick className="h-4 w-4" />
                    Clickable
                  </div>
                </div>

                <h2 className="relative text-2xl font-bold text-white transition-colors group-hover:text-purple-300">
                  {doubt.title}
                </h2>

                <p className="relative mt-4 line-clamp-3 leading-7 text-gray-300">
                  {doubt.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 px-3 py-1 text-blue-200">
                    <BookOpen className="h-3.5 w-3.5" />
                    {doubt.subject || "Subject"}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-pink-500/15 px-3 py-1 text-pink-200">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {doubt.department || "Department"}
                  </span>

                  {doubt.tags?.slice(0, 2).map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-gray-300"
                    >
                      <Tags className="h-3.5 w-3.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-gray-400">
                    Asked by a Classmate.AU student
                  </span>

                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-sm font-semibold text-purple-300"
                  >
                    View Soon →
                  </motion.span>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </motion.div>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600/20 text-purple-300">
        {icon}
      </div>

      <p className="text-sm text-gray-400">{title}</p>
      <h3 className="mt-1 text-2xl font-black text-white">{value}</h3>
    </div>
  );
}