import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import BarChart from "../../components/charts/BarChart"
import { mockReports } from "../../data/mockData"

export default function ReportView() {
  const chartData = mockReports.monthlyTrend.map((item) => ({
    label: item.month,
    value: item.revenue - item.expenses,
  }))

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Financial Reports</h1>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <p className="text-muted-foreground text-sm mb-2">Total Revenue</p>
          <p className="text-3xl font-bold">₹{mockReports.revenue.toLocaleString()}</p>
        </Card>
        <Card>
          <p className="text-muted-foreground text-sm mb-2">Total Expenses</p>
          <p className="text-3xl font-bold">₹{mockReports.expenses.toLocaleString()}</p>
        </Card>
        <Card>
          <p className="text-muted-foreground text-sm mb-2">Net Profit</p>
          <p className="text-3xl font-bold text-green-600">₹{mockReports.profit.toLocaleString()}</p>
        </Card>
      </div>

      <BarChart title="Monthly Profit Trend" data={chartData} />

      <Card header={<h2 className="text-lg font-semibold">P&L Summary</h2>}>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <span>Revenue</span>
            <span className="font-semibold">₹{mockReports.revenue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <span>Expenses</span>
            <span className="font-semibold">₹{mockReports.expenses.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pt-2 font-bold text-lg">
            <span>Net Profit</span>
            <span className="text-green-600">₹{mockReports.profit.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Profit Margin</span>
            <span>{mockReports.profitMargin}%</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
