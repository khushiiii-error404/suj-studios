/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import WorkShowcase from './components/WorkShowcase';
import ServicesPricing from './components/ServicesPricing';
import StudioAbout from './components/StudioAbout';
import PhotoGallery from './components/PhotoGallery';
import TestimonialsAndProcess from './components/TestimonialsAndProcess';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  // Scroll spy to highlight active menu elements automatically
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 250; // offset for detection
      const sections = ['hero', 'showreel', 'work', 'pricing', 'studio', 'photography', 'testimonials', 'contact'];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            // Map 'pricing' back to 'services' or keep depending on nav items
            if (sectionId === 'pricing') {
              setActiveSection('services');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleNavigate = (sectionId: string) => {
    let targetId = sectionId;
    if (sectionId === 'services') {
      targetId = 'pricing';
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    // Smooth scroll down to the booking desk form
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="relative bg-studio-bg text-studio-charcoal min-h-screen flex flex-col selection:bg-studio-charcoal selection:text-white">
      {/* 
        PHYSICAL FILM GRAIN OVERLAY: 
        This establishes the beautiful, organic physical jitter typical of fine-art 
        photography and motion picture showreels, fulfilling the premium aesthetic target.
      */}
      <div className="film-grain" />

      {/* Dynamic Navbar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Subtle Vertical Marker for Editorial Elegance */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-40 pointer-events-none select-none">
        <div className="w-px h-16 bg-studio-charcoal/10" />
        <p className="text-[9px] font-mono uppercase tracking-[0.5em] font-semibold text-studio-charcoal/40 [writing-mode:vertical-lr]">
          EST. 2024
        </p>
        <div className="w-px h-16 bg-studio-charcoal/10" />
      </div>

      {/* Main Sections */}
      <main className="flex-1">
        
        {/* Fullscreen Looping Hero */}
        <Hero onNavigate={handleNavigate} />

        {/* Cinematic Native Video Showreel */}
        <Showreel />

        {/* Large Viewport Work Showcase & Case Studies */}
        <WorkShowcase />

        {/* Premium Offerings and Pricing comparison with INR/USD conversion */}
        <ServicesPricing onSelectPlan={handleSelectPlan} />

        {/* The Studio Narrative (Story & Tech-Stack) */}
        <StudioAbout />

        {/* Masonry Fine-Art Photography Gallery with Lightroom lightbox overlay */}
        <PhotoGallery />

        {/* Testimonials assessment and Process timeline Accordion */}
        <TestimonialsAndProcess />

        {/* Interactive Booking Desk with dynamic contract generator */}
        <ContactSection
          selectedPlanId={selectedPlanId}
          onClearPlan={() => setSelectedPlanId(null)}
        />

      </main>

      {/* Exquisite Minimal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
