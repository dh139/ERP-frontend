"use client"

import { useState } from "react"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Input from "../../components/ui/Input"
import Table from "../../components/ui/Table"
import { mockInvoices } from "../../data/mockData"

export default function InvoicesList() {
  const [searchTerm, setSearchTerm] = useState("")

  const columns = [
    { key: "id", label: "Invoice Number" },
    { key: "customer", label: "Customer" },
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            row.status === "Paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ]

  const filtered = mockInvoices.filter(
    (inv) =>
      inv.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.customer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Invoices</h1>
        <Breadcrumbs />
      </div>

      <Card>
        <div className="mb-6 md:w-64">
          <Input placeholder="Search invoices..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <Table columns={columns} data={filtered} />
      </Card>
    </div>
  )
}
