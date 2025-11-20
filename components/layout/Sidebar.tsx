"use client"
import { BarChart3, ShoppingCart, Package, Users, DollarSign, Settings } from "lucide-react"

const menuItems = [
  { icon: BarChart3, label: "Dashboard", href: "#" },
  {
    label: "Purchase",
    icon: ShoppingCart,
    submenu: [
      { label: "PO List", href: "#" },
      { label: "Create PO", href: "#" },
    ],
  },
  {
    label: "Inventory",
    icon: Package,
    submenu: [
      { label: "Items", href: "#" },
      { label: "Warehouses", href: "#" },
    ],
  },
  {
    label: "Sales",
    icon: ShoppingCart,
    submenu: [
      { label: "Orders", href: "#" },
      { label: "Invoices", href: "#" },
    ],
  },
  {
    label: "HR",
    icon: Users,
    submenu: [
      { label: "Employees", href: "#" },
      { label: "Attendance", href: "#" },
    ],
  },
  {
    label: "Finance",
    icon: DollarSign,
    submenu: [
      { label: "Expenses", href: "#" },
      { label: "Reports", href: "#" },
    ],
  },
  { icon: Settings, label: "Settings", href: "#" },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground border-r border-border flex flex-col overflow-hidden">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold">ERP System</h1>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((item, idx) => {
          const Icon = item.icon
          return (
            <div key={idx}>
              {item.submenu ? (
                <div className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent transition-colors">
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                  <div className="ml-4 space-y-1">
                    {item.submenu.map((sub, sidx) => (
                      <a
                        key={sidx}
                        href={sub.href}
                        className="block px-4 py-2 text-sm rounded-lg hover:bg-sidebar-accent"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent transition-colors"
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </a>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
