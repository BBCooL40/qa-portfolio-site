export function CvSection() {
  return (
    <section id="cv" className="container-page mb-12">
      <div className="glass-panel p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-slate-50">Short CV snapshot</h2>
            <p className="text-xs text-slate-400 mt-1">
              Focused on QA, automation, and building reliable test systems around real products.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 text-xs text-slate-300">
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-200">Experience & focus</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>QA practice with web apps, APIs, and UI workflows.</li>
              <li>Automation with C#, Selenium, Playwright, RestSharp.</li>
              <li>Comfortable with Git, GitHub, and CI pipelines.</li>
              <li>Learning performance testing (k6 + Grafana).</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-200">Tech & tools</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>C#, .NET, NUnit, xUnit basics.</li>
              <li>Postman, Newman, htmlextra reports.</li>
              <li>GitHub Actions, basic YAML workflows.</li>
              <li>Jira / test case management tools (familiarity).</li>
            </ul>
          </div>
        </div>
        <p className="text-[11px] text-slate-500">
  Full CV is available as PDF:{" "}
  <a href="/Anton-CV.pdf" className="text-gold hover:underline">
    English
  </a>{" "}
  ·{" "}
  <a href="/Anton-CV-BG.pdf" className="text-gold hover:underline">
    Bulgarian
  </a>
  .
</p>

      </div>
    </section>
  );
}
