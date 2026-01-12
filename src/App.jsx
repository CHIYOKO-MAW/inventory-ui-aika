import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Suppliers from "./pages/Suppliers";
import Laporan from "./pages/Laporan";

export default function App() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/login" element={<Login />} />

      {/* PROTECTED */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/barang" element={<Products />} />
          <Route path="/supplier" element={<Suppliers />} />
          <Route path="/laporan" element={<Laporan />} />
        </Route>
      </Route>
    </Routes>
  );
}
