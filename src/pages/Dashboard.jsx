import { BarChart3, ShoppingCart, Package, Users } from "lucide-react"
import Breadcrumbs from "../components/Breadcrumbs"
import Card from "../components/ui/Card"
import KPICard from "../components/ui/KPICard"
import BarChart from "../components/charts/BarChart"
import PieChart from "../components/charts/PieChart"
import { mockActivityLog } from "../data/mockData"

export default function Dashboard() {
  const kpiData = [
    { title: "Total Sales", value: "₹250,000", unit: "This Month", change: 12.5, icon: ShoppingCart, color: "primary" },
    { title: "Purchase Orders", value: "45", unit: "Active", change: -3.2, icon: Package, color: "secondary" },
    { title: "Inventory Value", value: "₹1,250,000", unit: "Total", change: 8.3, icon: BarChart3, color: "accent" },
    { title: "Employees", value: "156", unit: "Active", change: 5, icon: Users, color: "primary" },
  ]

  const barChartData = [
    { label: "Mon", value: 4000 },
    { label: "Tue", value: 5200 },
    { label: "Wed", value: 4800 },
    { label: "Thu", value: 6100 },
    { label: "Fri", value: 5900 },
    { label: "Sat", value: 3200 },
    { label: "Sun", value: 2100 },
  ]

  const pieChartData = [
    { label: "In Stock", value: 1200 },
    { label: "Low Stock", value: 340 },
    { label: "Out of Stock", value: 120 },
  ]

  return (
    <div className="p-4 md:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, idx) => (
          <KPICard key={idx} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart title="Weekly Sales" data={barChartData} />
        <PieChart title="Inventory Status" data={pieChartData} />
      </div>

      <Card header={<h2 className="text-lg font-semibold">Recent Activity</h2>}>
        <div className="space-y-4">
          {mockActivityLog.map((activity) => (
            <div key={activity.id} className="flex items-start justify-between p-3 hover:bg-secondary rounded-lg">
              <div>
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-muted-foreground">{activity.user}</p>
              </div>
              <span className="text-sm text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
