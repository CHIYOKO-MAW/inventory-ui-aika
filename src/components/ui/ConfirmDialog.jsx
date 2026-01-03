import Button from "./Button"

export default function ConfirmDialog({ title, message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm rounded-lg shadow p-4 space-y-4">
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{message}</p>
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onCancel}>
            Batal
          </Button>
          <Button onClick={onConfirm}>
            Hapus
          </Button>
        </div>
      </div>
    </div>
  )
}
