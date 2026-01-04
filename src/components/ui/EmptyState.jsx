export default function EmptyState({ title, description }) {
  return (
    <div className="card p-10 text-center">
      <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-xl">
        📦
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1">{description}</p>
    </div>
  );
}
