
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <div id="hero" className="w-full">
          <HeroSection />
        </div>
        <div id="services" className="w-full">
          <ServicesSection />
        </div>
        <div id="about" className="w-full">
          <AboutSection />
        </div>
        <div id="projects" className="w-full">
          <ProjectsSection />
        </div>
        <div id="team" className="w-full">
          <TeamSection />
        </div>
        <div id="testimonials" className="w-full">
          <TestimonialsSection />
        </div>
        <div id="contact" className="w-full">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
