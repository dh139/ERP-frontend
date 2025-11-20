"use client"

import { useState } from "react"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Select from "../../components/ui/Select"

export default function StockInOut() {
  const [formData, setFormData] = useState({
    type: "in",
    item: "",
    quantity: "",
    reason: "",
    reference: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ type: "in", item: "", quantity: "", reason: "", reference: "" })
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Stock In / Out</h1>
        <Breadcrumbs />
      </div>

      <Card className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Select
            label="Transaction Type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            options={[
              { value: "in", label: "Stock In" },
              { value: "out", label: "Stock Out" },
            ]}
          />

          <Input
            label="Item Name"
            name="item"
            value={formData.item}
            onChange={handleChange}
            placeholder="Search item..."
            required
          />

          <Input
            label="Quantity"
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />

          <Select
            label="Reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            options={
              formData.type === "in" ? ["Purchase", "Transfer", "Return"] : ["Sale", "Damage", "Transfer", "Adjustment"]
            }
            required
          />

          <Input
            label="Reference Number"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
            placeholder="PO/SO number..."
          />

          <Button variant="primary" type="submit" className="w-full">
            Record Transaction
          </Button>
        </form>
      </Card>
    </div>
  )
}
