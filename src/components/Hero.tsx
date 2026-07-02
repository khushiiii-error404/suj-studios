/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowDown, Play, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import SmartImage from './SmartImage';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const offerings = [
    'Premium Video Editing',
    'Podcast Editing',
    'Creative Direction',
    'Visual Storytelling',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white select-none py-20 lg:py-0"
    >
      {/* Background looping cinematic video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.02] filter brightness-35 contrast-110"
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0543f3d9c22e03259e355f307842c67&profile_id=139&oauth2_token_id=57447761"
        />
        {/* Subtle radial overlay for centering depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
        {/* Extreme dark vertical overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      {/* Hero Interactive Contents */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-12 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
        
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="serif-header text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white leading-none mb-4 pt-1"
            >
             <span className="inline-flex items-center select-none pointer-events-none shrink-0">
                <svg
                  viewBox="8 8 104 29"
                  className="h-[0.72em] w-auto text-white"
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
              </span>
              <span>STUDIOS</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="serif-body text-lg sm:text-xl md:text-2xl italic font-light text-studio-secondary/90 tracking-wide mb-8 max-w-2xl leading-relaxed"
            >
              Crafting Stories Through Motion.
            </motion.p>

            {/* Mobile/Tablet image - shown in flow for smaller viewports, hidden on large screens */}
            <motion.div
              className="w-full max-w-md mb-8 lg:hidden block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.3 }}
            >
              <div className="relative group overflow-hidden bg-white/5 border border-white/10 p-1.5 shadow-xl">
                <div className="relative h-[240px] sm:h-[300px] overflow-hidden bg-black">
                  <SmartImage
                    src="/assets/cat.jpg"
                    fallbackSrc="cat.jpg"
                    alt="SUJ STUDIOS Cinematic Art"
                    className="w-full h-full object-cover contrast-115 group-hover:scale-105 transition-all duration-[1200ms] ease-[0.16,1,0.3,1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 font-mono text-[8px] text-white/80 tracking-widest uppercase">
                    EST. 2026 • PRIMARY ARCHIVE
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services List / Creative Capsules */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mb-10 max-w-3xl"
            >
              {offerings.map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  {index > 0 && <span className="text-studio-silver/40 text-xs hidden lg:inline">•</span>}
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-studio-secondary/70">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Buttons / CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-12 w-full sm:w-auto"
            >
              <button
                onClick={() => onNavigate('work')}
                className="group flex items-center justify-center gap-3 bg-white text-black text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 hover:bg-studio-secondary transition-all duration-500 rounded-none w-full sm:w-56 cursor-pointer"
                id="hero-view-work-btn"
              >
                <Play className="h-3.5 w-3.5 fill-current text-black" />
                View Work
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="group flex items-center justify-center gap-2 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 hover:bg-white/10 hover:border-white transition-all duration-500 rounded-none w-full sm:w-56 cursor-pointer"
                id="hero-start-project-btn"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 text-studio-secondary transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>

            {/* Trust section & Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
              className="w-full border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <div className="flex flex-col md:items-start items-center">
                <span className="mono-label text-[8px] text-studio-silver/80 tracking-[0.25em] mb-2">
                  Featured Partnerships
                </span>
                <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 opacity-60">
                  <span className="font-serif text-xs uppercase tracking-[0.15em] text-white">TEDxBITBangalore</span>
                  <span className="font-serif text-xs uppercase tracking-[0.15em] text-white">Manthan Fest</span>
                  <span className="font-serif text-xs uppercase tracking-[0.15em] text-white">Samskruthi</span>
                  <span className="font-serif text-xs uppercase tracking-[0.15em] text-white">Under 25</span>
                </div>
              </div>

              {/* Scroll Indicator */}
              <button
                onClick={() => onNavigate('showreel')}
                className="flex items-center gap-2 text-studio-silver/80 hover:text-white transition-colors duration-300 group cursor-pointer focus:outline-none"
                id="hero-scroll-indicator"
              >
                <span className="font-mono text-[8px] uppercase tracking-[0.2em]">Showreel</span>
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                  <ArrowDown className="h-3 w-3 group-hover:text-white" />
                </motion.div>
              </button>
            </motion.div>
          </div>

          {/* Right Image Column - Beautiful framed portrait image on desktop */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group overflow-hidden bg-white/5 border border-white/10 p-2 shadow-2xl">
              <div className="relative h-[480px] xl:h-[540px] overflow-hidden bg-black">
                <SmartImage
                  src="/assets/cat.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1000&q=80"
                  alt="SUJ STUDIOS Cinematic Art"
                  className="w-full h-full object-cover contrast-115 group-hover:scale-105 transition-all duration-[1200ms] ease-[0.16,1,0.3,1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 font-mono text-[9px] text-white/90 tracking-widest uppercase">
                  EST. 2026 • PRIMARY ARCHIVE
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
