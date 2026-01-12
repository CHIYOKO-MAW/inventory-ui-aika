import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartStockCategory() {
  // Dummy data (nanti bisa diganti dari Supabase)
  const data = [
    { kategori: "Semen", stok: 420 },
    { kategori: "Besi", stok: 300 },
    { kategori: "Pasir", stok: 180 },
    { kategori: "Cat", stok: 90 },
  ];

  return (
    <div className="card p-6">
      <h2 className="mb-4">Stok per Kategori</h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="kategori"
              tick={{ fill: "#475569", fontSize: 12 }}
            />
            <YAxis tick={{ fill: "#475569", fontSize: 12 }} />
            <Tooltip
              cursor={{ fill: "rgba(234,179,8,0.1)" }}
              contentStyle={{
                borderRadius: "8px",
                borderColor: "#e5e7eb",
              }}
            />
            <Bar
              dataKey="stok"
              fill="#facc15"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
