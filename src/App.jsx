import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import TransaksiMasuk from "./pages/TransaksiMasuk";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";


import TransaksiKeluar from "./pages/TransaksiKeluar";
import Suppliers from "./pages/Suppliers";
import Laporan from "./pages/Laporan";

export default function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/barang" element={<Products />} />
        <Route path="/barang-masuk" element={<TransaksiMasuk />} />
        <Route path="/barang-keluar" element={<TransaksiKeluar />} />
        <Route path="/supplier" element={<Suppliers />} />
        <Route path="/laporan" element={<Laporan />} />
      </Route>
    </Routes>
  );
}
