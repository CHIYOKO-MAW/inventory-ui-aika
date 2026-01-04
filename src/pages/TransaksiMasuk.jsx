import React from "react";
import {
  Plus,
  PackagePlus,
  Calendar,
  FileText,
  Warehouse,
} from "lucide-react";

/**
 * UI ONLY — dummy statis
 * Struktur final, aman untuk integrasi Supabase nanti
 */

const HISTORY = [
  {
    id: 1,
    date: "2026-01-03",
    product: "Semen Tiga Roda 40kg",
    supplier: "PT Semen Nusantara",
    qty: 50,
    note: "Pengiriman rutin",
  },
  {
    id: 2,
    date: "2026-01-01",
    product: "Besi Beton 12mm",
    supplier: "UD Baja Sentosa",
    qty: 20,
    note: "-",
  },
];

export default function TransaksiMasuk() {
  const isEmpty = HISTORY.length === 0;

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Transaksi Barang Masuk
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Pencatatan penambahan stok dari supplier
        </p>
      </div>

      {/* ================= FORM ================= */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-slate-900 mb-4">
          Form Barang Masuk
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* PRODUK */}
          <div>
            <label className="text-xs font-medium text-slate-600">
              Produk
            </label>
            <div className="relative mt-1">
              <Warehouse className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <select className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
                <option>Pilih produk</option>
                <option>Semen Tiga Roda 40kg</option>
                <option>Besi Beton 12mm</option>
              </select>
            </div>
          </div>

          {/* SUPPLIER */}
          <div>
            <label className="text-xs font-medium text-slate-600">
              Supplier
            </label>
            <div className="relative mt-1">
              <PackagePlus className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <select className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
                <option>Pilih supplier</option>
                <option>PT Semen Nusantara</option>
                <option>UD Baja Sentosa</option>
              </select>
            </div>
          </div>

          {/* JUMLAH */}
          <div>
            <label className="text-xs font-medium text-slate-600">
              Jumlah
            </label>
            <input
              type="number"
              placeholder="Masukkan jumlah"
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>

          {/* TANGGAL */}
          <div>
            <label className="text-xs font-medium text-slate-600">
              Tanggal
            </label>
            <div className="relative mt-1">
              <Calendar className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="date"
                className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>

          {/* CATATAN */}
          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-slate-600">
              Catatan (opsional)
            </label>
            <div className="relative mt-1">
              <FileText className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <textarea
                rows={3}
                placeholder="Catatan tambahan"
                className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
            <Plus className="h-4 w-4" />
            Simpan Transaksi
          </button>
        </div>
      </div>

      {/* ================= HISTORY ================= */}
      <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200">
          <h2 className="text-sm font-semibold text-slate-900">
            Riwayat Barang Masuk
          </h2>
        </div>

        {!isEmpty ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr className="text-left text-slate-500">
                  <th className="px-5 py-3 font-medium">Tanggal</th>
                  <th className="px-5 py-3 font-medium">Produk</th>
                  <th className="px-5 py-3 font-medium">Supplier</th>
                  <th className="px-5 py-3 font-medium">Jumlah</th>
                  <th className="px-5 py-3 font-medium">Catatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {HISTORY.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4 text-slate-700">
                      {row.date}
                    </td>
                    <td className="px-5 py-4 text-slate-900 font-medium">
                      {row.product}
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      {row.supplier}
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      {row.qty}
                    </td>
                    <td className="px-5 py-4 text-slate-500">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

/* ================= EMPTY STATE ================= */

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
        <PackagePlus className="h-6 w-6 text-slate-400" />
      </div>
      <h3 className="mt-4 text-sm font-medium text-slate-900">
        Belum ada transaksi
      </h3>
      <p className="mt-1 text-xs text-slate-500 max-w-xs">
        Catat transaksi barang masuk untuk menambah stok inventori.
      </p>
    </div>
  );
}
