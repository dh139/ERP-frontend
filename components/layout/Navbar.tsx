"use client"
import { Bell, LogOut } from "lucide-react"

export default function Navbar({ onLogout }: { onLogout: () => void }) {
  return (
    <nav className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
      <div />
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-secondary rounded-lg relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 bg-destructive text-xs rounded-full w-5 h-5 flex items-center justify-center text-white">
            3
          </span>
        </button>
        <div className="flex items-center gap-2 pl-4 border-l border-border">
          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
            JD
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
        <button onClick={onLogout} className="p-2 hover:bg-secondary rounded-lg">
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  )
}
