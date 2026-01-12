import { useState } from "react";
import { useInventory } from "../../context/InventoryContext";

export default function StockInModal({ product, onClose }) {
  const { suppliers, tambahStok } = useInventory();
  const [qty, setQty] = useState(1);
  const [supplierId, setSupplierId] = useState(product.supplierId);

  function handleSubmit(e) {
    e.preventDefault();

    tambahStok({
      productId: product.id,
      qty: Number(qty),
      supplierId: Number(supplierId),
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          Tambah Stok — {product.nama}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm">Jumlah Masuk</label>
            <input
              type="number"
              min="1"
              className="input"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm">Supplier</label>
            <select
              className="input"
              value={supplierId}
              onChange={(e) => setSupplierId(e.target.value)}
            >
              {suppliers.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nama}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-2">
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
    </div>
  );
}
