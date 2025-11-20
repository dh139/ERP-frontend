export default function PieChart({ title, data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500", "bg-purple-500"]

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        {data.map((item, idx) => {
          const percentage = (item.value / total) * 100
          return (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${colors[idx % 5]}`} />
                  <span className="text-sm">{item.label}</span>
                </div>
                <span className="text-sm font-medium">{percentage.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className={`${colors[idx % 5]} h-2 rounded-full`} style={{ width: `${percentage}%` }} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
