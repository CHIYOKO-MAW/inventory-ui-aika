import { PackageSearch } from "lucide-react"

export default function EmptyState({ title, description, action }) {
  return (
    <div className="
      flex flex-col items-center text-center
      bg-panel dark:bg-darkPanel
      border border-dashed border-border dark:border-darkBorder
      rounded-xl p-12
    ">
      <div className="p-3 rounded-full bg-soft-gradient mb-4">
        <PackageSearch size={26} className="text-primary" />
      </div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-muted mt-1 max-w-sm">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}
