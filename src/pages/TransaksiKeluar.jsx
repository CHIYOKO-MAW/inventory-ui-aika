import { useState } from "react";
import { useInventory } from "../context/InventoryContext";

export default function TransaksiKeluar() {
  const { products, transaksiKeluar } = useInventory();
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState(1);

  return (
    <div className="space-y-6">
      <h1>Transaksi Barang Keluar</h1>

      <div className="card p-4 space-y-4 max-w-md">
        <select
          className="input"
          value={productId}
          onChange={(e) => setProductId(Number(e.target.value))}
        >
          <option value="">Pilih Barang</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nama} (stok: {p.stok})
            </option>
          ))}
        </select>

        <input
          type="number"
          className="input"
          min={1}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        />

        <button
          className="btn-secondary w-full"
          onClick={() => {
            transaksiKeluar(productId, qty);
            setQty(1);
          }}
        >
          Simpan Transaksi
        </button>
      </div>
    </div>
  );
}
