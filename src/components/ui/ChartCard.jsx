import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

export default function ChartCard({ title, type = "line", data }) {
  return (
    <div className="bg-panel dark:bg-darkPanel border border-border dark:border-darkBorder rounded-xl p-6 shadow-soft">
      <h2 className="font-semibold mb-4">{title}</h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {type === "line" ? (
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2563eb" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
