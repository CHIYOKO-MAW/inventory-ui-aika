import DataTable from "../components/ui/DataTable";

const data = [
  {
    id: 1,
    tanggal: "2026-01-04",
    barang: "Semen Tiga Roda",
    jenis: "Masuk",
    jumlah: 20,
  },
  {
    id: 2,
    tanggal: "2026-01-04",
    barang: "Besi Beton",
    jenis: "Keluar",
    jumlah: 5,
  },
];

export default function Transaksi() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Transaksi</h1>
        <p className="text-sm text-slate-500">
          Riwayat barang masuk dan keluar
        </p>
      </div>

      <DataTable data={data} />
    </div>
  );
}
