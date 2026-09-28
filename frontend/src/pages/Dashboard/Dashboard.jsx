import Sidebar from "../../components/layout/Sidebar";

function Dashboard() {
  const habits = [
    {
      name: "Workout",
      category: "Health & Fitness",
      streak: 15,
      completed: true,
      icon: "🏃",
    },
    {
      name: "Read Book",
      category: "Learning",
      streak: 8,
      completed: false,
      icon: "📚",
    },
    {
      name: "Meditation",
      category: "Mindfulness",
      streak: 2,
      completed: true,
      icon: "🧘",
    },
    {
      name: "Drink Water",
      category: "Health",
      streak: 10,
      completed: false,
      icon: "💧",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="ml-64">
        <div className="mx-auto max-w-7xl p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Hey Jaydeep 👋
              </h1>
              <p className="mt-2 text-slate-500">Here's your habit progress for today.</p>
            </div>

            <button className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-indigo-700">
              + New Habit
            </button>
          </div>

          <div className="mb-8 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Good morning, Jaydeep
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-800">
              Small steps every day create big results.
            </h2>
            <p className="mt-1 text-slate-500">
              Stay consistent and keep building better habits.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Total Habits</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                8
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Active Streaks</p>
              <h2 className="mt-2 text-3xl font-bold text-orange-500">
                6
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Best Streak</p>
              <h2 className="mt-2 text-3xl font-bold text-indigo-600">
                42
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">This Week</p>
              <h2 className="mt-2 text-3xl font-bold text-green-600">
                75%
              </h2>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Today's Habits
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  2 of 4 habits completed
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-indigo-500 font-bold text-indigo-600">
                50%
              </div>
            </div>

            <div className="space-y-3">
              {habits.map((habit) => (
                <div
                  key={habit.name}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                      {habit.icon}
                    </div>

                    <div className="min-w-0">
                      <h3
                        className={`font-semibold ${
                          habit.completed
                            ? "text-slate-400 line-through"
                            : "text-slate-800"
                        }`}
                      >
                        {habit.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {habit.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-5">
                    <span className="text-sm font-medium text-orange-500">
                      🔥 {habit.streak}
                    </span>

                    <button className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                        habit.completed
                          ? "bg-green-500 text-white"
                          : "border-2 border-slate-300 bg-white text-slate-400"
                      }`}
                    >
                      {habit.completed ? "✓" : ""}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Weekly Progress
              </h2>

              <div className="flex h-64 items-end justify-between gap-3">
                {[60, 40, 70, 55, 85, 95, 75].map((value, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 items-end"
                  >
                    <div
                      className="w-full rounded-t-xl bg-indigo-500"
                      style={{ height: `${value}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-3 flex justify-between text-sm text-slate-400">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Recent Activity
              </h2>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">
                      Workout completed
                    </p>
                    <p className="text-sm text-slate-400">
                      Today, 7:30 AM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">
                      Meditation completed
                    </p>
                    <p className="text-sm text-slate-400">
                      Today, 8:15 AM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    🔥
                  </div>
                  <div>
                    <p className="font-medium text-slate-700">
                      Started a 15-day streak
                    </p>
                    <p className="text-sm text-slate-400">
                      Yesterday
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;