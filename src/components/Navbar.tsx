/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'Studio', id: 'studio' },
    { label: 'Photography', id: 'photography' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-studio-bg/90 backdrop-blur-md border-b border-studio-charcoal/10 py-4 shadow-xs'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="flex items-center text-studio-charcoal">
              {/* Logo SVG matching the PDF's unique logo */}
              <svg
                viewBox="0 0 120 40"
                className="h-9 w-auto text-studio-charcoal transition-transform duration-500 group-hover:scale-105"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Stylized S - Matching PDF Logo exactly */}
                <path d="M 12 10 H 46" />
                <path d="M 21 10 L 17 23 H 42 C 42 31, 37 35, 26 35" />
                {/* Stylized U - Matching PDF Logo exactly */}
                <path d="M 54 10 V 35 H 80 V 10" />
                {/* Stylized J - Matching PDF Logo exactly */}
                <path d="M 90 14 H 106 C 106 23, 102 35, 92 35" />
              </svg>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-lg leading-none tracking-tight font-bold text-studio-charcoal">
                SUJ STUDIOS
              </span>
              <span className="mono-label text-[8px] tracking-[0.25em] text-studio-silver leading-none mt-0.5">
                CINEMATIC CREATIVE
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500 py-1 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-studio-charcoal'
                      : 'text-studio-silver hover:text-studio-charcoal'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-studio-charcoal"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="group flex items-center gap-2 bg-studio-charcoal text-studio-bg text-xs font-semibold uppercase tracking-[0.15em] px-5 py-3 hover:bg-studio-graphite transition-all duration-500 hover:shadow-lg rounded-none"
              id="nav-cta-btn"
            >
              Start Project
              <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-studio-secondary" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-studio-charcoal p-1 cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
            id="nav-toggle-btn"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-studio-bg z-40 flex flex-col justify-between pt-28 pb-12 px-8"
          >
            {/* Background branding */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none pr-4 pb-4 select-none">
              <svg
                viewBox="0 0 110 40"
                className="w-96 h-auto text-studio-charcoal"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M 12 12 H 36 M 20 12 V 26 C 20 28 18 30 14 30" />
                <path d="M 46 12 V 30 H 66 V 12" />
                <path d="M 76 12 H 92 M 86 12 V 24 L 80 30" />
              </svg>
            </div>

            <div className="flex flex-col gap-6">
              <span className="mono-label text-[10px] text-studio-silver border-b border-studio-charcoal/10 pb-3">
                Navigation Directory
              </span>
              <nav className="flex flex-col gap-5">
                {navItems.map((item, index) => (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left text-3xl font-serif tracking-tight text-studio-charcoal focus:outline-none py-1 hover:pl-2 transition-all duration-500"
                    id={`mobile-nav-link-${item.id}`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center bg-studio-charcoal text-studio-bg text-sm font-semibold uppercase tracking-[0.2em] py-4 hover:bg-studio-graphite transition-all duration-300"
                id="mobile-nav-cta-btn"
              >
                Start a Project
              </button>

              <div className="grid grid-cols-2 gap-4 text-[10px] text-studio-silver font-mono">
                <div>
                  <span className="block text-studio-charcoal font-semibold uppercase mb-1">Email</span>
                  <a href="mailto:sujnansuju@gmail.com" className="hover:text-studio-charcoal transition-colors">
                    sujnansuju@gmail.com
                  </a>
                </div>
                <div>
                  <span className="block text-studio-charcoal font-semibold uppercase mb-1">Instagram</span>
                  <a href="https://instagram.com/sujnxnn" target="_blank" rel="noreferrer" className="hover:text-studio-charcoal transition-colors">
                    @sujnxnn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
