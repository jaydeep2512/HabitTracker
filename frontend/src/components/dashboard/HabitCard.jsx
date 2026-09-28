function HabitCard({ name, category, streak, completed }) {
  return (
    <div className="flex items-center justify-between rounded-3xl bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <button
          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
            completed
              ? "border-green-500 bg-green-500 text-white"
              : "border-slate-300 text-slate-400"
          }`}
        >
          {completed ? "✓" : ""}
        </button>

        <div>
          <h3 className="font-semibold text-slate-800">
            {name}
          </h3>

          <p className="text-sm text-slate-500">
            {category}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold text-orange-500">
          🔥 {streak} days
        </p>

        <p className="text-xs text-slate-400">
          Current streak
        </p>
      </div>
    </div>
  );
}

export default HabitCard;