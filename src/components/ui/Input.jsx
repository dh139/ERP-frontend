export default function Input({ label, error, ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input
        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        {...props}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
