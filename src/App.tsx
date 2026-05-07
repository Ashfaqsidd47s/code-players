
import NewHero from "./components/hero/new-hero";
import Projects from "./components/projects/projects";
import useIsMobile from "./hooks/use-is-mobile";
import FeaturesSection from "./components/hero/feature-section";
import ProjectGallery from "./components/project-gallery/project-gallery";
import PricingSection from "./components/hero/pricing-section";
import OnboardingProcess from "./components/hero/onboarding-process";
import AboutSection from "./components/hero/about";
import StepProcess from "./components/hero/step-process";
import Footer from "./components/hero/footer";
import TestimonialsSection from "./components/hero/testimonial-section";
import NewNavBar from "./components/hero/new-nav-bar";

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
        <div className=" bg-background">
            <NewNavBar />
            <NewHero />
            <AboutSection />
            <StepProcess />
            <ProjectGallery />

            <FeaturesSection />
            <Projects />
            <PricingSection />
            <OnboardingProcess />
            <TestimonialsSection />
            <Footer />
        </div>    
    );
}

export default App
