export default function Home() {
  return (
    <main className="min-h-screen bg-[#07021a] text-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-300">
            Aliah University Student Community
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Learn Together. Teach Together. Grow Together.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
            Classmate.AU is a modern platform where students can ask doubts,
            share notes, upload PYQs, showcase skills, connect with teachers,
            and grow as a community.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-purple-600 px-8 py-3 font-semibold text-white transition hover:bg-purple-700">
              Get Started
            </button>

            <button className="rounded-full border border-white/20 px-8 py-3 font-semibold text-white transition hover:bg-white/10">
              Explore Features
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}