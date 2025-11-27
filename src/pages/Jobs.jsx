import { useEffect, useState } from "react";
import { Link } from "wouter";
import { listJobs, deleteJob } from "../lib/api";
import JobCard from "../components/JobCard";
import LoadingSpinner from "../components/loadingspinner";
import ErrorBox from "../components/ErrorBox";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [state, setState] = useState("loading");

  useEffect(() => {
    listJobs()
      .then((data) => {
        setJobs(data);
        setState("done");
      })
      .catch(() => setState("error"));
  }, []);

  async function handleDelete(id) {
    if (!confirm("Delete this job permanently?")) return;

    try {
      await deleteJob(id);
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (err) {
      alert("Failed to delete the job.");
    }
  }

  if (state === "loading") return <LoadingSpinner />;
  if (state === "error") return <ErrorBox message="Failed to load jobs." />;

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold gradient-text">MatchRank Jobs</h1>

        <Link
          href="/jobs/create"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:brightness-110 text-sm font-medium shadow-lg shadow-sky-900/20 transition-all"
        >
          + New Job
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {jobs.length === 0 ? (
          <p className="text-slate-400 text-sm">No jobs posted yet.</p>
        ) : (
          jobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
