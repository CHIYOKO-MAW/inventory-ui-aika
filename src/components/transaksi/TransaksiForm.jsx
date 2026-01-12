import { useState } from "react";
import { useInventory } from "../../context/InventoryContext";

export default function TransaksiForm({ type, onClose }) {
  const { products, transaksiMasuk, transaksiKeluar } = useInventory();

  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const id = Number(productId);
    const jumlah = Number(qty);

    if (type === "MASUK") transaksiMasuk(id, jumlah);
    if (type === "KELUAR") transaksiKeluar(id, jumlah);

    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold">
        Transaksi {type === "MASUK" ? "Masuk" : "Keluar"}
      </h2>

      <select
        className="input"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        required
      >
        <option value="">Pilih Produk</option>
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.nama} (Stok: {p.stok})
          </option>
        ))}
      </select>

      <input
        type="number"
        className="input"
        placeholder="Jumlah"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        required
      />

      <div className="flex gap-2">
        <button type="submit" className="btn-primary flex-1">
          Simpan
        </button>
        <button
          type="button"
          onClick={onClose}
          className="btn-secondary flex-1"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
