export default function EvidenceCard({ items }) {
  return (
    <div className="glass-card p-4 sm:p-5 space-y-3">
      <p className="section-title">Real work evidence</p>
      <h3 className="text-sm font-semibold text-slate-100">
        Concrete signals behind this assessment
      </h3>

      <ul className="space-y-2 text-xs text-slate-200">
        {items.map((line, i) => (
          <li
            key={i}
            className="flex gap-2 rounded-xl bg-black/40 border border-white/5 px-3 py-2"
          >
            <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
