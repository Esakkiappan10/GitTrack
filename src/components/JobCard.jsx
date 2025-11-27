import { Link } from "wouter";

export default function JobCard({ job }) {
  return (
    <Link href={`/jobs/${job._id}`}>
      <div className="glass-card p-5 cursor-pointer hover:scale-[1.01] transition">
        <h2 className="text-lg font-semibold mb-1">{job.title}</h2>
        <p className="text-sm text-slate-400">{job.location}</p>
        <p className="text-xs mt-2 text-slate-500">
          {job.stackMust.slice(0, 4).join(", ")}...
        </p>
      </div>
    </Link>
  );
}
