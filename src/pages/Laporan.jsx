import { useState } from "react";
import { useInventory } from "../context/InventoryContext";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Laporan() {
  const { getRiwayatTransaksi } = useInventory();
  const transaksi = getRiwayatTransaksi();

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  /* ================= FILTER DATA ================= */
  const filtered = transaksi.filter((t) => {
    const d = new Date(t.date).toISOString().split("T")[0];
    if (start && d < start) return false;
    if (end && d > end) return false;
    return true;
  });

  /* ================= RINGKASAN ================= */
  const totalMasuk = filtered
    .filter((t) => t.tipe === "MASUK")
    .reduce((sum, t) => sum + t.total, 0);

  const totalKeluar = filtered
    .filter((t) => t.tipe === "KELUAR")
    .reduce((sum, t) => sum + t.total, 0);

  /* ================= EXPORT PDF ================= */
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(14);
    doc.text("Laporan Transaksi Inventori", 14, 15);

    doc.setFontSize(10);
    doc.text(
      `Periode: ${start || "-"} s/d ${end || "-"}`,
      14,
      22
    );

    const tableColumn = ["Tanggal", "Tipe", "Total (Rp)"];
    const tableRows = filtered.map((t) => [
      new Date(t.date).toLocaleDateString(),
      t.tipe,
      t.total.toLocaleString(),
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    const finalY = doc.lastAutoTable.finalY || 30;

    doc.text(
      `Total Uang Masuk: Rp ${totalMasuk.toLocaleString()}`,
      14,
      finalY + 10
    );

    doc.text(
      `Total Uang Keluar: Rp ${totalKeluar.toLocaleString()}`,
      14,
      finalY + 16
    );

    doc.save("laporan-inventori.pdf");
  };

  /* ================= UI ================= */
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          Laporan Transaksi
        </h1>

        <button
          type="button"
          onClick={exportPDF}
          className="btn-primary"
        >
          Export PDF
        </button>
      </div>

      {/* FILTER */}
      <div className="card p-6 flex gap-4 flex-wrap">
        <div>
          <label className="text-sm">Dari</label>
          <input
            type="date"
            className="input"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm">Sampai</label>
          <input
            type="date"
            className="input"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
      </div>

      {/* RINGKASAN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-5">
          <p>Total Uang Masuk</p>
          <h2 className="text-green-600">
            Rp {totalMasuk.toLocaleString()}
          </h2>
        </div>

        <div className="card p-5">
          <p>Total Uang Keluar</p>
          <h2 className="text-red-600">
            Rp {totalKeluar.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* TABEL */}
      <div className="card p-6">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Tipe</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id}>
                <td>
                  {new Date(t.date).toLocaleDateString()}
                </td>
                <td>{t.tipe}</td>
                <td>
                  Rp {t.total.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <p className="text-sm text-slate-400">
            Tidak ada data pada periode ini
          </p>
        )}
      </div>
    </div>
  );
}
