import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-400 flex items-center justify-center text-sm font-semibold text-slate-950 shadow-soft-xl">
            QA
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-slate-400">Anton</span>
            <span className="text-xs text-slate-500">QA Automation Engineer</span>
          </div>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-xs font-medium text-slate-300">
          <Link href="#projects" className="hover:text-gold transition-colors">Projects</Link>
          <Link href="#cv" className="hover:text-gold transition-colors">CV</Link>
          <Link href="#contact" className="hover:text-gold transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-3 text-xs">
          <span className="px-2 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300">EN</span>
          <span className="px-2 py-1 rounded-full border border-slate-700 text-slate-500 hover:border-gold hover:text-gold cursor-pointer transition-colors">
            BG
          </span>
        </div>
      </div>
    </header>
  );
}
