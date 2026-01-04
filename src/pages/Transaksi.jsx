import { motion } from "framer-motion"
import Button from "../components/ui/Button"
import DataTable from "../components/ui/DataTable"
import TransactionCard from "../components/ui/TransactionCard"
import EmptyState from "../components/ui/EmptyState"

const data = [] 
// ← BIAR EMPTY STATE KELIATAN
// kalau mau lihat tabel, isi array ini

export default function Transaksi() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Transaksi</h1>
          <p className="text-muted">
            Kelola data transaksi barang
          </p>
        </div>

        <Button>Tambah Transaksi</Button>
      </div>

      {/* === INI BAGIAN RENDER DATA (SUDAH FIX) === */}
      {data.length === 0 ? (
        <EmptyState
          title="Belum ada transaksi"
          description="Tambahkan transaksi pertama untuk mulai mengelola inventori."
          action={<Button>Tambah Transaksi</Button>}
        />
      ) : (
        <>
          {/* MOBILE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
            {data.map((item) => (
              <TransactionCard key={item.kode} data={item} />
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <DataTable
              data={data}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          </div>
        </>
      )}
    </motion.section>
  )
}
