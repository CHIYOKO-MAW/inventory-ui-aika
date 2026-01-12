export default function KpiCard({ title, value, color = "yellow" }) {
  return (
    <div className="card p-4 hover:shadow-md transition">
      <p className="text-sm text-slate-500">{title}</p>
      <p
        className={`text-2xl font-semibold text-${color}-500`}
      >
        {value}
      </p>
    </div>
  );
}
