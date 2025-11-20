"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Input from "../../components/ui/Input"
import { mockEmployees } from "../../data/mockData"

export default function EmployeeDirectory() {
  const [searchTerm, setSearchTerm] = useState("")

  const filtered = mockEmployees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Employee Directory</h1>
        <Breadcrumbs />
      </div>

      <Card>
        <div className="mb-6 md:w-64">
          <Input placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((emp) => (
            <Link key={emp.id} to={`/hr/employees/${emp.id}`}>
              <div className="border border-border rounded-lg p-4 hover:bg-secondary transition-colors">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-3">
                  {emp.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-semibold">{emp.name}</h3>
                <p className="text-sm text-muted-foreground">{emp.position}</p>
                <p className="text-xs text-muted-foreground mt-1">{emp.department}</p>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  )
}
