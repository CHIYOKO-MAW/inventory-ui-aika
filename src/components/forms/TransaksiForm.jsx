import { useState, useEffect } from "react"
import Button from "../ui/Button"

export default function TransaksiForm({ onClose, onSubmit, initialData }) {
  const [form, setForm] = useState({
    kode: "",
    barang: "",
    jumlah: "",
    tanggal: "",
  })

  const [error, setError] = useState({})

  useEffect(() => {
    if (initialData) setForm(initialData)
  }, [initialData])

  const validate = () => {
    const err = {}
    if (!form.kode) err.kode = "Kode wajib diisi"
    if (!form.barang) err.barang = "Nama barang wajib diisi"
    if (!form.jumlah || form.jumlah <= 0)
      err.jumlah = "Jumlah harus lebih dari 0"
    if (!form.tanggal) err.tanggal = "Tanggal wajib diisi"
    setError(err)
    return Object.keys(err).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    onSubmit(form)
    onClose()
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {["kode", "barang", "jumlah", "tanggal"].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium capitalize mb-1">
            {field}
          </label>
          <input
            type={field === "jumlah" ? "number" : field === "tanggal" ? "date" : "text"}
            value={form[field]}
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
            className={`w-full border rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500
              ${error[field] ? "border-red-500" : ""}`}
          />
          {error[field] && (
            <p className="text-xs text-red-500 mt-1">{error[field]}</p>
          )}
        </div>
      ))}

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="secondary" onClick={onClose}>
          Batal
        </Button>
        <Button type="submit">
          Simpan
        </Button>
      </div>
    </form>
  )
}
