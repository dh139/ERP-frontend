export default function Select({ label, options, error, ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <select
        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        {...props}
      >
        <option value="">Select {label?.toLowerCase() || "option"}</option>
        {options?.map((opt, idx) => (
          <option key={idx} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
