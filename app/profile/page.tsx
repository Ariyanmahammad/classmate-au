"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen bg-[#07021a] px-6 py-28 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
        <img
          src={session?.user?.image || "/default-avatar.png"}
          alt="Profile"
          className="h-28 w-28 rounded-full border-4 border-purple-500 object-cover"
        />

        <h1 className="mt-6 text-4xl font-black">{session?.user?.name}</h1>
        <p className="mt-2 text-gray-300">{session?.user?.email}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/dashboard" className="rounded-xl bg-purple-600 px-5 py-3 font-semibold">
            Dashboard
          </Link>

          <Link href="/profile-setup" className="rounded-xl bg-white/10 px-5 py-3 font-semibold">
            Edit Profile
          </Link>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="rounded-xl bg-red-600 px-5 py-3 font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}