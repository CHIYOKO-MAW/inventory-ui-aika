import { useState } from "react"
import Table from "../components/ui/Table"
import Button from "../components/ui/Button"
import Badge from "../components/ui/Badge"
import SearchInput from "../components/ui/SearchInput"
import Pagination from "../components/ui/Pagination"

export default function Transaksi() {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const rawData = [
    { kode: "TRX001", barang: "Semen", jumlah: 10, tanggal: "2026-01-01" },
    { kode: "TRX002", barang: "Pasir", jumlah: 3, tanggal: "2026-01-02" },
  ]

  const filtered = rawData.filter((d) =>
    d.barang.toLowerCase().includes(search.toLowerCase())
  )

  const headers = ["Kode", "Barang", "Jumlah", "Tanggal", "Status"]

  const rows = filtered.map((d) => [
    d.kode,
    d.barang,
    d.jumlah,
    d.tanggal,
    d.jumlah < 5 ? (
      <Badge variant="warning">Stok Rendah</Badge>
    ) : (
      <Badge variant="success">Normal</Badge>
    ),
  ])

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Transaksi</h1>
        <Button>Tambah Transaksi</Button>
      </div>

      <div className="flex justify-between items-center">
        <SearchInput
          placeholder="Cari barang..."
          value={search}
          onChange={setSearch}
        />
      </div>

      <Table headers={headers} data={rows} />

      <Pagination page={page} total={3} onChange={setPage} />
    </section>
  )
}
