export default function WorkabilityScoreCard({ score }) {
  const value = score?.score ?? 0;
  const normalized = Math.max(0, Math.min(100, value));

  return (
    <div className="glass-card p-5 sm:p-6 flex flex-col md:flex-row items-center gap-5">
      <div className="relative">
        <div className="h-28 w-28 rounded-full bg-[#020617] flex items-center justify-center border border-white/10">
          <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-emerald-500/10" />
          <div className="relative z-10 text-center">
            <p className="text-xs text-slate-400">Score</p>
            <p className="text-3xl font-semibold">{normalized}</p>
            <p className="text-[10px] text-slate-500">/ 100</p>
          </div>
        </div>
        {/* Arc representation using background conic-gradient */}
        <div
          className="absolute inset-[-6px] rounded-full"
          style={{
            background: `conic-gradient(from 140deg, rgba(56,189,248,0.9) ${
              normalized * 0.9
            }%, transparent ${normalized * 0.9}%)`,
            opacity: 0.9
          }}
        />
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <p className="section-title">Workability score</p>
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
        <p className="text-sm text-slate-200">
          {score?.rationale || "Score rationale unavailable."}
        </p>
        <p className="text-[11px] text-slate-500">
          This score blends repo quality, language depth, activity velocity, and
          collaboration signals into a single hiring-friendly metric.
        </p>
      </div>
    </div>
  );
}
