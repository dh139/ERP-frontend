"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, BarChart3, ShoppingCart, Package, Users, DollarSign, Settings } from "lucide-react"

const menuItems = [
  { icon: BarChart3, label: "Dashboard", href: "/dashboard" },
  {
    label: "Purchase",
    icon: ShoppingCart,
    submenu: [
      { label: "PO List", href: "/purchase" },
      { label: "Create PO", href: "/purchase/create" },
      { label: "Suppliers", href: "/suppliers" },
    ],
  },
  {
    label: "Inventory",
    icon: Package,
    submenu: [
      { label: "Items", href: "/inventory" },
      { label: "Add Item", href: "/inventory/add" },
      { label: "Stock In/Out", href: "/inventory/stock" },
      { label: "Warehouses", href: "/inventory/warehouses" },
    ],
  },
  {
    label: "Sales",
    icon: ShoppingCart,
    submenu: [
      { label: "Orders", href: "/sales" },
      { label: "Create Order", href: "/sales/create" },
      { label: "Invoices", href: "/invoices" },
      { label: "Customers", href: "/customers" },
    ],
  },
  {
    label: "HR",
    icon: Users,
    submenu: [
      { label: "Employees", href: "/hr/employees" },
      { label: "Attendance", href: "/hr/attendance" },
      { label: "Leave", href: "/hr/leaves" },
    ],
  },
  {
    label: "Finance",
    icon: DollarSign,
    submenu: [
      { label: "Expenses", href: "/finance/expenses" },
      { label: "Reports", href: "/finance/reports" },
    ],
  },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export default function Sidebar({ isOpen, onToggle }) {
  const location = useLocation()
  const [expandedMenu, setExpandedMenu] = useState(null)

  return (
    <>
      <aside
        className={`bg-sidebar text-sidebar-foreground transition-all duration-300 ${isOpen ? "w-64" : "w-0"} overflow-hidden flex flex-col border-r border-sidebar-border`}
      >
        <div className="p-6 flex items-center justify-between border-b border-sidebar-border">
          {isOpen && <h1 className="text-xl font-bold">ERP System</h1>}
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item, idx) => (
            <div key={idx}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => setExpandedMenu(expandedMenu === idx ? null : idx)}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                  >
                    <item.icon size={20} />
                    {isOpen && <span>{item.label}</span>}
                    {isOpen && (
                      <span className={`ml-auto transition-transform ${expandedMenu === idx ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    )}
                  </button>
                  {isOpen && expandedMenu === idx && (
                    <div className="ml-4 space-y-1 mt-1">
                      {item.submenu.map((subitem, sidx) => (
                        <Link
                          key={sidx}
                          to={subitem.href}
                          className={`block px-4 py-2 rounded-lg text-sm transition-colors ${location.pathname === subitem.href ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-accent"}`}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${location.pathname === item.href ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-accent"}`}
                >
                  <item.icon size={20} />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>
      <button onClick={onToggle} className="fixed top-4 left-4 z-50 p-2 hover:bg-accent rounded-lg md:hidden">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  )
}
