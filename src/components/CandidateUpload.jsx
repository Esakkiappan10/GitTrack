import { useState } from "react";
import { Github } from "lucide-react";

export default function CandidateUpload({ onAnalyze, loading }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const usernames = text
      .split("\n")
      .map((v) => v.trim())
      .filter(Boolean);

    if (usernames.length === 0) {
      setError("Please enter at least one GitHub username.");
      return;
    }

    setError("");
    onAnalyze(usernames);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card p-6 space-y-5 animate-fade-in"
    >
      {/* Title */}
      <p className="section-title">Analyze Candidates</p>

      {/* Example username chips */}
      <div className="flex flex-wrap gap-2 text-[12px]">
        {["octocat", "vercel", "jdoe"].map((u) => (
          <button
            key={u}
            type="button"
            onClick={() => setText((prev) => (prev ? prev + `\n${u}` : u))}
            className="badge cursor-pointer hover:bg-white/10 transition"
          >
            <Github size={12} />
            {u}
          </button>
        ))}
      </div>

      {/* Textarea */}
      <textarea
        className="w-full p-3 bg-black/40 border border-white/10 rounded-xl text-sm text-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 outline-none transition"
        placeholder="Enter GitHub usernames, one per line"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
      />

      {/* Error message */}
      {error && (
        <p className="text-xs text-rose-400 font-medium">{error}</p>
      )}

      {/* Submit button */}
      <button
        disabled={loading}
        className={`w-full p-3 rounded-xl text-sm font-medium transition-all 
        ${
          loading
            ? "bg-slate-700 cursor-not-allowed opacity-60"
            : "bg-gradient-to-r from-indigo-500 to-sky-500 hover:brightness-110 active:scale-[0.98]"
        } shadow-[0_8px_25px_rgba(56,189,248,0.35)]`}
      >
        {loading ? "Analyzing…" : "Start Analysis"}
      </button>
    </form>
  );
}
