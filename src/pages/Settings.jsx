"use client"

import { useState } from "react"
import Breadcrumbs from "../components/Breadcrumbs"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

export default function Settings() {
  const [settings, setSettings] = useState({
    companyName: "ABC Corporation",
    email: "admin@company.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Street, NY 10001",
  })

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    alert("Settings saved!")
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <Breadcrumbs />
      </div>

      <Card className="max-w-2xl" header={<h2 className="text-lg font-semibold">Company Information</h2>}>
        <div className="space-y-6">
          <Input label="Company Name" name="companyName" value={settings.companyName} onChange={handleChange} />
          <Input label="Email" type="email" name="email" value={settings.email} onChange={handleChange} />
          <Input label="Phone" name="phone" value={settings.phone} onChange={handleChange} />
          <Input label="Address" name="address" value={settings.address} onChange={handleChange} />
          <Button variant="primary" onClick={handleSave}>
            Save Settings
          </Button>
        </div>
      </Card>
    </div>
  )
}
