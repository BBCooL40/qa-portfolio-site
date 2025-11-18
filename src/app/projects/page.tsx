import Hero from "./components/Hero";

import ProjectCard from "../components/ProjectCard";
import { projects } from "./data";           // ← това е правилното



export const metadata = {
  title: "Anton QA • Home",
  description: "QA/Automation портфолио – проекти, опит и контакт.",
};

export default function HomePage() {
  // добавяме по едно човешко изречение към всеки проект
  const featured = projects.slice(0, 3).map((p) => ({
    ...p,
    learned:
      p.slug === "github-api-tests"
        ? "Изградих прост CI pipeline и стабилизирах flaky тестове с по-добро изчакване и логове."
        : p.slug === "foody-api-tests"
        ? "Покрих негативни сценарии и генерирах htmlextra отчет през Newman CLI."
        : "Изчистих Bearer auth потока и централизирах променливите за по-лесна поддръжка.",
  }));

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <h2 className="mb-6 text-2xl font-bold">Подбрани проекти</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>

        <div className="mt-6">
          <a href="/projects" className="underline decoration-emerald-500/60 underline-offset-4 hover:opacity-80">
            Виж всички проекти →
          </a>
        </div>
      </section>

      {/* Now секция – личен щрих */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-3 text-2xl font-bold">Сега</h2>
        <ul className="space-y-2 text-slate-300">
          <li>🏃 Тренировъчна цел: 10K под 60 мин (работя върху каданс).</li>
          <li>🧪 Стабилизиране на API тестове (логове, retry политика, мокове).</li>
          <li>🛠️ Малки UX подобрения по портфолиото.</li>
          <li>🐶 Възпитавам 9-месечен булдог да не „тества“ кабели.</li>
        </ul>
      </section>
    </main>
  );
}
