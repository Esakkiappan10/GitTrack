export default function ExperienceCard({ experience }) {
  return (
    <div className="glass-card p-4 sm:p-5 space-y-3">
      <p className="section-title">Experience level</p>
      <h3 className="text-sm font-semibold text-slate-100 mb-1">
        {experience.level || "Unknown"}
      </h3>
      <p className="text-xs text-slate-200">
        {experience.rationale || "No rationale available."}
      </p>
    </div>
  );
}
