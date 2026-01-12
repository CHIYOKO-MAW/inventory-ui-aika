export default function SupplierCard({ supplier, products }) {
  const suppliedProducts = products.filter(
    (p) => p.supplierId === supplier.id
  );

  const totalStok = suppliedProducts.reduce(
    (sum, p) => sum + p.stok,
    0
  );

  return (
    <div className="card p-5 space-y-3">
      <div>
        <h3 className="text-lg font-semibold text-slate-800">
          {supplier.nama}
        </h3>
        <p className="text-sm text-slate-500">
          Kontak: {supplier.kontak}
        </p>
      </div>

      <div className="text-sm">
        <p className="font-medium text-slate-700 mb-1">
          Barang Disuplai:
        </p>

        {suppliedProducts.length === 0 ? (
          <p className="text-slate-400 italic">
            Belum ada barang
          </p>
        ) : (
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            {suppliedProducts.map((p) => (
              <li key={p.id}>
                {p.nama} — stok {p.stok}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-2 border-t text-sm text-slate-600">
        Total Stok dari Supplier:{" "}
        <span className="font-semibold text-slate-800">
          {totalStok}
        </span>
      </div>
    </div>
  );
}
