import { useInventory } from "../context/InventoryContext";

export default function Transaksi() {
  const { getRiwayatTransaksi, products, suppliers } = useInventory();
  const transaksi = getRiwayatTransaksi();

  const getProductName = (id) =>
    products.find((p) => p.id === id)?.name || "-";

  const getSupplierName = (id) =>
    suppliers.find((s) => s.id === id)?.nama || "-";

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Riwayat Transaksi</h1>

      <div className="card p-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Tipe</th>
              <th>Barang</th>
              <th>Supplier</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {transaksi.map((t) => (
              <tr key={t.id}>
                <td>
                  {new Date(t.date).toLocaleDateString()}
                </td>
                <td
                  className={
                    t.tipe === "MASUK"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {t.tipe}
                </td>
                <td>{getProductName(t.productId)}</td>
                <td>
                  {t.tipe === "MASUK"
                    ? getSupplierName(t.supplierId)
                    : "-"}
                </td>
                <td>{t.qty}</td>
                <td>
                  Rp {t.total.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {transaksi.length === 0 && (
          <p className="text-slate-400 text-sm">
            Belum ada transaksi
          </p>
        )}
      </div>
    </div>
  );
}
