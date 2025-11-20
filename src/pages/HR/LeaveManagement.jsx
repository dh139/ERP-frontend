import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Table from "../../components/ui/Table"
import { mockLeaves } from "../../data/mockData"

export default function LeaveManagement() {
  const columns = [
    { key: "employee", label: "Employee" },
    { key: "type", label: "Leave Type" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
    { key: "days", label: "Days" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            row.status === "Approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ]

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Leave Management</h1>
        <Breadcrumbs />
      </div>

      <Card>
        <Table columns={columns} data={mockLeaves} />
      </Card>
    </div>
  )
}
