import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeaturedProjects from "./components/FeaturedProjects";
import HowItWorks from "./components/HowItWorks";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <HowItWorks />
    </>
  );
}
