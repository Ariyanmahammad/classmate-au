import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#07021a] p-8 text-white">
      <h1 className="text-5xl font-black">
        Dashboard
      </h1>

      <p className="mt-3 text-gray-300">
        Welcome to Classmate.AU
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <Link
          href="/doubts/create"
          className="rounded-2xl bg-white/5 p-6 hover:bg-white/10"
        >
          <h2 className="text-xl font-bold">
            Post Doubt
          </h2>
        </Link>

        <Link
          href="/notes"
          className="rounded-2xl bg-white/5 p-6 hover:bg-white/10"
        >
          <h2 className="text-xl font-bold">
            Notes
          </h2>
        </Link>

        <Link
          href="/pyqs"
          className="rounded-2xl bg-white/5 p-6 hover:bg-white/10"
        >
          <h2 className="text-xl font-bold">
            PYQs
          </h2>
        </Link>

        <Link
          href="/premium-request"
          className="rounded-2xl bg-white/5 p-6 hover:bg-white/10"
        >
          <h2 className="text-xl font-bold">
            Premium Notes
          </h2>
        </Link>

      </div>
    </main>
  );
}