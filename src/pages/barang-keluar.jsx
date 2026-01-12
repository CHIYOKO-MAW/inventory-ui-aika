"use client";

import { useState } from "react";
import { useInventory } from "@/context/InventoryContext";


export default function BarangKeluarPage() {
  const { products, createBarangKeluar } = useInventory();

  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState(0);
  const [priceSell, setPriceSell] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = () => {
    setError(null);
    setSuccess(null);

    try {
      createBarangKeluar({
        productId,
        qty,
        priceSell,
      });

      setSuccess("Barang keluar berhasil dicatat");
      setProductId("");
      setQty(0);
      setPriceSell(0);
    } catch (err) {
  setError(err.message);
}

  };

  return (
    <div>
      <h1>Barang Keluar</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <select value={productId} onChange={(e) => setProductId(e.target.value)}>
        <option value="">Pilih Product</option>
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} (stok: {p.stock})
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
        placeholder="Harga Jual"
        value={priceSell}
        onChange={(e) => setPriceSell(Number(e.target.value))}
      />

      <button onClick={handleSubmit}>Simpan</button>
    </div>
  );
}
