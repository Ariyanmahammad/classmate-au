export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050014] px-6 py-14 text-white">
      {/* Floating glow backgrounds */}
      <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 animate-pulse rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 animate-pulse rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />

      {/* Floating small circles */}
      <div className="absolute left-[12%] top-8 h-3 w-3 animate-bounce rounded-full bg-purple-400/60" />
      <div className="absolute right-[18%] top-14 h-2 w-2 animate-ping rounded-full bg-blue-400/60" />
      <div className="absolute bottom-10 left-[45%] h-2.5 w-2.5 animate-bounce rounded-full bg-pink-400/60" />

      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-purple-950/30 backdrop-blur-md">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Classmate
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  .AU
                </span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                Built for Aliah University students to learn, share, and grow
                together.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10">
                <p className="font-semibold text-white">PYQs</p>
                <p className="mt-1 text-xs text-gray-400">Previous papers</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10">
                <p className="font-semibold text-white">Notes</p>
                <p className="mt-1 text-xs text-gray-400">Study material</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500/10">
                <p className="font-semibold text-white">Community</p>
                <p className="mt-1 text-xs text-gray-400">Grow together</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500">© 2026 Classmate.AU</p>

            <div className="flex flex-wrap gap-3 text-sm text-gray-400">
              <span className="rounded-full border border-white/10 px-4 py-2">
                Made with ❤️ for AU students
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Learn • Share • Connect
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}