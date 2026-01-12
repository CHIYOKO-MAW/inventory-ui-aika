import { useState } from "react";
import { useInventory } from "../context/InventoryContext";

export default function Suppliers() {
  const {
    suppliers,
    addSupplier,
    updateSupplier,
    deleteSupplier,
  } = useInventory();

  const [form, setForm] = useState({ nama: "", kontak: "" });
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      updateSupplier(editId, form);
    } else {
      addSupplier(form);
    }

    setForm({ nama: "", kontak: "" });
    setEditId(null);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Data Supplier</h1>

      {/* FORM */}
      <div className="card p-6 max-w-md">
        <h2 className="mb-4 font-medium">
          {editId ? "Edit Supplier" : "Tambah Supplier"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="input"
            placeholder="Nama Supplier"
            value={form.nama}
            onChange={(e) =>
              setForm({ ...form, nama: e.target.value })
            }
          />

          <input
            className="input"
            placeholder="Kontak"
            value={form.kontak}
            onChange={(e) =>
              setForm({ ...form, kontak: e.target.value })
            }
          />

          <button className="btn-primary w-full">
            {editId ? "Update" : "Simpan"}
          </button>
        </form>
      </div>

      {/* LIST */}
      <div className="card p-6">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Kontak</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((s) => (
              <tr key={s.id}>
                <td>{s.nama}</td>
                <td>{s.kontak || "-"}</td>
                <td className="space-x-2">
                  <button
                    className="text-blue-600"
                    onClick={() => {
                      setEditId(s.id);
                      setForm({
                        nama: s.nama,
                        kontak: s.kontak,
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600"
                    onClick={() => deleteSupplier(s.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
