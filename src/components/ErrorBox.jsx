export default function ErrorBox({ message }) {
  return (
    <div className="glass-card border-rose-500/40 bg-rose-500/10 px-4 py-3 flex items-start gap-3">
      <div className="mt-1 h-6 w-6 flex items-center justify-center rounded-full border border-rose-400 text-rose-200 text-xs">
        !
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-rose-100">
          Something went wrong
        </p>
        <p className="text-xs text-rose-200/80">{message}</p>
        <p className="text-[11px] text-rose-200/60">
          If this keeps happening, check your GitHub token / OpenAI key in the
          backend or try a different username.
        </p>
      </div>
    </div>
  );
}
