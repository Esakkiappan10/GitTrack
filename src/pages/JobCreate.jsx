import { useState } from "react";
import { useLocation } from "wouter";
import { createJob } from "../lib/api";
import JobForm from "../components/JobForm";
import ErrorBox from "../components/ErrorBox";

export default function JobCreate() {
  const [, navigate] = useLocation();
  const [error, setError] = useState("");

  async function handleSubmit(form) {
    try {
      const job = await createJob(form);
      navigate(`/jobs/${job._id}`);
    } catch (err) {
      setError("Failed to create job.");
    }
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold gradient-text">Create Job</h1>
      {error && <ErrorBox message={error} />}
      <JobForm onSubmit={handleSubmit} />
    </div>
  );
}
