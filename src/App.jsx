"use client"

import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import Dashboard from "./pages/Dashboard"
import PurchaseList from "./pages/Purchase/PurchaseList"
import CreatePurchase from "./pages/Purchase/CreatePurchase"
import PurchaseDetails from "./pages/Purchase/PurchaseDetails"
import SupplierList from "./pages/Purchase/SupplierList"
import InventoryList from "./pages/Inventory/InventoryList"
import AddItem from "./pages/Inventory/AddItem"
import StockInOut from "./pages/Inventory/StockInOut"
import WarehouseList from "./pages/Inventory/WarehouseList"
import SalesOrderList from "./pages/Sales/SalesOrderList"
import AddSalesOrder from "./pages/Sales/AddSalesOrder"
import InvoicesList from "./pages/Sales/InvoicesList"
import CustomerList from "./pages/Sales/CustomerList"
import EmployeeDirectory from "./pages/HR/EmployeeDirectory"
import EmployeeProfile from "./pages/HR/EmployeeProfile"
import AttendanceList from "./pages/HR/AttendanceList"
import LeaveManagement from "./pages/HR/LeaveManagement"
import ExpensesList from "./pages/Finance/ExpensesList"
import AddExpense from "./pages/Finance/AddExpense"
import ReportView from "./pages/Finance/ReportView"
import Settings from "./pages/Settings"
import Layout from "./components/Layout"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {isAuthenticated ? (
        <Route element={<Layout onLogout={handleLogout} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/purchase" element={<PurchaseList />} />
          <Route path="/purchase/create" element={<CreatePurchase />} />
          <Route path="/purchase/:id" element={<PurchaseDetails />} />
          <Route path="/suppliers" element={<SupplierList />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/inventory/add" element={<AddItem />} />
          <Route path="/inventory/stock" element={<StockInOut />} />
          <Route path="/inventory/warehouses" element={<WarehouseList />} />
          <Route path="/sales" element={<SalesOrderList />} />
          <Route path="/sales/create" element={<AddSalesOrder />} />
          <Route path="/invoices" element={<InvoicesList />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/hr/employees" element={<EmployeeDirectory />} />
          <Route path="/hr/employees/:id" element={<EmployeeProfile />} />
          <Route path="/hr/attendance" element={<AttendanceList />} />
          <Route path="/hr/leaves" element={<LeaveManagement />} />
          <Route path="/finance/expenses" element={<ExpensesList />} />
          <Route path="/finance/expenses/add" element={<AddExpense />} />
          <Route path="/finance/reports" element={<ReportView />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  )
}

export default App
