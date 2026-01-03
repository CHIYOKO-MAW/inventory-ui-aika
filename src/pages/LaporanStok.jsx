import { barangDummy } from "../data/barangDummy";
import Table from "../components/Table";

export default function LaporanStok() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Laporan Stok Barang</h1>

      <div className="bg-white p-4 rounded shadow">
        <Table headers={["Kode", "Nama", "Stok", "Satuan"]}>
          {barangDummy.map(b => (
            <tr key={b.kode}>
              <td className="border p-2">{b.kode}</td>
              <td className="border p-2">{b.nama}</td>
              <td className="border p-2">{b.stok}</td>
              <td className="border p-2">{b.satuan}</td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
}
