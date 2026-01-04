import { useState } from "react";

export default function SupplierModal({ supplier, onClose, onSave }) {
  const [form, setForm] = useState({
    nama: supplier.nama || "",
    kontak: supplier.kontak || "",
    alamat: supplier.alamat || "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-md p-5">
        <h2 className="font-semibold mb-4">
          {supplier.id ? "Edit Supplier" : "Tambah Supplier"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input label="Nama" name="nama" value={form.nama} onChange={handleChange} />
          <Input label="Kontak" name="kontak" value={form.kontak} onChange={handleChange} />
          <Input label="Alamat" name="alamat" value={form.alamat} onChange={handleChange} />

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded-lg text-sm"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm"
            >
              Simpan
            </button>
          </div>
        </form>
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
        required
        className="w-full border rounded-lg px-3 py-2 text-sm"
      />
    </div>
  );
}
