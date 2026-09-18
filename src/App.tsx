import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { GlobalNetworkMap } from './components/GlobalNetworkMap';
import { CampaignCalculator } from './components/CampaignCalculator';
import { AwardsAndTestimonials } from './components/AwardsAndTestimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');

  const handleOpenProposal = (referenceNote?: string) => {
    if (referenceNote) {
      setPrefilledNotes(referenceNote);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setPrefilledNotes(`Inquiry regarding service capability: ${serviceName}`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    const calcElem = document.getElementById('calculator');
    if (calcElem) {
      calcElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyPlanToProposal = (planSummary: string) => {
    setPrefilledNotes(`[Media Planner Simulation]:\n${planSummary}`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#080a10] text-[#e2e8f0] selection:bg-amber-400 selection:text-black ${lang === 'ur' ? 'font-urdu' : 'font-sans'}`}>
      {/* Global Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenProposal={handleOpenProposal}
        activeSection="home"
      />

      {/* Hero Section */}
      <Hero
        lang={lang}
        onOpenProposal={() => handleOpenProposal('General Strategic Media Campaign Inquiry')}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Services Section */}
      <ServicesSection
        lang={lang}
        onSelectService={handleSelectService}
      />

      {/* Case Studies & Portfolio */}
      <CaseStudiesSection
        lang={lang}
        onOpenProposal={handleOpenProposal}
      />

      {/* Global Network Map & Real-time Hubs */}
      <GlobalNetworkMap
        lang={lang}
        onOpenProposal={handleOpenProposal}
      />

      {/* Campaign Media Planner & ROI Simulator */}
      <CampaignCalculator
        lang={lang}
        onApplyPlanToProposal={handleApplyPlanToProposal}
      />

      {/* Awards & Client Testimonials */}
      <AwardsAndTestimonials
        lang={lang}
      />

      {/* Campaign Proposal & Contact Consultation */}
      <ContactSection
        lang={lang}
        prefilledNotes={prefilledNotes}
      />

      {/* Footer */}
      <Footer
        lang={lang}
      />
    </div>
  );
}
