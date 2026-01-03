import AdminLayout from "./layouts/AdminLayout"
import AppRoutes from "./routes"

export default function App() {
  return (
    <AdminLayout>
      <AppRoutes />
    </AdminLayout>
  )
}
