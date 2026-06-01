"use client";

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
    <main className="flex min-h-screen items-center justify-center bg-[#07021a] px-6 text-white">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
        <h1 className="text-3xl font-black">
          Complete Your Profile
        </h1>

        <p className="mt-2 text-gray-300">
          Welcome {session?.user?.name}
        </p>

        <div className="mt-8 space-y-4">

          <input
            placeholder="Department (CSE)"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full rounded-xl bg-white/10 p-4"
          />

          <input
            placeholder="Semester (4)"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full rounded-xl bg-white/10 p-4"
          />

          <input
            placeholder="Skills (DBMS, React, DSA)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full rounded-xl bg-white/10 p-4"
          />

          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full rounded-xl bg-white/10 p-4"
          />

          <button
            onClick={handleSubmit}
            className="w-full rounded-xl bg-purple-600 p-4 font-bold"
          >
            Save Profile
          </button>

        </div>
      </div>
    </main>
  );
}