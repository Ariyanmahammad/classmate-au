import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07021a] p-8 text-white">
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200">
          <Sparkles size={16} />
          Coming Soon
        </div>

        <h1 className="mt-6 text-5xl font-black">
          Dashboard
        </h1>

        <p className="mt-3 max-w-xl text-gray-300">
          Welcome to Classmate.AU. More student features are coming soon.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Post Doubt", href: "/doubts/create" },
            { title: "Notes", href: "/notes" },
            { title: "PYQs", href: "/pyqs" },
            { title: "Premium Notes", href: "/premium-request" },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                  Coming Soon
                </div>

                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm text-gray-400">
                  This feature will be available soon.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}