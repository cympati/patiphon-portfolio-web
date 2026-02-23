import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroProfile } from "./components/HeroProfile";
import { NavigationMenu } from "./components/Navigation";
import { ProjectsSection } from "./components/ProjectsSection";
import { RecommendationsSection } from "./components/RecommendationsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />
      
      <div className="max-w-[1200px] mx-auto">
        <HeroProfile />
        <ProjectsSection />
        <ExperienceSection />
        <RecommendationsSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-12 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Patiphon Klangpraphan. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
