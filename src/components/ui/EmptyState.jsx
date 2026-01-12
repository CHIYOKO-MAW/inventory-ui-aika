export default function EmptyState({
  title = "Belum ada data",
  description = "Silakan tambahkan data untuk memulai.",
  actionLabel,
  onAction,
}) {
  return (
    <div className="card p-10 flex flex-col items-center justify-center text-center">
      {/* ICON */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* TEXT */}
      <h3 className="text-lg font-semibold text-slate-800">
        {title}
      </h3>
      <p className="mt-1 text-sm text-slate-500 max-w-sm">
        {description}
      </p>

      {/* CTA */}
      {actionLabel && (
        <button
          onClick={onAction}
          className="mt-6 btn-primary"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
