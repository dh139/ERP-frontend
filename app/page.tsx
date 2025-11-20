"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import LoginPage from "@/components/pages/LoginPage"
import Dashboard from "@/components/pages/Dashboard"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />
  }

  return <Dashboard onLogout={handleLogout} />
}
