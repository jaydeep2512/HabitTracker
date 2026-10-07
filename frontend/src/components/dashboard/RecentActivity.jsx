function RecentActivity() {
  const activities = [
    {
      title: "Workout completed",
      time: "Today, 7:30 AM",
    },
    {
      title: "Reading habit completed",
      time: "Today, 9:15 AM",
    },
    {
      title: "Meditation completed",
      time: "Yesterday, 8:00 PM",
    },
    {
      title: "Started a 15-day streak",
      time: "Yesterday",
    },
  ];

  
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-800">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              ✓
            </div>

            <div>
              <p className="text-sm font-medium text-slate-700">
                {activity.title}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;