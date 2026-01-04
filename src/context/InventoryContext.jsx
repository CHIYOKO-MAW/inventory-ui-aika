import { suppliersDummy } from "../data/suppliersDummy";

// di dalam InventoryProvider:
const [suppliers, setSuppliers] = useState(suppliersDummy);

// relasi sederhana: product.supplierId
const assignSupplierToProduct = (productId, supplierId) => {
  setProducts((prev) =>
    prev.map((p) =>
      p.id === productId ? { ...p, supplierId } : p
    )
  );
};

// CRUD supplier
const addSupplier = (data) => {
  setSuppliers((prev) => [{ id: Date.now(), ...data }, ...prev]);
};

const updateSupplier = (id, data) => {
  setSuppliers((prev) =>
    prev.map((s) => (s.id === id ? { ...s, ...data } : s))
  );
};

const deleteSupplier = (id) => {
  setSuppliers((prev) => prev.filter((s) => s.id !== id));
};

return (
  <InventoryContext.Provider
    value={{
      products,
      transaksi,
      suppliers,
      barangMasuk,
      barangKeluar,
      addSupplier,
      updateSupplier,
      deleteSupplier,
      assignSupplierToProduct,
    }}
  >
    {children}
  </InventoryContext.Provider>
);
