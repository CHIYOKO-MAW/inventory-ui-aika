import { useState } from "react";
import { useInventory } from "../context/InventoryContext";

export default function TransaksiMasuk() {
  const { products, transaksiMasuk } = useInventory();
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState(1);

  return (
    <div className="space-y-6">
      <h1>Transaksi Barang Masuk</h1>

      <div className="card p-4 space-y-4 max-w-md">
        <select
          className="input"
          value={productId}
          onChange={(e) => setProductId(Number(e.target.value))}
        >
          <option value="">Pilih Barang</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nama}
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
          className="btn-primary w-full"
          onClick={() => {
            transaksiMasuk(productId, qty);
            setQty(1);
          }}
        >
          Simpan Transaksi
        </button>
      </div>
    </div>
  );
}
