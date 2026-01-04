import TransaksiForm from "../components/forms/TransaksiForm";
import DataTable from "../components/ui/DataTable";
import EmptyState from "../components/ui/EmptyState";
import { useInventory } from "../context/InventoryContext";

export default function TransaksiKeluar() {
  const { transaksiKeluar } = useInventory();

  const columns = [
    { header: "Tanggal", accessor: "tanggal" },
    { header: "Nama Barang", accessor: "namaBarang" },
    { header: "Jumlah", accessor: "jumlah" },
    { header: "Tujuan", accessor: "tujuan" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Transaksi Barang Keluar
        </h1>
        <p className="text-sm text-slate-500">
          Pencatatan barang yang keluar dari gudang
        </p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-slate-700">
          Tambah Transaksi Keluar
        </h2>
        <TransaksiForm type="keluar" />
      </div>

      {transaksiKeluar.length === 0 ? (
        <EmptyState
          title="Belum ada transaksi keluar"
          description="Data transaksi keluar akan muncul di sini setelah ditambahkan."
        />
      ) : (
        <DataTable columns={columns} data={transaksiKeluar} />
      )}
    </div>
  );
}
