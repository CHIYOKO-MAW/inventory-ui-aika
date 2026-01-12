import { useState } from "react";
import { useInventory } from "../../context/InventoryContext";
import { supabase } from "../../lib/supabase";

export default function ProductForm({ initialData, onClose }) {
  const { addProduct, updateProduct } = useInventory();

  const [form, setForm] = useState(
    initialData || {
      nama: "",
      hargaJual: "",
      imageUrl: "",
    }
  );

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function uploadImage(file) {
    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("products")
      .upload(fileName, file);

    if (error) throw error;

    const { data } = supabase.storage
      .from("products")
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = form.imageUrl;

      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      const payload = {
        ...form,
        imageUrl,
        hargaJual: Number(form.hargaJual),
      };

      if (initialData) {
        updateProduct(initialData.id, payload);
      } else {
        addProduct(payload);
      }

      onClose();
    } catch (err) {
      alert("Upload image gagal");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4">
      <h2>{initialData ? "Edit Barang" : "Tambah Barang"}</h2>

      <input
        name="nama"
        placeholder="Nama Barang"
        value={form.nama}
        onChange={handleChange}
        required
      />

      <input
        name="hargaJual"
        type="number"
        placeholder="Harga Jual"
        value={form.hargaJual}
        onChange={handleChange}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Menyimpan..." : "Simpan"}
      </button>
    </form>
  );
}
