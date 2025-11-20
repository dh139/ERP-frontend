export default function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-secondary border-b border-border">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="text-left px-4 py-2 font-semibold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="hover:bg-secondary/50">
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="px-4 py-3">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
