/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-studio-bg border-t border-studio-charcoal/10 py-16 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-studio-charcoal/10">
          
          {/* Logo & description block */}
          <button
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-3 text-left cursor-pointer focus:outline-none group"
            id="footer-logo-btn"
          >
            <svg
              viewBox="0 0 120 40"
              className="h-8 w-auto text-studio-charcoal group-hover:scale-105 transition-transform duration-500"
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
            <div className="flex flex-col">
              <span className="font-serif text-base font-bold text-studio-charcoal leading-none">SUJ STUDIOS</span>
              <span className="mono-label text-[7px] text-studio-silver leading-none mt-0.5">EST. 2026</span>
            </div>
          </button>

          {/* Social connections block */}
          <div className="flex flex-wrap gap-8 font-mono text-[9px] uppercase tracking-[0.25em] text-studio-silver">
            <a
              href="mailto:sujnansuju@gmail.com"
              className="hover:text-studio-charcoal transition-colors"
            >
              EMAIL
            </a>
            <a
              href="https://instagram.com/sujnxnn"
              target="_blank"
              rel="noreferrer"
              className="hover:text-studio-charcoal transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href="https://wa.me/919901535017"
              target="_blank"
              rel="noreferrer"
              className="hover:text-studio-charcoal transition-colors"
            >
              WHATSAPP
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-2 text-studio-silver hover:text-studio-charcoal transition-colors cursor-pointer focus:outline-none font-mono text-[9px] uppercase tracking-wider group"
            id="footer-scroll-top-btn"
          >
            TOP
            <div className="h-7 w-7 rounded-full border border-studio-charcoal/10 flex items-center justify-center group-hover:bg-studio-secondary transition-all">
              <ArrowUp className="h-3.5 w-3.5" />
            </div>
          </button>

        </div>

        {/* Bottom copyright block */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-studio-silver font-mono gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-1">
            <span>© {currentYear} SUJ STUDIOS.</span>
            <span className="hidden sm:inline">•</span>
            <span>CRAFTING STORIES THROUGH MOTION.</span>
            <span className="hidden sm:inline">•</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex gap-4">
            <span className="hover:text-studio-charcoal transition-colors cursor-pointer">PRIVACY POLICY</span>
            <span>/</span>
            <span className="hover:text-studio-charcoal transition-colors cursor-pointer">TERMS OF RETAINER</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
