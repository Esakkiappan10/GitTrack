export default function RolesCard({ roles }) {
  return (
    <div className="glass-card p-4 sm:p-5 space-y-3">
      <p className="section-title">Top role fits</p>
      <h3 className="text-sm font-semibold text-slate-100">
        Where this developer is likely to thrive
      </h3>

      <ul className="space-y-2 text-xs text-slate-200">
        {roles.map((role, i) => (
          <li
            key={`${role}-${i}`}
            className="rounded-xl bg-black/40 border border-white/5 px-3 py-2"
          >
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
}
