export function ContactSection() {
  return (
    <section id="contact" className="container-page mb-10">
      <div className="glass-panel p-6 sm:p-7">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-50 mb-2">Contact</h2>
        <p className="text-xs text-slate-400 mb-4 max-w-xl">
          Interested in QA collaboration, freelance testing, or just want to talk about automation and running?
          Drop a line using one of the channels below.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 text-xs text-slate-300">
          <div className="space-y-1.5">
            <p>
              <span className="text-slate-500">Email:</span>{" "}
              <a href="mailto:anton.qa.automation@example.com" className="text-gold hover:underline">
                anton.qa.automation@example.com
              </a>
            </p>
            <p>
              <span className="text-slate-500">GitHub:</span>{" "}
              <a
                href="https://github.com/BBCooL40"
                target="_blank"
                rel="noreferrer"
                className="text-gold hover:underline"
              >
                github.com/BBCooL40
              </a>
            </p>
            <p>
              <span className="text-slate-500">LinkedIn:</span>{" "}
              <span className="text-slate-400">profile link coming soon</span>
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-slate-400">
              This website is a living QA lab – new projects, tests, and small experiments will appear here over time
              as I grow my automation skills and portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
