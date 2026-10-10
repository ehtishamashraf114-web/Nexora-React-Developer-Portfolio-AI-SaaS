import React from 'react';
import { Navbar } from '../common/Navbar';
import { Spotlight } from '../common/Spotlight';
import { HeroSection } from '../hero/HeroSection';
import { ProjectsSection } from '../projects/ProjectsSection';
import { SkillsSection } from '../skills/SkillsSection';
import { JourneySection } from '../journey/JourneySection';
import { ContactSection } from '../contact/ContactSection';
import { Footer } from '../common/Footer';

export const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col relative selection:bg-indigo-500/30 selection:text-indigo-200">
      <Spotlight />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
