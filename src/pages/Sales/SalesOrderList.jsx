"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Table from "../../components/ui/Table"
import { mockSalesOrders } from "../../data/mockData"

export default function SalesOrderList() {
  const [searchTerm, setSearchTerm] = useState("")

  const columns = [
    { key: "id", label: "Order Number" },
    { key: "customer", label: "Customer" },
    { key: "items", label: "Items" },
    { key: "date", label: "Date" },
    { key: "total", label: "Total" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            row.status === "Completed"
              ? "bg-green-100 text-green-800"
              : row.status === "Shipped"
                ? "bg-blue-100 text-blue-800"
                : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ]

  const filtered = mockSalesOrders.filter(
    (so) =>
      so.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      so.customer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Sales Orders</h1>
        <Breadcrumbs />
      </div>

      <Card>
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
          <div className="w-full md:w-64">
            <Input placeholder="Search order..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <Link to="/sales/create">
            <Button variant="primary" className="flex items-center gap-2 w-full md:w-auto">
              <Plus size={20} /> Create Order
            </Button>
          </Link>
        </div>
        <Table columns={columns} data={filtered} />
      </Card>
    </div>
  )
}
