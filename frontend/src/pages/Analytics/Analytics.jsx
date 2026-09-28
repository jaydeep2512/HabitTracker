import Sidebar from "../../components/layout/Sidebar";

function Analytics() {
  const weeklyData = [60, 75, 45, 80, 65, 90, 75];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="ml-64">
        <div className="mx-auto max-w-7xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Analytics
            </h1>
            <p className="mt-2 text-slate-500">
              Understand your habit performance and consistency.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Completion Rate</p>
              <h2 className="mt-2 text-3xl font-bold text-indigo-600">
                75%
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Current Streak</p>
              <h2 className="mt-2 text-3xl font-bold text-orange-500">
                15
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Best Streak</p>
              <h2 className="mt-2 text-3xl font-bold text-green-600">
                42
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Completed</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-800">
                24
              </h2>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-slate-800">
              Weekly Performance
            </h2>

            <div className="flex h-72 items-end justify-between gap-4">
              {weeklyData.map((value, index) => (
                <div
                  key={days[index]}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                >
                  <div
                    className="w-full max-w-16 rounded-t-xl bg-indigo-500"
                    style={{ height: `${value}%` }}
                  />

                  <span className="text-sm text-slate-400">
                    {days[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-semibold text-slate-800">
                Habit Performance
              </h2>

              <div className="space-y-5">
                {[
                  ["Workout", "90%"],
                  ["Meditation", "80%"],
                  ["Drink Water", "75%"],
                  ["Read Book", "60%"],
                ].map(([name, value]) => (
                  <div key={name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-slate-700">
                        {name}
                      </span>
                      <span className="text-slate-500">{value}</span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-100">
                      <div
                        className="h-2 rounded-full bg-indigo-500"
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-semibold text-slate-800">
                Consistency
              </h2>

              <div className="flex h-48 items-center justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-[14px] border-indigo-500">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-slate-800">
                      75%
                    </p>
                    <p className="text-sm text-slate-400">
                      Consistency
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

export default Analytics;
