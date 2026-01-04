export default function PageWrapper({ children }) {
  return (
    <div
      className="
        w-full
        px-4 sm:px-6 lg:px-8
        space-y-8
      "
    >
      {children}
    </div>
  )
}
