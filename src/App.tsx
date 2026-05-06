
import NewHero from "./components/hero/new-hero";
import Projects from "./components/projects/projects";
import ModernFooter from "./components/footer/footer";
import useIsMobile from "./hooks/use-is-mobile";
import CodePlayersNavbar from "./components/navbar";
import FeaturesSection from "./components/hero/feature-section";
import ProjectGallery from "./components/project-gallery/project-gallery";
import PricingSection from "./components/hero/pricing-section";
import OnboardingProcess from "./components/hero/onboarding-process";

export function App() {
  const isMobile = useIsMobile();

    if (isMobile === null) {
        // render instant fallback
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <p className="text-sm opacity-50">Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <CodePlayersNavbar />
            <NewHero />
            <ProjectGallery />
            <FeaturesSection />
            <Projects />
            <PricingSection />
            <OnboardingProcess />
            <ModernFooter />
        </div>    
    );
}

export default App
