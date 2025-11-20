"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Select from "../../components/ui/Select"

export default function AddExpense() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    amount: "",
    date: "",
    notes: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/finance/expenses")
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Add Expense</h1>
        <Breadcrumbs />
      </div>

      <Card className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label="Description" name="description" value={formData.description} onChange={handleChange} required />

          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={["Supplies", "Travel", "Equipment", "Utilities", "Other"]}
            required
          />

          <Input label="Amount" type="number" name="amount" value={formData.amount} onChange={handleChange} required />

          <Input label="Date" type="date" name="date" value={formData.date} onChange={handleChange} required />

          <Input
            label="Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Additional notes..."
          />

          <div className="flex gap-4">
            <Button variant="primary" type="submit">
              Add Expense
            </Button>
            <Button variant="outline" type="button" onClick={() => navigate("/finance/expenses")}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
