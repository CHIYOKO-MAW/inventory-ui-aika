export default function DataTable({ columns, data }) {
  return (
    <div className="bg-white border rounded-xl overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-slate-100 text-slate-600">
          <tr>
            {columns.map((col) => (
              <th key={col.accessor} className="px-4 py-3 text-left">
                {col.header}
              </th>
            ))}
            <th className="px-4 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t">
              {columns.map((col) => (
                <td key={col.accessor} className="px-4 py-3">
                  {row[col.accessor]}
                </td>
              ))}
              <td className="px-4 py-3 space-x-2">
                <button className="text-xs text-blue-600 hover:underline">
                  Edit
                </button>
                <button className="text-xs text-red-600 hover:underline">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
