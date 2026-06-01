"use client";

import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Code2, UserRound } from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProfileSetupPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("/api/profile/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        department,
        semester,
        bio,
        skills: skills.split(",").map((s) => s.trim()),
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Profile Completed Successfully");
      router.push("/");
      router.refresh();
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07021a] px-6 py-16 text-white">
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-2xl md:grid-cols-2"
      >
        <div className="relative hidden bg-gradient-to-br from-purple-700/40 to-blue-700/20 p-10 md:block">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mb-8 inline-flex rounded-2xl bg-white/10 p-4"
          >
            <Sparkles className="h-8 w-8 text-purple-200" />
          </motion.div>

          <h2 className="text-4xl font-black leading-tight">
            Build your student profile beautifully.
          </h2>

          <p className="mt-5 text-gray-300">
            Add your department, semester, skills, and bio so Classmate.AU can personalize your experience.
          </p>

          <div className="mt-10 space-y-4">
            <Feature icon={<GraduationCap />} text="Academic identity" />
            <Feature icon={<Code2 />} text="Skills and interests" />
            <Feature icon={<UserRound />} text="Personal student bio" />
          </div>
        </div>

        <div className="p-7 sm:p-10">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="mb-3 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
              Profile Setup
            </p>

            <h1 className="text-3xl font-black sm:text-4xl">
              Complete Your Profile
            </h1>

            <p className="mt-2 text-gray-300">
              Welcome {session?.user?.name}
            </p>

            <div className="mt-8 space-y-4">
              <InputBox
                placeholder="Department (CSE)"
                value={department}
                onChange={setDepartment}
              />

              <InputBox
                placeholder="Semester (4)"
                value={semester}
                onChange={setSemester}
              />

              <InputBox
                placeholder="Skills (DBMS, React, DSA)"
                value={skills}
                onChange={setSkills}
              />

              <textarea
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="min-h-32 w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/[0.14]"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-4 font-bold shadow-lg shadow-purple-900/30 transition hover:shadow-purple-700/40"
              >
                Save Profile
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

function InputBox({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-400 focus:bg-white/[0.14]"
    />
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
      <div className="text-purple-200">{icon}</div>
      <p className="font-medium">{text}</p>
    </div>
  );
}