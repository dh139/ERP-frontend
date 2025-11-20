"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Select from "../../components/ui/Select"
import { mockSuppliers } from "../../data/mockData"

export default function CreatePurchase() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    supplier: "",
    date: "",
    dueDate: "",
    items: 1,
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/purchase")
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Create Purchase Order</h1>
        <Breadcrumbs />
      </div>

      <Card className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Select
            label="Supplier"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            options={mockSuppliers.map((s) => ({ value: s.id, label: s.name }))}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="PO Date" type="date" name="date" value={formData.date} onChange={handleChange} required />
            <Input
              label="Due Date"
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="Number of Items"
            type="number"
            name="items"
            value={formData.items}
            onChange={handleChange}
            min="1"
            required
          />

          <div className="flex gap-4">
            <Button variant="primary" type="submit">
              Create PO
            </Button>
            <Button variant="outline" type="button" onClick={() => navigate("/purchase")}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
