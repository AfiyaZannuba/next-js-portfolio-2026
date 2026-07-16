import { About } from '@/sections/About';
import { ContactSection } from '@/sections/ContactSection';
import { FooterSection } from '@/sections/FooterSection';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { Tape } from '@/sections/Tape';
import { WorkExperience } from '@/sections/WorkExperience';


export default function Home() {
  return (
    <div>
      <Header />
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>
      <section id="projects" className="scroll-mt-24">
        <ProjectsSection />
      </section>
      <Tape />
      <WorkExperience />
      <section id="about" className="scroll-mt-24">
        <About />
      </section>
      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>
      <FooterSection />
    </div>
  )
}