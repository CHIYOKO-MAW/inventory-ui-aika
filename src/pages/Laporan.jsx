import { useState } from "react"
import Table from "../components/ui/Table"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"
import LaporanFilter from "../components/forms/LaporanFilter"
import ExportDialog from "../components/ui/ExportDialog"

export default function Laporan() {
  const [filter, setFilter] = useState({ from: "", to: "" })
  const [openExport, setOpenExport] = useState(false)

  const data = [
    ["Jan 2026", "120", "Rp 12.000.000"],
    ["Feb 2026", "90", "Rp 9.500.000"],
  ]

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Laporan</h1>
        <Button onClick={() => setOpenExport(true)}>
          Export Laporan
        </Button>
      </div>

      <LaporanFilter filter={filter} setFilter={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Transaksi" value="210" />
        <Card title="Total Barang Keluar" value="3.200" />
        <Card title="Total Nilai" value="Rp 21.500.000" />
      </div>

      <Table
        headers={["Periode", "Jumlah Transaksi", "Total Nilai"]}
        data={data}
      />

      {openExport && (
        <ExportDialog onClose={() => setOpenExport(false)} />
      )}
    </section>
  )
}
