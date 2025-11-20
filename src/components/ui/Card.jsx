export default function Card({ children, className = "", header, footer }) {
  return (
    <div className={`bg-card rounded-lg border border-border p-6 ${className}`}>
      {header && <div className="border-b border-border pb-4 mb-4">{header}</div>}
      {children}
      {footer && <div className="border-t border-border pt-4 mt-4">{footer}</div>}
    </div>
  )
}
