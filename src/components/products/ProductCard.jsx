export default function ProductCard({
  product,
  supplier,
  onEdit,
  onDelete,
}) {
  const harga = Number(product.priceSell || 0);
  const stok = Number(product.stock || 0);

  return (
    <div className="card overflow-hidden hover:shadow-lg transition">
      {/* IMAGE */}
      {product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="w-full h-40 bg-slate-100 flex items-center justify-center text-slate-400">
          No Image
        </div>
      )}

      {/* CONTENT */}
      <div className="p-4 space-y-1">
        <h3 className="font-semibold">{product.name}</h3>

        <p className="text-sm">
          Supplier: {supplier?.nama || "-"}
        </p>

        <p className="text-sm">
          Stok: {stok}
        </p>

        <p className="font-semibold">
          Rp {harga.toLocaleString()}
        </p>
      </div>

      {/* ACTION */}
      <div className="flex gap-2 p-4 pt-0">
        <button
          onClick={onEdit}
          className="flex-1 text-sm rounded-lg border py-1 hover:bg-slate-100"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex-1 text-sm rounded-lg bg-red-500 text-white py-1 hover:bg-red-600"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
