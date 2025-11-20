"use client"

import { useParams, useNavigate } from "react-router-dom"
import Breadcrumbs from "../../components/Breadcrumbs"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import { mockPurchaseOrders } from "../../data/mockData"

export default function PurchaseDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const po = mockPurchaseOrders.find((p) => p.id === id)

  if (!po) {
    return <div className="p-8">Purchase Order not found</div>
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Purchase Order Details</h1>
        <Breadcrumbs />
      </div>

      <Card header={<h2 className="text-lg font-semibold">{po.id}</h2>}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Supplier</p>
            <p className="text-lg font-semibold">{po.supplier}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <span
              className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                po.status === "Approved"
                  ? "bg-green-100 text-green-800"
                  : po.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-blue-100 text-blue-800"
              }`}
            >
              {po.status}
            </span>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Date</p>
            <p className="text-lg font-semibold">{po.date}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Amount</p>
            <p className="text-lg font-semibold">₹{po.total.toLocaleString()}</p>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <h3 className="font-semibold mb-4">Items ({po.items})</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Item listing would appear here with quantities and unit prices</p>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <Button variant="primary">Approve</Button>
          <Button variant="secondary">Reject</Button>
          <Button variant="outline" onClick={() => navigate("/purchase")}>
            Back
          </Button>
        </div>
      </Card>
    </div>
  )
}
