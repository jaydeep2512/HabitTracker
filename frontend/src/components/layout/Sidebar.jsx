import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: "▦" },
  { name: "My Habits", path: "/habits", icon: "☷" },
  { name: "Calendar", path: "/calendar", icon: "□" },
  { name: "Analytics", path: "/analytics", icon: "▥" },
  { name: "Achievements", path: "/achievements", icon: "♛" },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-20 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-6 py-6">
        <h1 className="text-2xl font-bold text-indigo-600">
          Habit Tracker
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Build better habits.
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-200 p-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `mb-3 flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
              isActive
                ? "bg-slate-100 text-indigo-600"
                : "text-slate-600 hover:bg-slate-100"
            }`
          }
        >
          <span className="text-xl">⚙</span>
          Settings
        </NavLink>

        <NavLink
          to="/profile"
          className="flex w-full items-center gap-3 border-t border-slate-100 pt-4 text-left"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
            J
          </div>

          <div className="min-w-0 flex-1">
            <p className="font-semibold text-slate-800">
              Jaydeep
            </p>

            <p className="truncate text-xs text-slate-400">
              Habit Tracker User
            </p>
          </div>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
