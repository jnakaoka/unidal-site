import HeroCarousel from "../components/home/HeroCarousel";
import ServicesSection from "../components/home/ServicesSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ContactStrip from "../components/home/ContactStrip";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <ProjectsSection />
      <ContactStrip />
    </>
  );
}
