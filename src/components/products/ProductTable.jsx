import { useInventory } from "../../context/InventoryContext";

export default function ProductTable({ onEdit }) {
  const { products, suppliers, deleteProduct } = useInventory();

  function getSupplierName(id) {
    return suppliers.find((s) => s.id === id)?.nama || "-";
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-slate-200">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-2 text-left">Nama</th>
            <th className="p-2">Kategori</th>
            <th className="p-2">Supplier</th>
            <th className="p-2">Harga</th>
            <th className="p-2">Stok</th>
            <th className="p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.nama}</td>
              <td className="p-2">{p.kategori}</td>
              <td className="p-2">{getSupplierName(p.supplierId)}</td>
              <td className="p-2">
                Rp {p.harga.toLocaleString("id-ID")}
              </td>
              <td className="p-2">{p.stok}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => onEdit(p)}
                  className="text-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="text-red-600"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
