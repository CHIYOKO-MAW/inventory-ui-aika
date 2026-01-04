import { NavLink } from "react-router-dom"
import { LayoutDashboard, Receipt, BarChart3 } from "lucide-react"

const menu = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Transaksi", path: "/transaksi", icon: Receipt },
  { name: "Laporan", path: "/laporan", icon: BarChart3 },
]

export default function Sidebar() {
  return (
    <div className="h-full bg-panel dark:bg-darkPanel border-r border-border dark:border-darkBorder p-4">
      <h1 className="text-lg font-semibold text-primary mb-6">
        Proskipaika
      </h1>

      <nav className="space-y-1">
        {menu.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                transition
                ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-muted hover:bg-surface dark:hover:bg-darkSurface"
                }
                `
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}
