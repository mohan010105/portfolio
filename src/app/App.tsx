import { Navigation } from "@/app/components/navigation";
import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Skills } from "@/app/components/skills";
import { Projects } from "@/app/components/projects";
import { ProfessionalJourney } from "@/app/components/professional-journey";
import { Certificates } from "@/app/components/certificates";
import { Contact } from "@/app/components/contact";
import { Chatbot } from "@/app/components/chatbot";
import { useState } from "react";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation onOpenChat={() => setIsChatOpen(true)} />
      
      <main>
        <Hero />
        
        <div id="about">
          <About />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="experience">
          <ProfessionalJourney />
        </div>
        
        <div id="certificates">
          <Certificates />
        </div>
        
        <div id="contact">
          <Contact onOpenChat={() => setIsChatOpen(true)} />
        </div>
      </main>

      {/* Chatbot - Triggered only by Let's Talk button */}
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}