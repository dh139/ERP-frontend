"use client"

import { useParams, useNavigate } from "react-router-dom"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import { mockEmployees } from "../../data/mockData"

export default function EmployeeProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const emp = mockEmployees.find((e) => e.id === Number.parseInt(id))

  if (!emp) {
    return <div className="p-8">Employee not found</div>
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Employee Profile</h1>
        <Breadcrumbs />
      </div>

      <Card className="max-w-2xl">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-3xl">
            {emp.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{emp.name}</h2>
            <p className="text-muted-foreground">{emp.position}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-border pt-6">
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{emp.email}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Department</p>
            <p className="font-medium">{emp.department}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Position</p>
            <p className="font-medium">{emp.position}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Join Date</p>
            <p className="font-medium">{emp.joinDate}</p>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <Button variant="primary">Edit Profile</Button>
          <Button variant="outline" onClick={() => navigate("/hr/employees")}>
            Back
          </Button>
        </div>
      </Card>
    </div>
  )
}
