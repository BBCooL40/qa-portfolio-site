import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CvSection } from "@/components/CvSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-night to-night-soft flex flex-col">
      <Header />
      <main className="flex-1 pb-10">
        <Hero />
        <ProjectsSection />
        <CvSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
