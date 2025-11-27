import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { analyzeUser } from "../lib/api";
import LoadingSpinner from "../components/loadingspinner";
import ErrorBox from "../components/ErrorBox";
import UserOverview from "../components/UserOverview";
import WorkabilityScoreCard from "../components/WorkabilityScoreCard";
import SkillsCard from "../components/SkillsCard";
import EvidenceCard from "../components/EvidenceCard";
import ExperienceCard from "../components/ExperienceCard";
import WorkStyleCard from "../components/WorkStyleCard";
import RolesCard from "../components/RolesCard";

export default function Results() {
  const [, params] = useRoute("/results/:username");
  const username = params?.username || "";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    analyzeUser(username).then((res) => {
      if (ignore) return;
      setData(res);
      setLoading(false);
    });
    return () => {
      ignore = true;
    };
  }, [username]);

  if (loading) return <LoadingSpinner />;

  if (!data || data.error) {
    return (
      <div className="space-y-4">
        <ErrorBox message={data?.error || "Failed to load analysis."} />
        <Link
          href="/"
          className="inline-flex text-xs text-sky-400 hover:text-sky-300 transition"
        >
          ← Back to analysis input
        </Link>
      </div>
    );
  }

  const { signals, profile, isMock, cached } = data;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="section-title mb-1">Analysis</p>
          <h1 className="text-2xl sm:text-3xl font-semibold">
            @<span className="gradient-text">{username}</span>
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
          {cached && (
            <span className="badge border-sky-500/50 bg-sky-500/10">
              Cached in last 6 hours
            </span>
          )}
          {isMock ? (
            <span className="badge border-amber-500/50 bg-amber-500/10">
              Mock mode · OpenAI key not configured
            </span>
          ) : (
            <span className="badge border-emerald-500/50 bg-emerald-500/10">
              AI-generated profile
            </span>
          )}
        </div>
      </div>

      {/* Overview and score */}
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <UserOverview username={username} signals={signals} />
        <WorkabilityScoreCard score={profile.workability_score} />
      </div>

      {/* Mid grid: skills + experience + roles */}
      <div className="grid gap-5 lg:grid-cols-3">
        <SkillsCard skills={profile.skills} />
        <ExperienceCard experience={profile.experience_level} />
        <RolesCard roles={profile.role_fits} />
      </div>

      {/* Work style + evidence */}
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.2fr)]">
        <WorkStyleCard items={profile.work_style} />
        <EvidenceCard items={profile.real_work_evidence} signals={signals} />
      </div>
    </div>
  );
}
