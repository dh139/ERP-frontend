"use client"

import { useState } from "react"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Input from "../../components/ui/Input"
import Table from "../../components/ui/Table"
import { mockAttendance } from "../../data/mockData"

export default function AttendanceList() {
  const [searchTerm, setSearchTerm] = useState("")

  const columns = [
    { key: "employee", label: "Employee" },
    { key: "date", label: "Date" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            row.status === "Present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    { key: "checkIn", label: "Check In" },
    { key: "checkOut", label: "Check Out" },
  ]

  const filtered = mockAttendance.filter((att) => att.employee.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Attendance</h1>
        <Breadcrumbs />
      </div>

      <Card>
        <div className="mb-6 md:w-64">
          <Input placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <Table columns={columns} data={filtered} />
      </Card>
    </div>
  )
}
