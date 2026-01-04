export default function StatCard({ title, value, highlight }) {
  return (
    <div
      className={`rounded-xl border p-4 bg-white ${
        highlight ? "border-yellow-300 bg-yellow-50" : ""
      }`}
    >
      <p className="text-xs text-slate-500">{title}</p>
      <h2 className="text-2xl font-semibold text-slate-800 mt-1">
        {value}
      </h2>
    </div>
  );
}
