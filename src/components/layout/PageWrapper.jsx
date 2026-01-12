export default function PageWrapper({ children }) {
  return (
    <main className="flex-1 p-6 bg-slate-50">
      {children}
    </main>
  );
}
