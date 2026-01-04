import Sidebar from "../components/layout/Sidebar"
import Topbar from "../components/layout/Topbar"
import PageWrapper from "../components/layout/PageWrapper"

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-surface dark:bg-darkSurface">
      {/* SIDEBAR */}
      <aside className="hidden md:block w-64 shrink-0">
        <Sidebar />
      </aside>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />

        <main className="flex-1 py-6 text-gray-900 dark:text-gray-100">
          <PageWrapper>{children}</PageWrapper>
        </main>
      </div>
    </div>
  )
}
