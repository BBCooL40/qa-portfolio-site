export const metadata = {
  title: "Anton • QA / Automation",
  description: "QA портфолио и CV – API/UI автоматизация, CI/CD, репорти.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Anton Tzonev — QA / Automation</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Помагам на екипи да доставят стабилен софтуер чрез автоматизирани API/UI тестове,
          смислени репорти и CI/CD практики.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/projects"
            className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-900"
          >
            Виж проектите
          </a>
          <a
            href="/contact"
            className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-900"
          >
            Свържи се с мен
          </a>
          <a
            href="/Anton-CV-BG.pdf"
            download
            className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400"
          >
            📄 Изтегли CV (BG)
          </a>
        </div>
      </section>
    </main>
  );
}
