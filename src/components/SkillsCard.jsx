export default function SkillsCard({ skills }) {
  return (
    <div className="glass-card p-4 sm:p-5 space-y-3">
      <p className="section-title">Skills</p>
      <h3 className="text-sm font-semibold text-slate-100">
        Strengths inferred from GitHub activity
      </h3>

      <div className="space-y-2">
        {skills.map((s, i) => (
          <div
            key={`${s.skill}-${i}`}
            className="flex items-center justify-between rounded-xl bg-black/40 border border-white/5 px-3 py-2 text-xs"
          >
            <div className="flex flex-col">
              <span className="font-medium text-slate-100">{s.skill}</span>
            </div>
            <span
              className={
                "px-2 py-1 rounded-full text-[10px] uppercase tracking-wide " +
                (s.confidence === "High"
                  ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                  : s.confidence === "Med"
                  ? "bg-sky-500/10 text-sky-300 border border-sky-500/40"
                  : "bg-slate-500/10 text-slate-300 border border-slate-500/40")
              }
            >
              {s.confidence} confidence
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
