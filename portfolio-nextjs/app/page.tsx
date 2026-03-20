import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { AboutSection } from "@/components/about-section";
import { CommunitySection } from "@/components/community-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <HeroSection />
        <ExperienceSection />
        <TestimonialsSection />
        <AboutSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
