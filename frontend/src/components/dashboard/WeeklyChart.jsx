function WeeklyChart() {
  const data = [
    { day: "Mon", value: 80 },
    { day: "Tue", value: 65 },
    { day: "Wed", value: 90 },
    { day: "Thu", value: 50 },
    { day: "Fri", value: 75 },
    { day: "Sat", value: 95 },
    { day: "Sun", value: 70 },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800">
          Weekly Activity
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your habit completion this week
        </p>
      </div>

      <div className="flex h-64 items-end justify-between gap-4">
        {data.map((item) => (
          <div
            key={item.day}
            className="flex h-full flex-1 flex-col items-center justify-end gap-3"
          >
            <div className="flex h-full w-full items-end">
              <div
                className="w-full rounded-t-xl bg-indigo-500 transition hover:bg-indigo-600"
                style={{ height: `${item.value}%` }}
              />
            </div>

            <span className="text-xs font-medium text-slate-500">
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyChart;