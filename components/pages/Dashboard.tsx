"use client"
import { BarChart3, ShoppingCart, Package, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import Sidebar from "@/components/layout/Sidebar"
import Navbar from "@/components/layout/Navbar"

const mockKPI = [
  { title: "Total Sales", value: "₹250,000", unit: "This Month", change: 12.5, icon: ShoppingCart },
  { title: "Purchase Orders", value: "45", unit: "Active", change: -3.2, icon: Package },
  { title: "Inventory Value", value: "₹1,250,000", unit: "Total", change: 8.3, icon: BarChart3 },
  { title: "Employees", value: "156", unit: "Active", change: 5, icon: Users },
]

export default function Dashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onLogout={onLogout} />
        <main className="flex-1 overflow-auto p-8">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground mt-2">Welcome back to your ERP system</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockKPI.map((kpi, idx) => {
                const Icon = kpi.icon
                const isPositive = kpi.change >= 0
                return (
                  <Card key={idx} className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm mb-1">{kpi.title}</p>
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-2xl font-bold">{kpi.value}</h3>
                          <span className="text-muted-foreground text-sm">{kpi.unit}</span>
                        </div>
                        <div
                          className={`flex items-center gap-1 mt-2 text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}
                        >
                          <span>
                            {isPositive ? "+" : ""}
                            {kpi.change}%
                          </span>
                        </div>
                      </div>
                      <Icon className="text-primary" size={24} />
                    </div>
                  </Card>
                )
              })}
            </div>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Revenue This Month</span>
                  <span className="font-semibold">₹250,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pending Orders</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Low Stock Items</span>
                  <span className="font-semibold">8</span>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
