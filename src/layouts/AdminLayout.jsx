import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `block rounded-md px-3 py-2 text-sm transition ${
          isActive
            ? "bg-yellow-100 text-yellow-700 font-medium"
            : "text-slate-600 hover:bg-slate-100"
        }`
      }
    >
      {label}
    </NavLink>
  );
}


  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">
            Inventori
          </h2>
          <p className="text-xs text-slate-500">
            Admin Panel
          </p>
        </div>

        <nav className="p-4 space-y-1">
          <NavItem to="/" label="Dashboard" />
          <NavItem to="/barang" label="Data Barang" />
          <NavItem to="/supplier" label="Supplier" />
          <NavItem to="/laporan" label="Laporan" />
        </nav>

        {/* LOGOUT */}
        <div className="mt-auto p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full rounded-md bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
