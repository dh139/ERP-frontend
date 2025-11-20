export const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Manager" },
]

export const mockPurchaseOrders = [
  { id: "PO-001", supplier: "Supplier A", items: 5, status: "Approved", date: "2024-01-15", total: 5000 },
  { id: "PO-002", supplier: "Supplier B", items: 3, status: "Pending", date: "2024-01-16", total: 3500 },
  { id: "PO-003", supplier: "Supplier C", items: 8, status: "Received", date: "2024-01-14", total: 8900 },
]

export const mockSuppliers = [
  { id: 1, name: "Supplier A", contact: "contact@suppliera.com", phone: "123-456-7890", city: "New York" },
  { id: 2, name: "Supplier B", contact: "contact@supplierb.com", phone: "123-456-7891", city: "Los Angeles" },
  { id: 3, name: "Supplier C", contact: "contact@supplierc.com", phone: "123-456-7892", city: "Chicago" },
]

export const mockInventoryItems = [
  { id: 1, name: "Item A", sku: "SKU-001", quantity: 150, price: 25, warehouse: "WH-1", status: "In Stock" },
  { id: 2, name: "Item B", sku: "SKU-002", quantity: 45, price: 50, warehouse: "WH-2", status: "Low Stock" },
  { id: 3, name: "Item C", sku: "SKU-003", quantity: 200, price: 15, warehouse: "WH-1", status: "In Stock" },
  { id: 4, name: "Item D", sku: "SKU-004", quantity: 5, price: 100, warehouse: "WH-3", status: "Critical" },
]

export const mockWarehouses = [
  { id: 1, name: "Warehouse 1", location: "New York", capacity: 10000, used: 7500 },
  { id: 2, name: "Warehouse 2", location: "Los Angeles", capacity: 15000, used: 9200 },
  { id: 3, name: "Warehouse 3", location: "Chicago", capacity: 8000, used: 4300 },
]

export const mockSalesOrders = [
  { id: "SO-001", customer: "Customer A", items: 4, status: "Completed", date: "2024-01-15", total: 4500 },
  { id: "SO-002", customer: "Customer B", items: 2, status: "Shipped", date: "2024-01-16", total: 2200 },
  { id: "SO-003", customer: "Customer C", items: 6, status: "Pending", date: "2024-01-17", total: 6800 },
]

export const mockCustomers = [
  {
    id: 1,
    name: "Customer A",
    email: "customer.a@example.com",
    phone: "111-222-3333",
    city: "New York",
    totalOrders: 15,
  },
  { id: 2, name: "Customer B", email: "customer.b@example.com", phone: "111-222-3334", city: "Boston", totalOrders: 8 },
  { id: 3, name: "Customer C", email: "customer.c@example.com", phone: "111-222-3335", city: "Miami", totalOrders: 12 },
]

export const mockInvoices = [
  { id: "INV-001", customer: "Customer A", amount: 4500, date: "2024-01-15", status: "Paid" },
  { id: "INV-002", customer: "Customer B", amount: 2200, date: "2024-01-16", status: "Pending" },
  { id: "INV-003", customer: "Customer C", amount: 6800, date: "2024-01-17", status: "Paid" },
]

export const mockEmployees = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    department: "Sales",
    position: "Sales Manager",
    joinDate: "2022-03-15",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    department: "HR",
    position: "HR Officer",
    joinDate: "2021-06-20",
  },
  {
    id: 3,
    name: "Carol White",
    email: "carol@example.com",
    department: "IT",
    position: "Developer",
    joinDate: "2023-01-10",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@example.com",
    department: "Finance",
    position: "Accountant",
    joinDate: "2020-11-05",
  },
]

export const mockAttendance = [
  { id: 1, employee: "Alice Johnson", date: "2024-01-17", status: "Present", checkIn: "09:00", checkOut: "17:30" },
  { id: 2, employee: "Bob Smith", date: "2024-01-17", status: "Present", checkIn: "09:15", checkOut: "17:45" },
  { id: 3, employee: "Carol White", date: "2024-01-17", status: "Absent", checkIn: "-", checkOut: "-" },
  { id: 4, employee: "David Brown", date: "2024-01-17", status: "Present", checkIn: "09:05", checkOut: "17:35" },
]

export const mockLeaves = [
  {
    id: 1,
    employee: "Alice Johnson",
    type: "Vacation",
    startDate: "2024-02-01",
    endDate: "2024-02-05",
    days: 5,
    status: "Approved",
  },
  {
    id: 2,
    employee: "Bob Smith",
    type: "Sick Leave",
    startDate: "2024-01-18",
    endDate: "2024-01-18",
    days: 1,
    status: "Pending",
  },
  {
    id: 3,
    employee: "Carol White",
    type: "Vacation",
    startDate: "2024-03-10",
    endDate: "2024-03-17",
    days: 8,
    status: "Approved",
  },
]

export const mockExpenses = [
  {
    id: 1,
    description: "Office Supplies",
    category: "Supplies",
    amount: 250,
    date: "2024-01-15",
    approver: "John Doe",
    status: "Approved",
  },
  {
    id: 2,
    description: "Travel Expense",
    category: "Travel",
    amount: 1500,
    date: "2024-01-16",
    approver: "Jane Smith",
    status: "Pending",
  },
  {
    id: 3,
    description: "Equipment Purchase",
    category: "Equipment",
    amount: 5000,
    date: "2024-01-14",
    approver: "John Doe",
    status: "Approved",
  },
]

export const mockReports = {
  revenue: 250000,
  expenses: 150000,
  profit: 100000,
  profitMargin: 40,
  monthlyTrend: [
    { month: "Jan", revenue: 20000, expenses: 12000 },
    { month: "Feb", revenue: 25000, expenses: 14000 },
    { month: "Mar", revenue: 30000, expenses: 16000 },
    { month: "Apr", revenue: 28000, expenses: 15000 },
    { month: "May", revenue: 32000, expenses: 18000 },
    { month: "Jun", revenue: 35000, expenses: 19000 },
  ],
}

export const mockActivityLog = [
  { id: 1, action: "PO-001 approved", user: "Jane Smith", time: "2 hours ago", type: "purchase" },
  { id: 2, action: "Stock received for Item A", user: "John Doe", time: "4 hours ago", type: "inventory" },
  { id: 3, action: "Invoice INV-001 sent", user: "Alice Johnson", time: "6 hours ago", type: "sales" },
  { id: 4, action: "Employee leave approved", user: "Bob Smith", time: "1 day ago", type: "hr" },
]
