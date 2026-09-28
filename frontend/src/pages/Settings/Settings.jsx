import Sidebar from "../../components/layout/Sidebar";

function Settings() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="ml-64">
        <div className="mx-auto max-w-7xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Settings
            </h1>
            <p className="mt-2 text-slate-500">
              Manage your account and application preferences.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800">
                Account Settings
              </h2>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">
                    Name
                  </label>
                  <input
                    type="text"
                    value="Jaydeep"
                    readOnly
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-600">
                    Email
                  </label>
                  <input
                    type="email"
                    value="user@example.com"
                    readOnly
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800">
                Preferences
              </h2>

              <div className="mt-5 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-700">
                      Daily Reminders
                    </p>
                    <p className="text-sm text-slate-400">
                      Get reminded about your habits.
                    </p>
                  </div>

                  <button className="h-6 w-11 rounded-full bg-indigo-600">
                    <div className="ml-6 h-4 w-4 rounded-full bg-white" />
                  </button>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                  <div>
                    <p className="font-medium text-slate-700">
                      Weekly Summary
                    </p>
                    <p className="text-sm text-slate-400">
                      Review your weekly habit progress.
                    </p>
                  </div>

                  <button className="h-6 w-11 rounded-full bg-indigo-600">
                    <div className="ml-6 h-4 w-4 rounded-full bg-white" />
                  </button>
                </div>

              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800">
                Danger Zone
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                These actions cannot be undone.
              </p>

              <button className="mt-5 rounded-xl border border-red-200 px-5 py-3 font-medium text-red-500 hover:bg-red-50">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;