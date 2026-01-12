import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useInventory } from "../context/InventoryContext";

const COLORS = ["#22c55e", "#ef4444"];

export default function Dashboard() {
  const {
    products = [],
    getRingkasanDashboard,
    getRiwayatTransaksi,
  } = useInventory();

  const {
    totalBarang,
    totalStok,
    uangMasuk,
    uangKeluar,
  } = getRingkasanDashboard();

  /* ===== STOK PER PRODUK ===== */
  const stokData = products.map((p) => ({
    name: p.name,
    stok: p.stock || 0,
  }));

  /* ===== TRANSAKSI PIE ===== */
  const transaksiChart = [
    { name: "Uang Masuk", value: uangMasuk },
    { name: "Uang Keluar", value: uangKeluar },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold">
        Dashboard Inventori
      </h1>

      {/* KPI */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KpiCard label="Total Barang" value={totalBarang} />
        <KpiCard label="Total Stok" value={totalStok} />
        <KpiCard
          label="Uang Masuk"
          value={`Rp ${uangMasuk.toLocaleString()}`}
          color="text-green-600"
        />
        <KpiCard
          label="Uang Keluar"
          value={`Rp ${uangKeluar.toLocaleString()}`}
          color="text-red-600"
        />
      </div>

      {/* CHART */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BAR */}
        <div className="card p-5">
          <h2 className="mb-4">Stok per Produk</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stokData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="stok" fill="#38bdf8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE */}
        <div className="card p-5">
          <h2 className="mb-4">Perbandingan Transaksi</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={transaksiChart}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  label
                >
                  {transaksiChart.map((_, i) => (
                    <Cell
                      key={i}
                      fill={COLORS[i]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ label, value, color = "" }) {
  return (
    <div className="card p-5">
      <p>{label}</p>
      <h2 className={`text-lg font-semibold ${color}`}>
        {value}
      </h2>
    </div>
  );
}
