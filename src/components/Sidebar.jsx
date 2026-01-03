import { NavLink } from "react-router-dom"
import { IconDashboard, IconFile } from "./ui/Icon"

const menu = [
  { name: "Dashboard", path: "/", icon: <IconDashboard /> },
  { name: "Transaksi", path: "/transaksi", icon: <IconFile /> },
  { name: "Laporan", path: "/laporan", icon: <IconFile /> },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6 font-bold text-lg text-primary">
        Inventory System
      </div>

      <nav className="px-3 space-y-1">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md text-sm transition
              ${isActive
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"}`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
