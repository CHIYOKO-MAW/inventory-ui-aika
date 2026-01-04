- <thead className="bg-surface text-muted"></thead>
import { motion } from "framer-motion"
import { Pencil, Trash2 } from "lucide-react"



export default function DataTable({ data, onEdit, onDelete }) {
  if (!data.length) {
    return (
      <div className="bg-panel border border-border rounded-xl p-10 text-center text-muted">
        Belum ada data transaksi
      </div>
    )
  }

  return (
    <div className="bg-panel border border-border rounded-xl shadow-soft overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-surface text-muted">
          <tr>
            <th className="px-5 py-3 text-left">Kode</th>
            <th className="px-5 py-3 text-left">Barang</th>
            <th className="px-5 py-3 text-left">Jumlah</th>
            <th className="px-5 py-3 text-left">Tanggal</th>
            <th className="px-5 py-3 text-right">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <motion.tr
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ backgroundColor: "#f1f5f9" }}
              className="group border-t"
            >
              <td className="px-5 py-3 font-medium">{row.kode}</td>
              <td className="px-5 py-3">{row.barang}</td>
              <td className="px-5 py-3">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium
                    ${
                      row.jumlah < 5
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                >
                  {row.jumlah}
                </span>
              </td>
              <td className="px-5 py-3 text-muted">{row.tanggal}</td>

              <td className="px-5 py-3 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() => onEdit(row)}
                    className="p-2 rounded hover:bg-surface text-muted"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(row)}
                    className="p-2 rounded hover:bg-surface text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
  + <thead className="bg-surface dark:bg-darkSurface text-muted"></thead>
}
