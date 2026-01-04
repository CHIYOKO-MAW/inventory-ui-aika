export default function ProductCard({ item, onDetail }) {
  const stokColor =
    item.stok <= 10
      ? "bg-red-100 text-red-700"
      : item.stok <= 30
      ? "bg-yellow-100 text-yellow-700"
      : "bg-emerald-100 text-emerald-700";

  return (
    <div className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition">
      <img
        src={item.image}
        alt={item.nama}
        className="h-40 w-full object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-slate-900">{item.nama}</h3>
        <p className="text-xs text-slate-500">{item.kategori}</p>

        <div className="flex items-center justify-between mt-3">
          <span className={`text-xs px-2 py-1 rounded ${stokColor}`}>
            Stok: {item.stok} {item.satuan}
          </span>

          <button
            onClick={onDetail}
            className="text-xs font-medium text-yellow-600 hover:underline"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
