import { NavLink } from "react-router-dom";

const menu = [
  { label: "Dashboard", path: "/" },
  { label: "Data Barang", path: "/barang" },
  { label: "Barang Masuk", path: "/barang-masuk" },
  { label: "Barang Keluar", path: "/barang-keluar" },
  { label: "Supplier", path: "/supplier" },
  { label: "Laporan", path: "/laporan" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-screen">
      <div className="p-6 font-semibold text-lg">Aika Inventory</div>

      <nav className="px-3 space-y-1">
        {menu.map((m) => (
          <NavLink
            key={m.path}
            to={m.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg text-sm transition ${
                isActive
                  ? "bg-yellow-100 text-yellow-700 font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            {m.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
