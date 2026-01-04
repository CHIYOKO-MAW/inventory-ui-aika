import { useState } from "react";

export default function ProductModal({ product, onClose }) {
  const [form, setForm] = useState({
    nama: product.nama,
    kategori: product.kategori,
    stok: product.stok,
    satuan: product.satuan,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DATA EDIT (dummy):", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="font-semibold">Detail Barang</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <img
            src={product.image}
            alt={product.nama}
            className="w-full h-48 object-cover rounded-lg"
          />

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              label="Nama Barang"
              name="nama"
              value={form.nama}
              onChange={handleChange}
            />
            <Input
              label="Kategori"
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
            />
            <Input
              label="Stok"
              name="stok"
              type="number"
              value={form.stok}
              onChange={handleChange}
            />
            <Input
              label="Satuan"
              name="satuan"
              value={form.satuan}
              onChange={handleChange}
            />

            <div className="flex justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm border rounded-lg"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm rounded-lg bg-yellow-500 text-white hover:bg-yellow-600"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs text-slate-500 mb-1">{label}</label>
      <input
        {...props}
        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
}
