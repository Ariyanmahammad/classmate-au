"use client";

import { useEffect, useState } from "react";

export default function DoubtsPage() {
  const [doubts, setDoubts] = useState([]);

  useEffect(() => {
    fetch("/api/doubts/all")
      .then((res) => res.json())
      .then((data) => setDoubts(data.doubts));
  }, []);

  return (
    <main className="min-h-screen bg-[#07021a] p-10 text-white">
      <h1 className="mb-10 text-5xl font-black">
        Doubts Feed
      </h1>

      <div className="space-y-5">
        {doubts.map((doubt: any) => (
          <div
            key={doubt._id}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-2xl font-bold">
              {doubt.title}
            </h2>

            <p className="mt-3 text-gray-300">
              {doubt.description}
            </p>

            <div className="mt-4 flex gap-4 text-sm text-purple-300">
              <span>{doubt.subject}</span>
              <span>{doubt.department}</span>
              <span>Semester {doubt.semester}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}