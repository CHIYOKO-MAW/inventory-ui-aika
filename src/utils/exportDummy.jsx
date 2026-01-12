import jsPDF from "jspdf";
import "jspdf-autotable";

export function exportLaporanPDF({ transaksi, products, suppliers }) {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Laporan Transaksi Inventori", 14, 15);

  doc.setFontSize(10);
  doc.text(
    `Tanggal Cetak: ${new Date().toLocaleDateString()}`,
    14,
    22
  );

  const rows = transaksi.map((t, i) => {
    const product = products.find((p) => p.id === t.productId);
    const supplier = suppliers.find((s) => s.id === t.supplierId);

    return [
      i + 1,
      new Date(t.tanggal).toLocaleDateString(),
      product?.nama || "-",
      supplier?.nama || "-",
      t.tipe,
      t.qty,
      `Rp ${t.total.toLocaleString()}`,
    ];
  });

  doc.autoTable({
    startY: 30,
    head: [
      ["No", "Tanggal", "Barang", "Supplier", "Jenis", "Qty", "Total"],
    ],
    body: rows,
    styles: { fontSize: 9 },
    headStyles: {
      fillColor: [250, 204, 21],
      textColor: 0,
    },
  });

  const uangMasuk = transaksi
    .filter((t) => t.tipe === "KELUAR")
    .reduce((s, t) => s + t.total, 0);

  const uangKeluar = transaksi
    .filter((t) => t.tipe === "MASUK")
    .reduce((s, t) => s + t.total, 0);

  const y = doc.lastAutoTable.finalY + 10;

  doc.setFontSize(11);
  doc.text(`Total Uang Masuk  : Rp ${uangMasuk.toLocaleString()}`, 14, y);
  doc.text(`Total Uang Keluar : Rp ${uangKeluar.toLocaleString()}`, 14, y + 6);

  doc.save("laporan-transaksi.pdf");
}
