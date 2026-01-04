import ProductCard from "../components/products/ProductCard";
import EmptyState from "../components/ui/EmptyState";
import { useInventory } from "../context/InventoryContext";

export default function Products() {
  const { products } = useInventory();

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Data Barang
        </h1>
        <p className="text-sm text-slate-500">
          Daftar material dan stok yang tersedia di gudang
        </p>
      </div>

      {/* CONTENT */}
      {products.length === 0 ? (
        <EmptyState
          title="Belum ada data barang"
          description="Tambahkan data barang untuk mulai mengelola inventori."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
