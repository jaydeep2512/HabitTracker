import Sidebar from "../../components/layout/Sidebar";

function Achievements() {
  const achievements = [
    {
      title: "First Step",
      description: "Complete your first habit",
      icon: "🌱",
      unlocked: true,
    },
    {
      title: "7 Day Streak",
      description: "Maintain a habit for 7 days",
      icon: "🔥",
      unlocked: true,
    },
    {
      title: "30 Day Streak",
      description: "Maintain a habit for 30 days",
      icon: "🏆",
      unlocked: true,
    },
    {
      title: "Consistency King",
      description: "Reach 90% weekly completion",
      icon: "👑",
      unlocked: false,
    },
    {
      title: "Habit Master",
      description: "Complete 100 habit tasks",
      icon: "⭐",
      unlocked: false,
    },
    {
      title: "Perfect Week",
      description: "Complete all habits for 7 days",
      icon: "💎",
      unlocked: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="ml-64">
        <div className="mx-auto max-w-7xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Achievements
            </h1>
            <p className="mt-2 text-slate-500">
              Keep building habits and unlock new achievements.
            </p>
          </div>

          <div className="mb-8 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Your Progress
            </p>

            <div className="mt-3 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  3 of 6 Achievements Unlocked
                </h2>
                <p className="mt-1 text-slate-500">
                  Keep going to unlock more rewards.
                </p>
              </div>

              <div className="text-4xl">🏆</div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className={`rounded-2xl bg-white p-6 shadow-sm ${
                  !achievement.unlocked ? "opacity-60" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${
                      achievement.unlocked
                        ? "bg-indigo-50"
                        : "bg-slate-100"
                    }`}
                  >
                    {achievement.icon}
                  </div>

                  {achievement.unlocked && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                      Unlocked
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-800">
                  {achievement.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Achievements;