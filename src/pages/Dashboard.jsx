import TransaksiChart from "../components/Charts/TransaksiChart";
import StokKategoriChart from "../components/charts/StokKategoriChart";
import StatCard from "../components/ui/StatCard";
import EmptyState from "../components/ui/EmptyState";
import { useInventory } from "../context/InventoryContext";

export default function Dashboard() {
  const { products, transaksi } = useInventory();

  const totalStok = products.reduce((a, b) => a + b.stok, 0);
  const totalProduk = products.length;
  const transaksiMasuk = transaksi.filter(t => t.jenis === "masuk").length;
  const transaksiKeluar = transaksi.filter(t => t.jenis === "keluar").length;

  const transaksiChartData = [
    { bulan: "Jan", masuk: 120, keluar: 80 },
    { bulan: "Feb", masuk: 90, keluar: 70 },
    { bulan: "Mar", masuk: 150, keluar: 110 },
  ];

  const stokKategori = products.reduce((acc, p) => {
    const found = acc.find(a => a.kategori === p.kategori);
    if (found) found.stok += p.stok;
    else acc.push({ kategori: p.kategori, stok: p.stok });
    return acc;
  }, []);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Dashboard Inventori
        </h1>
        <p className="text-sm text-slate-500">
          Ringkasan kondisi stok dan aktivitas barang
        </p>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Produk" value={totalProduk} />
        <StatCard title="Total Stok" value={totalStok} highlight />
        <StatCard title="Barang Masuk" value={transaksiMasuk} />
        <StatCard title="Barang Keluar" value={transaksiKeluar} />
      </div>

      {/* CHART */}
      {products.length === 0 ? (
        <EmptyState
          title="Data inventori belum tersedia"
          description="Tambahkan data barang untuk melihat visualisasi stok dan transaksi."
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TransaksiChart data={transaksiChartData} />
          <StokKategoriChart data={stokKategori} />
        </div>
      )}
    </div>
  );
}
