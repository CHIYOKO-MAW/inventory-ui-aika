import { useState } from "react";
import { useInventory } from "../../context/InventoryContext";

export default function TransactionForm({ type }) {
  const { products, addTransaction } = useInventory();

  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!productId || !qty) return;

    await addTransaction({
      product_id: productId,
      qty: Number(qty),
      type,
    });

    setQty("");
    setProductId("");
  }

  return (
    <form onSubmit={handleSubmit} className="card p-5 space-y-4 max-w-md">
      <h2 className="font-semibold">
        Transaksi {type === "IN" ? "Masuk" : "Keluar"}
      </h2>

      <select
        className="input"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        required
      >
        <option value="">Pilih Barang</option>
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} (stok: {p.stock})
          </option>
        ))}
      </select>

      <input
        type="number"
        className="input"
        placeholder="Jumlah"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        min={1}
        required
      />

      <button className="btn-primary w-full">
        Simpan Transaksi
      </button>
    </form>
  );
}
