import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"
import StatCard from "../components/ui/StatCard"
import Badge from "../components/ui/Badge"

export default function Dashboard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-10"
    >
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted mt-1">
          Ringkasan kondisi inventori
        </p>
      </div>

      {/* STAT */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4
        gap-6
      ">
        <StatCard title="Total Barang" value="128" />
        <StatCard title="Transaksi Hari Ini" value="12" />
        <StatCard title="Stok Menipis" value="4" />
        <StatCard title="Barang Masuk" value="9" />
      </div>

      {/* INFO SECTION */}
      <div className="
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-6
      ">
        {/* AKTIVITAS */}
        <div className="xl:col-span-2 bg-panel dark:bg-darkPanel border border-border dark:border-darkBorder rounded-xl p-6 shadow-soft">
          <h2 className="font-semibold mb-4">Aktivitas Terakhir</h2>
          <ul className="space-y-3 text-sm text-muted">
            <li>• Transaksi Semen – 10 unit</li>
            <li>• Barang masuk: Batu Bata</li>
            <li>• Update stok pasir</li>
          </ul>
        </div>

        {/* PERINGATAN (INI YANG TADI KAMU GAK NEMU) */}
        <div className="bg-panel dark:bg-darkPanel border border-border dark:border-darkBorder rounded-xl p-6 shadow-soft space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Peringatan</h2>
            <Badge
              icon={AlertTriangle}
              label="Perlu Restock"
              variant="warning"
            />
          </div>

          <p className="text-sm text-muted">
            3 barang mendekati batas minimum stok.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
