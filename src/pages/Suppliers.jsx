import { useState } from "react";
import { useInventory } from "../context/InventoryContext";
import SupplierModal from "../components/ui/SupplierModal";
import DeleteConfirmModal from "../components/ui/DeleteConfirmModal";

export default function Suppliers() {
  const { suppliers, addSupplier, updateSupplier, deleteSupplier } =
    useInventory();

  const [selected, setSelected] = useState(null);
  const [confirm, setConfirm] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Supplier</h1>
          <p className="text-sm text-slate-500">Manajemen data pemasok</p>
        </div>

        <button
          onClick={() => setSelected({})}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Tambah Supplier
        </button>
      </div>

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left">Nama</th>
              <th className="px-4 py-3 text-left">Kontak</th>
              <th className="px-4 py-3 text-left">Alamat</th>
              <th className="px-4 py-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((s) => (
              <tr key={s.id} className="border-b last:border-none">
                <td className="px-4 py-3">{s.nama}</td>
                <td className="px-4 py-3">{s.kontak}</td>
                <td className="px-4 py-3">{s.alamat}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button
                    onClick={() => setSelected(s)}
                    className="text-yellow-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setConfirm(s)}
                    className="text-red-600 text-sm"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <SupplierModal
          supplier={selected}
          onClose={() => setSelected(null)}
          onSave={(data) => {
            selected.id ? updateSupplier(selected.id, data) : addSupplier(data);
            setSelected(null);
          }}
        />
      )}

      {confirm && (
        <DeleteConfirmModal
          title="Hapus Supplier"
          message={`Hapus supplier "${confirm.nama}"?`}
          onCancel={() => setConfirm(null)}
          onConfirm={() => {
            deleteSupplier(confirm.id);
            setConfirm(null);
          }}
        />
      )}
    </div>
  );
}
