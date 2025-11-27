export default function LoadingSpinner() {
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-2 border-slate-700" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-sky-400 animate-spin" />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-slate-200">
          Analyzing GitHub signals…
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Fetching repositories, languages, commit patterns and collaboration hints.
        </p>
      </div>
    </div>
  );
}
