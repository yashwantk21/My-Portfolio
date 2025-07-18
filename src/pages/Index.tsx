import { FloatingParticles } from "@/components/ui/floating-particles"
import { MainSection } from "@/components/portfolio/main-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { AchievementsSection } from "@/components/portfolio/achievements-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Navbar } from "@/components/ui/navbar"

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      
      <main className="relative z-10">
        <Navbar />
        <MainSection />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      

      <footer className="relative z-8 py-7 text-center border-t border-border/20 text-sm">
        <div className="container max-w-6xl mx-auto px-4">
          <p className="text-muted-foreground">
            © 2025 Yashwant Harisingh Karnawat. Built with passion for AI and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
