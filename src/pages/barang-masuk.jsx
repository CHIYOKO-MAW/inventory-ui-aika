"use client";

import { useState } from "react";
import { useInventory } from "@/context/InventoryContext";


export default function BarangMasukPage() {
  const { products, suppliers, createBarangMasuk } = useInventory();

  const [productId, setProductId] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [qty, setQty] = useState(0);
  const [priceBuy, setPriceBuy] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = () => {
    setError(null);
    setSuccess(null);

    try {
      createBarangMasuk({
        productId,
        supplierId,
        qty,
        priceBuy,
      });

      setSuccess("Barang masuk berhasil dicatat");
      setProductId("");
      setSupplierId("");
      setQty(0);
      setPriceBuy(0);
    } catch (err) {
  setError(err.message);
}

  };

  return (
    <div>
      <h1>Barang Masuk</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <select value={productId} onChange={(e) => setProductId(e.target.value)}>
        <option value="">Pilih Product</option>
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      <select value={supplierId} onChange={(e) => setSupplierId(e.target.value)}>
        <option value="">Pilih Supplier</option>
        {suppliers.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Qty"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Harga Beli"
        value={priceBuy}
        onChange={(e) => setPriceBuy(Number(e.target.value))}
      />

      <button onClick={handleSubmit}>Simpan</button>
    </div>
  );
}
