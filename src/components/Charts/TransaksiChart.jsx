import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function TransaksiChart({ data }) {
  return (
    <div className="bg-white border rounded-xl p-4">
      <h3 className="font-semibold text-sm mb-4">
        Perbandingan Transaksi Barang
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bulan" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="masuk"
            fill="#facc15"   // KUNING
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="keluar"
            fill="#64748b"   // ABU-ABU
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
