import { useState } from "react";
import { useInventory } from "../context/InventoryContext";
import ProductCard from "../components/products/ProductCard";
import ProductForm from "../components/products/ProductForm";


export default function Products() {
  const { products = [], deleteProduct } = useInventory();

  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1>Data Barang</h1>
        <button
          className="btn-primary"
          onClick={() => {
            setEditData(null);
            setShowForm(true);
          }}
        >
          + Tambah Barang
        </button>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <ProductForm
              initialData={editData}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length === 0 && (
          <p className="text-slate-400">Belum ada data barang</p>
        )}

        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onEdit={() => {
              setEditData(p);
              setShowForm(true);
            }}
            onDelete={() => deleteProduct(p.id)}
          />
        ))}
      </div>
    </div>
  );
}
