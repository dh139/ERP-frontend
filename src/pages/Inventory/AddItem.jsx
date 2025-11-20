"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Select from "../../components/ui/Select"

export default function AddItem() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "",
    quantity: "",
    price: "",
    warehouse: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/inventory")
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Add Inventory Item</h1>
        <Breadcrumbs />
      </div>

      <Card className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label="Item Name" name="name" value={formData.name} onChange={handleChange} required />

          <Input label="SKU" name="sku" value={formData.sku} onChange={handleChange} required />

          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={["Electronics", "Accessories", "Parts", "Other"]}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Initial Quantity"
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
            <Input
              label="Unit Price"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <Select
            label="Warehouse"
            name="warehouse"
            value={formData.warehouse}
            onChange={handleChange}
            options={["WH-1", "WH-2", "WH-3"]}
            required
          />

          <div className="flex gap-4">
            <Button variant="primary" type="submit">
              Add Item
            </Button>
            <Button variant="outline" type="button" onClick={() => navigate("/inventory")}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
