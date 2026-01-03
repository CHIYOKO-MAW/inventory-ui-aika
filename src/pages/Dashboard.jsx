import Card from "../components/ui/Card"

export default function Dashboard() {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Barang" value="120" />
        <Card title="Transaksi Hari Ini" value="8" />
        <Card title="Stok Menipis" value="5" />
      </div>
    </section>
  )
}
