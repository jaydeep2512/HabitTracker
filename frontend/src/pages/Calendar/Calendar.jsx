import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const today = new Date();
  const completedDays = [2, 4, 6, 8, 10, 12, 15, 18, 20, 22];

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="ml-64">
        <div className="mx-auto max-w-7xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Calendar
            </h1>
            <p className="mt-2 text-slate-500">
              Track your habit consistency day by day.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-8 flex items-center justify-between">
              <button
                onClick={previousMonth}
                className="rounded-xl border border-slate-200 px-4 py-2 text-slate-600 hover:bg-slate-50"
              >
                ←
              </button>

              <h2 className="text-2xl font-bold text-slate-800">
                {monthName} {year}
              </h2>

              <button
                onClick={nextMonth}
                className="rounded-xl border border-slate-200 px-4 py-2 text-slate-600 hover:bg-slate-50"
              >
                →
              </button>
            </div>

            <div className="mb-3 grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day) => (
                  <div
                    key={day}
                    className="py-3 text-center text-sm font-semibold text-slate-400"
                  >
                    {day}
                  </div>
                )
              )}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: firstDay }).map((_, index) => (
                <div key={`empty-${index}`} className="h-20" />
              ))}

              {Array.from({ length: daysInMonth }, (_, index) => {
                const day = index + 1;
                const isToday =
                  day === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear();

                const isCompleted = completedDays.includes(day);

                return (
                  <div
                    key={day}
                    className={`flex h-20 flex-col items-center justify-center rounded-xl border transition ${
                      isToday
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-slate-100 bg-slate-50"
                    }`}
                  >
                    <span
                      className={`font-semibold ${
                        isToday
                          ? "text-indigo-600"
                          : "text-slate-700"
                      }`}
                    >
                      {day}
                    </span>

                    {isCompleted && (
                      <span className="mt-2 flex h-2 w-2 rounded-full bg-green-500" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">
                Completed Days
              </p>
              <h2 className="mt-2 text-3xl font-bold text-green-600">
                10
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">
                Current Streak
              </p>
              <h2 className="mt-2 text-3xl font-bold text-orange-500">
                15
              </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">
                Monthly Progress
              </p>
              <h2 className="mt-2 text-3xl font-bold text-indigo-600">
                75%
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Calendar;