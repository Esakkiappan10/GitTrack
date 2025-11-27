import { useRoute, Link } from "wouter";
import { useEffect, useState } from "react";
import CandidateTable from "../components/CandidateTable";

export default function JobResults() {
  const [, params] = useRoute("/jobs/:id/results");
  const jobId = params.id;

  const [results, setResults] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("discoverResults:" + jobId);
    if (saved) {
      setResults(JSON.parse(saved));
    }
  }, [jobId]);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Ranked Candidates</h1>
        <Link href={`/jobs/${jobId}`} className="text-sky-400 text-sm">
          ← Back to job
        </Link>
      </div>

      {results.length === 0 ? (
        <p className="text-slate-400 text-sm">No results available yet.</p>
      ) : (
        <CandidateTable results={results} />
      )}
    </div>
  );
}
