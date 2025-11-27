// CandidateTable.jsx
import CandidateRow from "./CandidateRow";

export default function CandidateTable({ results }) {
  return (
    <div className="glass-card p-6 overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-slate-400">
          <tr>
            <th className="p-2 text-left">Username</th>
            <th className="p-2">Score</th>
            <th className="p-2">Fit</th>
            <th className="p-2">Highlights</th>
            <th className="p-2">Risks</th>
          </tr>
        </thead>
        <tbody className="text-slate-200">
          {results.map((r) => (
            <CandidateRow key={r._id || r.username} r={r} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
