import TransaksiForm from "../components/forms/TransaksiForm";
import DataTable from "../components/ui/DataTable";
import EmptyState from "../components/ui/EmptyState";
import { useInventory } from "../context/InventoryContext";

export default function TransaksiMasuk() {
  const { transaksiMasuk } = useInventory();

  const columns = [
    { header: "Tanggal", accessor: "tanggal" },
    { header: "Nama Barang", accessor: "namaBarang" },
    { header: "Jumlah", accessor: "jumlah" },
    { header: "Supplier", accessor: "supplier" },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Transaksi Barang Masuk
        </h1>
        <p className="text-sm text-slate-500">
          Pencatatan barang yang masuk ke gudang
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white border rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-slate-700">
          Tambah Transaksi Masuk
        </h2>
        <TransaksiForm type="masuk" />
      </div>

      {/* TABLE */}
      {transaksiMasuk.length === 0 ? (
        <EmptyState
          title="Belum ada transaksi masuk"
          description="Data transaksi masuk akan muncul di sini setelah ditambahkan."
        />
      ) : (
        <DataTable columns={columns} data={transaksiMasuk} />
      )}
    </div>
  );
}
