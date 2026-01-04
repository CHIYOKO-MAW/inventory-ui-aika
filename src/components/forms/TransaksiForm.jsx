import { useState } from "react";
import { useInventory } from "../../context/InventoryContext";

export default function TransaksiForm({ type }) {
  const { addTransaksi } = useInventory();
  const [form, setForm] = useState({
    tanggal: "",
    namaBarang: "",
    jumlah: "",
    keterangan: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaksi({ ...form, jenis: type });
    setForm({ tanggal: "", namaBarang: "", jumlah: "", keterangan: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <input
        type="date"
        value={form.tanggal}
        onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
        className="input"
        required
      />
      <input
        type="text"
        placeholder="Nama Barang"
        value={form.namaBarang}
        onChange={(e) => setForm({ ...form, namaBarang: e.target.value })}
        className="input"
        required
      />
      <input
        type="number"
        placeholder="Jumlah"
        value={form.jumlah}
        onChange={(e) => setForm({ ...form, jumlah: e.target.value })}
        className="input"
        required
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg px-4"
      >
        Simpan
      </button>
    </form>
  );
}
