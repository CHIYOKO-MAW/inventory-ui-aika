import Button from "./Button"

export default function ExportDialog({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm rounded-lg shadow space-y-4 p-5">
        <h2 className="text-sm font-semibold">Export Laporan</h2>

        <p className="text-sm text-gray-600">
          Pilih format file laporan yang akan diunduh.
        </p>

        <div className="space-y-2">
          <button
            onClick={() => alert("Simulasi export PDF")}
            className="w-full border rounded px-4 py-2 text-sm hover:bg-gray-50"
          >
            📄 Export PDF
          </button>

          <button
            onClick={() => alert("Simulasi export Excel")}
            className="w-full border rounded px-4 py-2 text-sm hover:bg-gray-50"
          >
            📊 Export Excel
          </button>
        </div>

        <div className="flex justify-end pt-2">
          <Button variant="secondary" onClick={onClose}>
            Tutup
          </Button>
        </div>
      </div>
    </div>
  )
}
