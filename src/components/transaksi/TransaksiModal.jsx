import { useState } from "react";

export default function TransaksiModal({
  type,
  product,
  suppliers,
  onSubmit,
  onClose,
}) {
  const [qty, setQty] = useState(1);
  const [supplierId, setSupplierId] = useState(
    product.supplierId || suppliers[0]?.id
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (qty <= 0) {
      alert("Jumlah harus lebih dari 0");
      return;
    }

    if (type === "MASUK") {
      onSubmit(product.id, qty, supplierId);
    } else {
      onSubmit(product.id, qty);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-lg font-semibold">
          Transaksi Barang {type === "MASUK" ? "Masuk" : "Keluar"}
        </h2>

        <p className="text-sm text-slate-600">
          Produk: <b>{product.nama}</b>
        </p>

        <div>
          <label className="text-sm">Jumlah</label>
          <input
            type="number"
            className="input"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />
        </div>

        {type === "MASUK" && (
          <div>
            <label className="text-sm">Supplier</label>
            <select
              className="input"
              value={supplierId}
              onChange={(e) => setSupplierId(Number(e.target.value))}
            >
              {suppliers.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nama}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary"
          >
            Batal
          </button>
          <button type="submit" className="btn-primary">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
