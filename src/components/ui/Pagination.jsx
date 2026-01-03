export default function Pagination({ page, total, onChange }) {
  return (
    <div className="flex justify-end gap-2 mt-4">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-1 border rounded text-sm disabled:opacity-50"
      >
        Prev
      </button>
      <span className="text-sm px-2">Page {page}</span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === total}
        className="px-3 py-1 border rounded text-sm disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}
