import { motion } from "framer-motion"

export default function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240 }}
      className="
        relative overflow-hidden
        bg-panel dark:bg-darkPanel
        border border-border dark:border-darkBorder
        rounded-xl p-6 shadow-soft
      "
    >
      {/* subtle gradient */}
      <div className="absolute inset-0 bg-soft-gradient pointer-events-none" />

      <div className="relative">
        <p className="text-sm text-muted">{title}</p>
        <p className="text-3xl font-semibold mt-2">{value}</p>
      </div>
    </motion.div>
  )
}
