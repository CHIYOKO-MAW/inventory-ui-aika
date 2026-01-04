import { useState } from "react";
import DataTable from "../components/ui/DataTable";
import EmptyState from "../components/ui/EmptyState";
import { exportPDF, exportExcel } from "../utils/exportDummy";
import { useInventory } from "../context/InventoryContext";

export default function Laporan() {
  const { transaksi } = useInventory();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const filtered = transaksi.filter((t) => {
    if (!from || !to) return true;
    return t.tanggal >= from && t.tanggal <= to;
  });

  const columns = [
    { header: "Tanggal", accessor: "tanggal" },
    { header: "Jenis", accessor: "jenis" },
    { header: "Barang", accessor: "namaBarang" },
    { header: "Jumlah", accessor: "jumlah" },
    { header: "Keterangan", accessor: "keterangan" },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">Laporan Transaksi</h1>
        <p className="text-sm text-slate-500">
          Rekapitulasi transaksi berdasarkan rentang waktu
        </p>
      </div>

      {/* FILTER */}
      <div className="bg-white border rounded-xl p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="text-xs text-slate-500">Dari Tanggal</label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <label className="text-xs text-slate-500">Sampai Tanggal</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="input"
          />
        </div>

        <div className="flex items-end gap-2 md:col-span-2">
          <button
            onClick={() => exportPDF(filtered)}
            className="bg-slate-800 text-white rounded-lg px-4 py-2 text-sm hover:bg-slate-900"
          >
            Export PDF
          </button>
          <button
            onClick={() => exportExcel(filtered)}
            className="bg-yellow-400 text-black rounded-lg px-4 py-2 text-sm hover:bg-yellow-500"
          >
            Export Excel
          </button>
        </div>
      </div>

      {/* TABLE */}
      {filtered.length === 0 ? (
        <EmptyState
          title="Tidak ada data laporan"
          description="Ubah filter tanggal atau tambahkan transaksi."
        />
      ) : (
        <DataTable columns={columns} data={filtered} />
      )}
    </div>
  );
}
