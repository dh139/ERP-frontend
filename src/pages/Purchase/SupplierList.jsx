"use client"

import { useState } from "react"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Input from "../../components/ui/Input"
import Table from "../../components/ui/Table"
import { mockSuppliers } from "../../data/mockData"

export default function SupplierList() {
  const [searchTerm, setSearchTerm] = useState("")

  const columns = [
    { key: "name", label: "Supplier Name" },
    { key: "contact", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "city", label: "City" },
  ]

  const filtered = mockSuppliers.filter((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Suppliers</h1>
        <Breadcrumbs />
      </div>

      <Card>
        <div className="mb-6 md:w-64">
          <Input placeholder="Search suppliers..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <Table columns={columns} data={filtered} />
      </Card>
    </div>
  )
}
