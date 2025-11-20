import { TrendingUp, TrendingDown } from "lucide-react"

export default function KPICard({ title, value, unit, change, icon: Icon, color = "primary" }) {
  const isPositive = change >= 0

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-muted-foreground text-sm mb-1">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold">{value}</h3>
            <span className="text-muted-foreground text-sm">{unit}</span>
          </div>
          <div className="flex items-center gap-1 mt-2 text-sm">
            {isPositive ? (
              <TrendingUp size={16} className="text-green-500" />
            ) : (
              <TrendingDown size={16} className="text-red-500" />
            )}
            <span className={isPositive ? "text-green-500" : "text-red-500"}>
              {isPositive ? "+" : ""}
              {change}%
            </span>
          </div>
        </div>
        {Icon && (
          <div className={`p-3 rounded-lg bg-${color}/10 text-${color}`}>
            <Icon size={24} />
          </div>
        )}
      </div>
    </div>
  )
}
