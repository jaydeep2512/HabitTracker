function ProgressOverview() {
  const progress = 75;

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-3">
      {/* Progress Circle */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">
          Today's Progress
        </h2>

        <div className="mt-6 flex items-center justify-center">
          <div
            className="relative flex h-40 w-40 items-center justify-center rounded-full"
            style={{
              background: `conic-gradient(#6366f1 ${progress}%, #e2e8f0 ${progress}% 100%)`,
            }}
          >
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white">
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-800">
                  {progress}%
                </p>

                <p className="text-sm text-slate-500">
                  Completed
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-slate-500">
          6 of 8 habits completed today
        </p>
      </div>

      {/* Streak */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Current Streak
        </p>

        <div className="mt-5">
          <p className="text-5xl font-bold text-orange-500">
            15
          </p>

          <p className="mt-2 text-slate-500">
            Consecutive days
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-orange-50 p-4">
          <p className="text-sm font-medium text-orange-700">
            🔥 You're on fire!
          </p>

          <p className="mt-1 text-xs text-orange-600">
            Keep your habits going to beat your best streak.
          </p>
        </div>
      </div>

      {/* Best Streak */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Best Streak
        </p>

        <p className="mt-5 text-5xl font-bold text-indigo-600">
          42
        </p>

        <p className="mt-2 text-slate-500">
          Your longest streak
        </p>

        <div className="mt-8">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">
              Current
            </span>

            <span className="font-medium text-slate-700">
              15 / 42 days
            </span>
          </div>

          <div className="mt-2 h-2 rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-indigo-600"
              style={{ width: "36%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressOverview;