export default function WorkStyleCard({ items }) {
  return (
    <div className="glass-card p-4 sm:p-5 space-y-3">
      <p className="section-title">Work style</p>
      <h3 className="text-sm font-semibold text-slate-100">
        How this developer tends to operate
      </h3>

      <div className="space-y-2">
        {items.map((w, i) => (
          <div
            key={`${w.trait}-${i}`}
            className="rounded-xl bg-black/40 border border-white/5 px-3 py-2"
          >
            <p className="text-xs font-semibold text-slate-100">
              {w.trait}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              {w.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
