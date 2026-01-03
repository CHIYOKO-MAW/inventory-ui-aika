export default function TransaksiKeluar() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Transaksi Barang Keluar</h1>

      <div className="bg-white p-6 rounded shadow max-w-xl">
        <input className="w-full border p-2 mb-3" placeholder="Nama Barang" />
        <input type="number" className="w-full border p-2 mb-3" placeholder="Jumlah Keluar" />
        <button className="bg-red-600 text-white px-4 py-2 rounded">Simpan</button>
      </div>
    </>
  );
}
