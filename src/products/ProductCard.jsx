export default function ProductCard({ product }) {
  const stokStatus =
    product.stok === 0
      ? "habis"
      : product.stok < 10
      ? "menipis"
      : "aman";

  const badgeColor =
    stokStatus === "habis"
      ? "bg-red-100 text-red-700"
      : stokStatus === "menipis"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-emerald-100 text-emerald-700";

  return (
    <div className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition">
      {/* IMAGE */}
      <div className="h-36 bg-slate-100 flex items-center justify-center">
        <img
          src={product.image || "/placeholder.png"}
          alt={product.nama}
          className="object-contain h-full"
        />
      </div>

      {/* BODY */}
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-slate-800 text-sm">
            {product.nama}
          </h3>
          <span
            className={`text-xs px-2 py-1 rounded-full ${badgeColor}`}
          >
            {stokStatus}
          </span>
        </div>

        <p className="text-xs text-slate-500">
          Kategori: {product.kategori}
        </p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-sm font-semibold text-slate-700">
            Stok: {product.stok}
          </span>
          <button className="text-xs text-yellow-600 hover:underline">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
