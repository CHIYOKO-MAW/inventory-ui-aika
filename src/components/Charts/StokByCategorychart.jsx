import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { category: "Semen", stok: 120 },
  { category: "Pasir", stok: 80 },
  { category: "Besi", stok: 45 },
  { category: "Cat", stok: 60 },
  { category: "Keramik", stok: 30 },
];

export default function StockByCategoryChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="category"
            tick={{ fill: "#334155", fontSize: 12 }}
          />
          <YAxis tick={{ fill: "#334155", fontSize: 12 }} />
          <Tooltip />
          <Bar
            dataKey="stok"
            fill="#f59e0b" // amber-500
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
