"use client";

import { useState } from "react";

export default function CreateDoubtPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    subject: "",
    tags: "",
  });

  const handleSubmit = async () => {
    const response = await fetch("/api/doubts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        tags: form.tags.split(","),
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("Doubt Posted Successfully");
    }
  };

  return (
    <div className="min-h-screen bg-[#07021a] p-10 text-white">
      <h1 className="mb-8 text-4xl font-black">
        Post a Doubt
      </h1>

      <div className="max-w-xl space-y-4">

        <input
          placeholder="Title"
          className="w-full rounded-xl bg-white/10 p-4"
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <textarea
          placeholder="Describe your doubt"
          className="w-full rounded-xl bg-white/10 p-4"
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <select
          className="w-full rounded-xl bg-white/10 p-4"
          onChange={(e) =>
            setForm({
              ...form,
              subject: e.target.value,
            })
          }
        >
          <option value="">Select Subject</option>
          <option>DBMS</option>
          <option>Operating System</option>
          <option>Computer Networks</option>
          <option>TOC</option>
          <option>DAA</option>
          <option>Discrete Mathematics</option>
        </select>

        <input
          placeholder="Tags (comma separated)"
          className="w-full rounded-xl bg-white/10 p-4"
          onChange={(e) =>
            setForm({
              ...form,
              tags: e.target.value,
            })
          }
        />

        <button
          onClick={handleSubmit}
          className="rounded-xl bg-purple-600 px-6 py-4 font-bold"
        >
          Post Doubt
        </button>

      </div>
    </div>
  );
}