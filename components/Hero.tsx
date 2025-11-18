import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="container-page mt-10 mb-12">
      <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr] items-center">
        <div className="glass-panel p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-3">
            QA · Automation · Performance
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
            Human QA engineer,
            <span className="text-gold"> not just another test script.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-xl">
            I design and implement automated tests that keep products stable while teams move fast – UI, API,
            and performance checks with a practical, business-first mindset.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
  <Link
    href="#projects"
    className="px-4 py-2 rounded-full bg-gold text-slate-950 text-xs font-semibold shadow-soft-xl hover:brightness-110 transition"
  >
    View QA Projects
  </Link>

  <a
    href="/Anton-CV.pdf"
    className="px-4 py-2 rounded-full border border-slate-600 text-slate-100 text-xs hover:border-gold hover:text-gold transition"
  >
    Download CV (PDF)
  </a>
</div>

          <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
            <span className="px-3 py-1 rounded-full border border-slate-700/80">Selenium / Playwright</span>
            <span className="px-3 py-1 rounded-full border border-slate-700/80">C# / .NET</span>
            <span className="px-3 py-1 rounded-full border border-slate-700/80">REST API testing</span>
            <span className="px-3 py-1 rounded-full border border-slate-700/80">CI · GitHub Actions</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="glass-panel p-5">
            <p className="text-xs font-semibold text-slate-400 mb-2">Quick snapshot</p>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li>• Manual & automated QA for web applications</li>
              <li>• API testing with Postman / RestSharp</li>
              <li>• CI pipelines with GitHub Actions</li>
              <li>• Performance & reliability mindset</li>
            </ul>
          </div>
          <div className="glass-panel p-5">
            <p className="text-xs font-semibold text-slate-400 mb-2">Links</p>
            <div className="flex flex-wrap gap-3 text-xs">
              <Link
                href="https://github.com/BBCooL40"
                target="_blank"
                className="px-3 py-2 rounded-full border border-slate-700 hover:border-gold hover:text-gold transition"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="px-3 py-2 rounded-full border border-slate-700 hover:border-gold hover:text-gold transition"
              >
                LinkedIn
              </Link>
              <Link
                href="#contact"
                className="px-3 py-2 rounded-full border border-slate-700 hover:border-gold hover:text-gold transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
