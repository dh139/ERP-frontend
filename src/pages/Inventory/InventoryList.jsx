"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Table from "../../components/ui/Table"
import { mockInventoryItems } from "../../data/mockData"

export default function InventoryList() {
  const [searchTerm, setSearchTerm] = useState("")

  const columns = [
    { key: "name", label: "Item Name" },
    { key: "sku", label: "SKU" },
    { key: "quantity", label: "Quantity" },
    { key: "price", label: "Unit Price" },
    { key: "warehouse", label: "Warehouse" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            row.status === "In Stock"
              ? "bg-green-100 text-green-800"
              : row.status === "Low Stock"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ]

  const filtered = mockInventoryItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Inventory Items</h1>
        <Breadcrumbs />
      </div>

      <Card>
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
          <div className="w-full md:w-64">
            <Input placeholder="Search items..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <Link to="/inventory/add">
            <Button variant="primary" className="flex items-center gap-2 w-full md:w-auto">
              <Plus size={20} /> Add Item
            </Button>
          </Link>
        </div>
        <Table columns={columns} data={filtered} />
      </Card>
    </div>
  )
}
