import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050314] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h1 className="mb-4 text-5xl font-bold">
            Contact <span className="text-purple-400">Classmate.AU</span>
          </h1>

          <p className="mb-10 text-gray-400">
            Have questions, suggestions, feature requests, or want to
            contribute notes and PYQs? Feel free to reach out.
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-purple-400">
                Email
              </h3>

              <a
                href="mailto:hirewiseai2026@gmail.com"
                className="mt-2 block text-xl text-white hover:text-purple-300"
              >
                hirewiseai2026@gmail.com
              </a>
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-purple-400">
                About
              </h3>

              <p className="mt-2 text-gray-300">
                Classmate.AU is a student community platform providing
                Notes, PYQs, Doubt Solving, Resource Sharing and
                Academic Collaboration.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="rounded-full bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}