import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";

function Habits() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Workout",
      category: "Fitness",
      description: "30 minutes of exercise",
      completed: true,
      streak: 15,
      icon: "🏃",
    },
    {
      id: 2,
      name: "Read Book",
      category: "Learning",
      description: "Read for at least 20 minutes",
      completed: false,
      streak: 8,
      icon: "📚",
    },
    {
      id: 3,
      name: "Meditation",
      category: "Mindfulness",
      description: "10 minutes of meditation",
      completed: true,
      streak: 2,
      icon: "🧘",
    },
    {
      id: 4,
      name: "Drink Water",
      category: "Health",
      description: "Drink enough water throughout the day",
      completed: false,
      streak: 10,
      icon: "💧",
    },
  ]);

  const [newHabit, setNewHabit] = useState("");
  const [category, setCategory] = useState("Health");

  const addHabit = () => {
    if (!newHabit.trim()) return;

    setHabits([
      ...habits,
      {
        id: Date.now(),
        name: newHabit,
        category,
        description: "Build this habit consistently",
        completed: false,
        streak: 0,
        icon: "⭐",
      },
    ]);

    setNewHabit("");
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="ml-64">
        <div className="mx-auto max-w-7xl p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                My Habits
              </h1>
              <p className="mt-2 text-slate-500">
                Create and manage your daily habits.
              </p>
            </div>

            <button
              onClick={() =>
                document.getElementById("habit-input")?.focus()
              }
              className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              + New Habit
            </button>
          </div>

          <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-slate-800">
              Add New Habit
            </h2>

            <div className="grid gap-4 md:grid-cols-[1fr_200px_auto]">
              <input
                id="habit-input"
                type="text"
                placeholder="Enter habit name"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-indigo-500 focus:bg-white"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-indigo-500"
              >
                <option>Health</option>
                <option>Fitness</option>
                <option>Learning</option>
                <option>Mindfulness</option>
                <option>Productivity</option>
              </select>

              <button
                onClick={addHabit}
                className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
              >
                Add Habit
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {habits.map((habit) => (
              <div
                key={habit.id}
                className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                    {habit.icon}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3
                        className={`font-semibold ${
                          habit.completed
                            ? "text-slate-400 line-through"
                            : "text-slate-800"
                        }`}
                      >
                        {habit.name}
                      </h3>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                        {habit.category}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      {habit.description}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-5">
                  <span className="font-medium text-orange-500">
                    🔥 {habit.streak} days
                  </span>

                  <button
                    onClick={() => toggleHabit(habit.id)}
                    className={`flex h-11 w-11 items-center justify-center rounded-full font-bold transition ${
                      habit.completed
                        ? "bg-green-500 text-white"
                        : "border-2 border-slate-300 bg-white text-slate-400 hover:border-indigo-400"
                    }`}
                  >
                    {habit.completed ? "✓" : ""}
                  </button>

                  <button
                    onClick={() => deleteHabit(habit.id)}
                    className="text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Habits;