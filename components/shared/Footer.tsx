export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050014] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold">
          Classmate<span className="text-purple-400">.AU</span>
        </h2>

        <p className="text-sm text-gray-400">
          Built for Aliah University students to learn, share, and grow together.
        </p>

        <p className="text-sm text-gray-500">
          © 2026 Classmate.AU
        </p>
      </div>
    </footer>
  );
}