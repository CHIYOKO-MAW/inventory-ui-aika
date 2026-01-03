export default function Badge({ children, variant = "default" }) {
  const styles = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
  }

  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  )
}
