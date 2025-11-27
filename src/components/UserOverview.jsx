export default function UserOverview({ username, signals }) {
  const languages = signals.primary_languages || [];
  const topRepos = signals.top_repos || [];

  const daysOnGithub =
    signals.account_age_days != null ? signals.account_age_days : null;
  const years =
    daysOnGithub != null ? (daysOnGithub / 365).toFixed(1) : null;

  return (
    <div className="glass-card p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="section-title mb-1">GitHub footprint</p>
          <h2 className="text-lg font-semibold">
            Developer summary for @{username}
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
          <span className="badge bg-white/5 border-white/10">
            {signals.repo_count} public repos
          </span>
          <span className="badge bg-white/5 border-white/10">
            {signals.stars_total} stars · {signals.forks_total} forks
          </span>
          {years && (
            <span className="badge bg-white/5 border-white/10">
              {years} years on GitHub
            </span>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        {/* Left: languages + repos */}
        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium text-slate-400 mb-2">
              Primary languages
            </p>
            {languages.length === 0 ? (
              <p className="text-xs text-slate-500">
                No language breakdown available yet.
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="badge bg-sky-500/5 border-sky-500/30"
                  >
                    {lang.name}
                    <span className="text-slate-400">
                      {" "}
                      · {lang.percentage.toFixed(1)}%
                    </span>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400 mb-2">
              Top repositories (by stars)
            </p>
            {topRepos.length === 0 ? (
              <p className="text-xs text-slate-500">
                No prominent repositories found yet.
              </p>
            ) : (
              <div className="space-y-2">
                {topRepos.map((repo) => (
                  <div
                    key={repo.name}
                    className="flex items-center justify-between rounded-xl bg-black/40 border border-white/5 px-3 py-2 text-xs"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-200">
                        {repo.name}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {repo.language || "Unknown"} ·{" "}
                        {repo.stars} ★
                      </span>
                    </div>
                    {repo.recent_activity && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
                        Active
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: quick stats */}
        <div className="rounded-2xl bg-black/40 border border-white/5 p-4 space-y-3">
          <p className="text-xs font-medium text-slate-400">
            Activity snapshot (last 30 days)
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-[11px] text-slate-400">Commits</p>
              <p className="text-lg font-semibold">
                {signals.recent_commit_velocity}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                meaningful pushes in last month
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-[11px] text-slate-400">Active days</p>
              <p className="text-lg font-semibold">
                {signals.active_days}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                days with activity
              </p>
            </div>
          </div>

          <div className="dashed-divider my-1" />

          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-400">Collaboration signal</span>
            <span
              className={
                signals.collaboration_hint
                  ? "text-emerald-300"
                  : "text-slate-400"
              }
            >
              {signals.collaboration_hint ? "Multi-contributor repos" : "Mostly solo work"}
            </span>
          </div>

          {signals.project_types && signals.project_types.length > 0 && (
            <div className="text-[11px] text-slate-400">
              <span className="mr-1">Detected domains:</span>
              {signals.project_types.map((t) => (
                <span
                  key={t}
                  className="inline-flex px-2 py-0.5 rounded-full bg-white/5 border border-white/10 mr-1 mt-1"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
