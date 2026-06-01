export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#07021a] p-10 text-white">
      <h1 className="text-5xl font-black">
        Admin Dashboard
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl bg-white/5 p-6">
          <h2 className="text-xl font-bold">
            Manage Notes
          </h2>
        </div>

        <div className="rounded-2xl bg-white/5 p-6">
          <h2 className="text-xl font-bold">
            Manage PYQs
          </h2>
        </div>

        <div className="rounded-2xl bg-white/5 p-6">
          <h2 className="text-xl font-bold">
            Manage Doubts
          </h2>
        </div>

        <div className="rounded-2xl bg-white/5 p-6">
          <h2 className="text-xl font-bold">
            Premium Requests
          </h2>
        </div>

      </div>
    </main>
  );
}