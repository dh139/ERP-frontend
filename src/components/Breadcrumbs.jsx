import { useLocation } from "react-router-dom"
import { ChevronRight } from "lucide-react"

export default function Breadcrumbs() {
  const location = useLocation()
  const paths = location.pathname.split("/").filter((p) => p)

  const breadcrumbLabels = {
    dashboard: "Dashboard",
    purchase: "Purchase",
    create: "Create",
    inventory: "Inventory",
    sales: "Sales",
    hr: "HR",
    finance: "Finance",
    employees: "Employees",
    attendance: "Attendance",
    leaves: "Leave Management",
    expenses: "Expenses",
    reports: "Reports",
    settings: "Settings",
  }

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
      {paths.map((path, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {idx > 0 && <ChevronRight size={16} />}
          <span className="capitalize">{breadcrumbLabels[path] || path}</span>
        </div>
      ))}
    </div>
  )
}
