import jsPDF from "jspdf";
import "jspdf-autotable";

export function exportLaporanPDF({ transaksi, products, suppliers }) {
  const doc = new jsPDF();

  doc.text("Laporan Transaksi Inventori", 14, 15);

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
    startY: 25,
    head: [["No", "Tanggal", "Barang", "Supplier", "Jenis", "Qty", "Total"]],
    body: rows,
  });

  doc.save("laporan-transaksi.pdf");
}
