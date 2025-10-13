import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-4 py-1 text-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for QA roles & freelance
        </div>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Anton • QA / Automation Engineer
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          API & UI автоматизация, стабилни пайплайни и полезни репорти.
          Обичам чист код, смислени проверки и бърз feedback към екипа.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/Anton_QA_CV.pdf"
            className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400"
          >
            Download CV (PDF)
          </Link>
          <Link
            href="mailto:youremail@example.com"
            className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-800"
          >
            Contact
          </Link>
          <Link
            href="https://github.com/anton-your-username"
            className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-800"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/anton-your-profile"
            className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-800"
          >
            LinkedIn
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-300">
          {[
            "Playwright",
            "RestSharp",
            "Postman/Newman",
            "Jenkins/GitHub Actions",
            "Docker",
            "SQL",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-700 px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Anton — QA / Automation. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
