import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const InventoryContext = createContext(null);

export function InventoryProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [transaksi, setTransaksi] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchTransaksi();
    fetchSuppliers();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase.from("products").select("*");
    if (!error) setProducts(data || []);
  }

  async function fetchTransaksi() {
    const { data, error } = await supabase.from("transactions").select("*");
    if (!error) setTransaksi(data || []);
  }

  async function fetchSuppliers() {
    const { data, error } = await supabase.from("suppliers").select("*");
    if (!error) setSuppliers(data || []);
  }

  return (
    <InventoryContext.Provider
      value={{ products, transaksi, suppliers }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const ctx = useContext(InventoryContext);
  if (!ctx) throw new Error("useInventory must be used inside InventoryProvider");
  return ctx;
}
