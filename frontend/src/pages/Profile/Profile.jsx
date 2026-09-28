import Sidebar from "../../components/layout/Sidebar";

function Profile() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="ml-64">
        <div className="mx-auto max-w-7xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Profile
            </h1>
            <p className="mt-2 text-slate-500">
              Manage your personal information and habit statistics.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-600 text-3xl font-bold text-white">
                  J
                </div>

                <h2 className="mt-4 text-xl font-semibold text-slate-800">
                  Jaydeep
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Habit Tracker User
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
              <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Personal Information
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-400">Full Name</p>
                  <p className="mt-1 font-medium text-slate-700">
                    Jaydeep
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-1 font-medium text-slate-700">
                    user@example.com
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Member Since</p>
                  <p className="mt-1 font-medium text-slate-700">
                    August 2026
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Total Habits</p>
                  <p className="mt-1 font-medium text-slate-700">
                    8
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-sm text-slate-500">Current Habit Streak</p>
              <h2 className="mt-2 text-3xl font-bold text-green-500">
                15
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-sm text-slate-500">Best Streak</p>
              <h2 className="mt-2 text-3xl font-bold text-green-500">
                42
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-sm text-slate-500">Achievements</p>
              <h2 className="mt-2 text-3xl font-bold text-green-600">
                3
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;