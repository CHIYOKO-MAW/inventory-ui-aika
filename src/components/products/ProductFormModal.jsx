import { useState } from "react";

export default function ProductFormModal({
  product,
  suppliers,
  onSave,
  onClose,
}) {
  const [nama, setNama] = useState(product.nama);
  const [harga, setHarga] = useState(product.harga || 0);
  const [supplierId, setSupplierId] = useState(product.supplierId);
  const [imageFile, setImageFile] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...product,
      nama,
      harga,
      supplierId,
      imageFile,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h2>Edit Produk</h2>

        <div>
          <label className="text-sm">Nama Produk</label>
          <input
            className="input"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm">Harga</label>
          <input
            type="number"
            className="input"
            value={harga}
            onChange={(e) => setHarga(Number(e.target.value))}
          />
        </div>

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

        <div>
          <label className="text-sm">Gambar Produk</label>
            <input
         type="file"
         accept="image/*"
        className="input"
         onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />

        </div>

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
