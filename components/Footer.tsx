export function Footer() {
  return (
    <footer className="border-t border-slate-900/80 bg-slate-950/80">
      <div className="container-page py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
        <span>© {new Date().getFullYear()} Anton · QA Automation.</span>
        <span className="text-slate-600">
          Built with Next.js & Tailwind – crafted as a personal QA portfolio.
        </span>
      </div>
    </footer>
  );
}
