import { Link } from "wouter";

export default function JobCard({ job, onDelete }) {
  return (
    <div className="glass-card p-5 transition hover:scale-[1.01]">

      <Link href={`/jobs/${job._id}`} className="block cursor-pointer">
        <h2 className="text-lg font-semibold mb-1">{job.title}</h2>
        <p className="text-sm text-slate-400">{job.location}</p>
        <p className="text-xs mt-2 text-slate-500">
          {job.stackMust.slice(0, 4).join(", ")}...
        </p>
      </Link>

      <div className="flex justify-end pt-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onDelete(job._id);
          }}
          className="text-xs text-red-400 hover:text-red-300 transition"
        >
          Delete
        </button>
      </div>

    </div>
  );
}
