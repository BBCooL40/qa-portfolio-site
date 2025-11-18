export const metadata = {
  title: "Contact • Anton QA",
  description:
    "Свържи се с мен за QA / Automation възможности или колаборации.",
};

export default function ContactPage() {
  // Пътят е към /public
  const cvBgPath = "/Anton-CV-BG.pdf";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-6 text-3xl font-bold">Contact</h1>

        <p className="mb-8 text-slate-300">
          Пиши ми, ако искаш да обсъдим QA позиции, freelance задачи,
          automation setup или обучения.
        </p>

        {/* === CV секция === */}
        <div className="mb-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="mb-3 text-xl font-semibold">CV</h2>
          <p className="mb-4 text-slate-300">
            Можеш да прегледаш или изтеглиш моето BG CV.
          </p>
          <div className="flex flex-wrap gap-3">
            {/* Преглед в нов таб */}
            <a
              href={cvBgPath}
              target="_blank"
              className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-800"
            >
              👁️‍🗨️ Преглед BG CV
            </a>

            {/* Изтегляне */}
            <a
              href={cvBgPath}
              download="Anton-CV-BG.pdf"
              className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400"
            >
              📄 Изтегли BG CV
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Ако „Преглед“ дава „Invalid or corrupted PDF“, файлът в{" "}
            <code>/public</code> е счупен или не е там. Замени го с валиден.
          </p>
        </div>

        {/* === Форма === */}
        <form
          action="mailto:anton.tzonev@yahoo.com"
          method="POST"
          className="space-y-4"
        >
          <input
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
          ></textarea>

          <button
            type="submit"
            className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black hover:bg-emerald-400"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-sm text-slate-400">
          Or email me directly:{" "}
          <a
            href="mailto:anton.tzonev@yahoo.com"
            className="underline hover:text-emerald-400"
          >
            anton.tzonev@yahoo.com
          </a>
        </div>
      </section>
    </main>
  );
}
