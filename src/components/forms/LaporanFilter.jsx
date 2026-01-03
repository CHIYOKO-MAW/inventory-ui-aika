import Button from "../ui/Button"

export default function LaporanFilter({ filter, setFilter }) {
  return (
    <div className="flex gap-4 items-end">
      <div>
        <label className="text-sm font-medium">Dari Tanggal</label>
        <input
          type="date"
          value={filter.from}
          onChange={(e) => setFilter({ ...filter, from: e.target.value })}
          className="border rounded px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Sampai Tanggal</label>
        <input
          type="date"
          value={filter.to}
          onChange={(e) => setFilter({ ...filter, to: e.target.value })}
          className="border rounded px-3 py-2 text-sm"
        />
      </div>

      <Button variant="secondary">Terapkan</Button>
    </div>
  )
}
