"use client"

import { Bell, LogOut, Menu } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Navbar({ onToggleSidebar, onLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate("/login")
  }

  return (
    <nav className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="p-2 hover:bg-secondary rounded-lg md:hidden">
          <Menu size={20} />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-secondary rounded-lg relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center gap-2 pl-4 border-l border-border">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground"
        >
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  )
}
