export default function TransactionCard({ data }) {
  return (
    <div className="bg-panel dark:bg-darkPanel border border-border dark:border-darkBorder rounded-xl p-4 shadow-soft">
      <p className="font-medium">{data.barang}</p>
      <p className="text-sm text-muted">
        Kode: {data.kode}
      </p>

      <div className="flex justify-between mt-3 text-sm">
        <span>Jumlah</span>
        <span className="font-medium">{data.jumlah}</span>
      </div>

      <p className="text-xs text-muted mt-2">
        {data.tanggal}
      </p>
    </div>
  )
}
