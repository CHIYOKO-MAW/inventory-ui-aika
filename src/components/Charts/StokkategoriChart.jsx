import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#facc15", "#eab308", "#64748b", "#94a3b8"];

export default function StokKategoriChart({ data }) {
  return (
    <div className="bg-white border rounded-xl p-4">
      <h3 className="font-semibold text-sm mb-4">
        Distribusi Stok per Kategori
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="stok"
            nameKey="kategori"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
