import { NavLink } from "react-router-dom";

const menus = [
  { label: "Dashboard", path: "/" },
  { label: "Data Barang", path: "/barang" },
  { label: "Transaksi", path: "/transaksi" },
  { label: "Supplier", path: "/supplier" },
  { label: "Laporan", path: "/laporan" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      {/* HEADER */}
      <div className="p-5 text-xl font-semibold border-b border-slate-700">
        Inventory Aika
      </div>

      {/* MENU */}
      <nav className="flex-1 p-3 space-y-1">
        {menus.map((m) => (
          <NavLink
            key={m.path}
            to={m.path}
            end
            className={({ isActive }) =>
              `block rounded-lg px-4 py-2 text-sm transition ${
                isActive
                  ? "bg-yellow-400 text-black font-medium"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {m.label}
          </NavLink>
        ))}
      </nav>

      {/* FOOTER */}
      <div className="p-4 text-xs text-slate-400 border-t border-slate-700">
        © 2026 Inventory System
      </div>
    </aside>
  );
}
