export default function CandidateRow({ r }) {
  return (
    <tr className="border-t border-white/5">
      <td className="p-2 font-medium">@{r.username}</td>
      <td className="p-2 text-sky-400 font-semibold">{r.score}</td>
      <td className="p-2 text-indigo-300">{r.fit}</td>
      <td className="p-2 text-emerald-300">
        {r.highlights?.slice(0, 2).join(", ") || "—"}
      </td>
      <td className="p-2 text-rose-300">
        {r.risks?.slice(0, 2).join(", ") || "—"}
      </td>
    </tr>
  );
}
