"use client";

import { useState } from "react";

export default function PremiumRequestPage() {
  const [subject, setSubject] = useState("");
  const [requirements, setRequirements] = useState("");

  return (
    <main className="min-h-screen bg-[#07021a] p-8 text-white">
      <h1 className="text-5xl font-black">
        Premium Notes Request
      </h1>

      <p className="mt-4 text-gray-300">
        Custom notes for ₹100
      </p>

      <div className="mt-10 max-w-xl space-y-4">

        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-xl bg-white/10 p-4"
        />

        <textarea
          placeholder="Requirements"
          value={requirements}
          onChange={(e) =>
            setRequirements(e.target.value)
          }
          className="w-full rounded-xl bg-white/10 p-4"
        />

        <button className="rounded-xl bg-purple-600 px-6 py-4 font-bold">
          Submit Request
        </button>

      </div>
    </main>
  );
}