import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

/* =======================
   CONTEXT INSTANCE
======================= */

const InventoryContext = createContext(null);

/* =======================
   PROVIDER
======================= */

export function InventoryProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [barangMasuk, setBarangMasuk] = useState([]);
  const [barangKeluar, setBarangKeluar] = useState([]);

  /* =======================
     DUMMY DATA (INIT)
  ======================= */

  useEffect(() => {
    setSuppliers([
      { id: "s1", nama: "PT Sumber Jaya", kontak: "08123456789" },
      { id: "s2", nama: "CV Makmur Sejahtera", kontak: "supplier@email.com" },
    ]);

    setProducts([
      {
        id: "p1",
        name: "Beras Premium 5kg",
        stock: 50,
        priceSell: 75000,
      },
      {
        id: "p2",
        name: "Gula Pasir 1kg",
        stock: 100,
        priceSell: 15000,
      },
    ]);

    setBarangMasuk([
      {
        id: "bm1",
        productId: "p1",
        supplierId: "s1",
        qty: 20,
        priceBuy: 65000,
        date: new Date().toISOString(),
      },
    ]);

    setBarangKeluar([
      {
        id: "bk1",
        productId: "p2",
        qty: 10,
        priceSell: 15000,
        date: new Date().toISOString(),
      },
    ]);
  }, []);

  /* =======================
     SUPPLIER CRUD
  ======================= */

  const addSupplier = ({ nama, kontak }) => {
    if (!nama) throw new Error("Nama supplier wajib diisi");

    setSuppliers((prev) => [
      ...prev,
      { id: uuid(), nama, kontak: kontak || "" },
    ]);
  };

  const updateSupplier = (id, data) => {
    setSuppliers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...data } : s))
    );
  };

  const deleteSupplier = (id) => {
    setSuppliers((prev) => prev.filter((s) => s.id !== id));
  };

  /* =======================
     HELPERS
  ======================= */

  const getProductById = (id) =>
    products.find((p) => p.id === id);

  const getRingkasanDashboard = () => {
  const totalBarang = products.length;

  const totalStok = products.reduce(
    (sum, p) => sum + (p.stock || 0),
    0
  );

  const transaksi = getRiwayatTransaksi();

  const uangMasuk = transaksi
    .filter((t) => t.tipe === "KELUAR")
    .reduce((sum, t) => sum + t.total, 0);

  const uangKeluar = transaksi
    .filter((t) => t.tipe === "MASUK")
    .reduce((sum, t) => sum + t.total, 0);

  return {
    totalBarang,
    totalStok,
    uangMasuk,
    uangKeluar,
  };
};


  /* =======================
     TRANSAKSI MASUK
  ======================= */

  const createBarangMasuk = ({ productId, supplierId, qty, priceBuy }) => {
    if (!productId || !supplierId || qty <= 0 || priceBuy <= 0) {
      throw new Error("Input barang masuk tidak valid");
    }

    const product = getProductById(productId);
    if (!product) throw new Error("Produk tidak ditemukan");

    const transaksi = {
      id: uuid(),
      productId,
      supplierId,
      qty,
      priceBuy,
      date: new Date().toISOString(),
    };

    setBarangMasuk((prev) => [...prev, transaksi]);
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, stock: p.stock + qty } : p
      )
    );
  };

  /* =======================
     TRANSAKSI KELUAR
  ======================= */

  const createBarangKeluar = ({ productId, qty, priceSell }) => {
    if (!productId || qty <= 0 || priceSell <= 0) {
      throw new Error("Input barang keluar tidak valid");
    }

    const product = getProductById(productId);
    if (!product) throw new Error("Produk tidak ditemukan");
    if (product.stock < qty) throw new Error("Stok tidak cukup");

    const transaksi = {
      id: uuid(),
      productId,
      qty,
      priceSell,
      date: new Date().toISOString(),
    };

    setBarangKeluar((prev) => [...prev, transaksi]);
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, stock: p.stock - qty } : p
      )
    );
  };

  /* =======================
     RIWAYAT TRANSAKSI
  ======================= */

  const getRiwayatTransaksi = () => {
    const masuk = barangMasuk.map((t) => ({
      ...t,
      tipe: "MASUK",
      total: t.qty * t.priceBuy,
    }));

    const keluar = barangKeluar.map((t) => ({
      ...t,
      tipe: "KELUAR",
      total: t.qty * t.priceSell,
    }));

    return [...masuk, ...keluar].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  };

  return (
    <InventoryContext.Provider
     value={{
  products,
  suppliers,
  barangMasuk,
  barangKeluar,
  createBarangMasuk,
  createBarangKeluar,
  addSupplier,
  updateSupplier,
  deleteSupplier,
  getProductById,
  getRiwayatTransaksi,
  getRingkasanDashboard,
}}

    >
      {children}
    </InventoryContext.Provider>
  );
}

/* =======================
   CUSTOM HOOK
======================= */

export function useInventory() {
  const ctx = useContext(InventoryContext);
  if (!ctx) {
    throw new Error("useInventory harus dipakai di dalam InventoryProvider");
  }
  return ctx;
}
