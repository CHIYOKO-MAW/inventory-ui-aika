import { Routes, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Transaksi from "../pages/Transaksi"
import Laporan from "../pages/Laporan"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transaksi" element={<Transaksi />} />
      <Route path="/laporan" element={<Laporan />} />
    </Routes>
  )
}
