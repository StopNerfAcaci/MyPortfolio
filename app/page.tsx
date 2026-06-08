import AboutSection from "./about/AboutSection";
import ContactSection from "./contact/ContactSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import ProjectsSection from "./projects/ProjectsSection";
import ResearchSection from "./research/ResearchSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#eaf6ff] text-[#07152f]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResearchSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
