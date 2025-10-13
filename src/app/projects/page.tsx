import Link from "next/link";

type Project = {
  title: string;
  desc: string;
  highlights: string[];
  stack: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "API Tests – RestSharp + xUnit",
    desc: "Smoke/Regression тестове върху публично API, Allure отчет и GitHub Actions.",
    highlights: ["Env vars", "Retry policy", "Allure attachments"],
    stack: ["C#", "RestSharp", "xUnit", "Allure", "GH Actions"],
    href: "https://github.com/anton-your-username/restsharp-api-tests",
  },
  {
    title: "UI E2E – Playwright",
    desc: "Паралелни тестове, fixtures, visual snapshots и стабилни selectors.",
    highlights: ["Parallel runs", "Trace Viewer", "HTML report"],
    stack: ["TypeScript", "Playwright"],
    href: "https://github.com/anton-your-username/playwright-e2e",
  },
  {
    title: "Postman / Newman",
    desc: "Колекции с pre-request скриптове, data-driven рънове и репорти.",
    highlights: ["Data files", "Collections v2.1", "CLI pipelines"],
    stack: ["Postman", "Newman"],
    href: "https://github.com/anton-your-username/postman-collections",
  },
  {
    title: "CI/CD Pipeline",
    desc: "Pipeline за билд, тест и артефакти. Кеширане и матрично изпълнение.",
    highlights: ["Matrix", "Caching", "Artifacts"],
    stack: ["GitHub Actions", "Node/C#", "Allure"],
    href: "https://github.com/anton-your-username/ci-cd-examples",
  },
];

export const metadata = {
  title: "Projects • Anton QA",
  description: "Подбрани QA / Automation проекти и демота.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Projects</h1>
          <Link
            href="/"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              target="_blank"
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-emerald-500"
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold">{p.title}</h2>
                <span className="shrink-0 rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
                  {p.stack.join(" • ")}
                </span>
              </div>

              <p className="text-slate-300">{p.desc}</p>

              <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-slate-700 px-3 py-1"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-3 text-emerald-400 opacity-0 transition group-hover:opacity-100">
                View repository →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Anton — QA / Automation.
      </footer>
    </main>
  );
}
