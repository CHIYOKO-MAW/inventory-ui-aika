export default function Badge({ icon: Icon, label, variant = "info" }) {
  const map = {
    info: "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300",
    warning: "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300",
    danger: "bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-300",
  }
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${map[variant]}`}>
      {Icon && <Icon size={12} />}
      {label}
    </span>
  )
}
