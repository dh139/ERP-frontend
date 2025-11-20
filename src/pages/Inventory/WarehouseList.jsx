import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Table from "../../components/ui/Table"
import { mockWarehouses } from "../../data/mockData"

export default function WarehouseList() {
  const columns = [
    { key: "name", label: "Warehouse" },
    { key: "location", label: "Location" },
    { key: "capacity", label: "Total Capacity" },
    {
      key: "utilization",
      label: "Utilization",
      render: (row) => {
        const percent = (row.used / row.capacity) * 100
        return (
          <div className="space-y-1">
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: `${percent}%` }} />
            </div>
            <span className="text-xs text-muted-foreground">{percent.toFixed(1)}%</span>
          </div>
        )
      },
    },
  ]

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Warehouses</h1>
        <Breadcrumbs />
      </div>

      <Card>
        <Table columns={columns} data={mockWarehouses} />
      </Card>
    </div>
  )
}
