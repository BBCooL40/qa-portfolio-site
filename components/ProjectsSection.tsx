import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="container-page mb-12 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-slate-50">QA Automation Projects</h2>
          <p className="text-xs text-slate-400 mt-1">
            A curated selection of small but real-world focused QA exercises and frameworks.
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <ProjectCard
          title="Selenium Waits Demo Framework"
          description="UI automation project demonstrating robust waiting strategies, page objects, and readable test scenarios against a demo web app."
          stack={["C#", "Selenium", "NUnit", "Page Object Model", "GitHub Actions"]}
          status="Ready"
        />
        <ProjectCard
          title="API Testing: Story Spoiler"
          description="Collection of API tests validating authentication, CRUD operations, and error handling for a story-sharing REST API."
          stack={["Postman", "Newman", "htmlextra reports"]}
          status="In progress"
        />
        <ProjectCard
          title="Playwright Mini Shop"
          description="End-to-end tests for a tiny shop app – login, basket, and checkout flows with fast Playwright tests."
          stack={["Playwright", "TypeScript", "UI + API tests"]}
        />
        <ProjectCard
          title="Performance experiments"
          description="Early experiments with k6 and Grafana for understanding performance baselines and basic SLAs."
          stack={["k6", "Grafana", "HTTP APIs"]}
        />
      </div>
    </section>
  );
}
