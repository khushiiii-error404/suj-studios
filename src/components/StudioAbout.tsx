/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Camera, Film, Compass, Settings, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function StudioAbout() {
  const creativePillars = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments of transient natural beauty and stark high-contrast urban landscapes, with precision lens optics.',
    },
    {
      icon: Film,
      title: 'Cinematography',
      description: 'Developing deliberate, story-led shots using dramatic lighting, manual focusing, and slow, immersive pacing.',
    },
    {
      icon: Compass,
      title: 'Creative Direction',
      description: 'Translating concepts and raw brand philosophies into highly structured, premium aesthetic campaigns.',
    },
    {
      icon: Settings,
      title: 'Post Production',
      description: 'Refined editing, seamless pace control, multi-track audio mastering, and professional color grading.',
    },
  ];

  const technologies = [
    'DaVinci',
    'Lightroom',
    'Aftereffects',
    'Capcut',
    'Premiere pro',
    'Canva',
    'Photography',
  ];

  return (
    <section id="studio" className="bg-studio-bg py-24 md:py-36 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-28">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-studio-secondary pb-8 gap-4">
          <div>
            <span className="mono-label text-studio-silver">The Philosophy</span>
            <h2 className="serif-header text-4xl md:text-6xl font-bold text-studio-charcoal mt-2">
              About SUJ STUDIOS
            </h2>
          </div>
          <span className="mono-label text-[9px] text-studio-silver md:text-right">
            EST. IN EXPERIMENTATION
          </span>
        </div>

        {/* Narrative & Portrait Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Creator Portrait (Left 5 columns) */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group overflow-hidden bg-studio-secondary shadow-2xl h-[400px] sm:h-[500px] md:h-[600px] img-zoom-container border border-studio-charcoal/5">
              {/* Premium image representing the photographer profile in the PDF */}
              <img
                src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?auto=format&fit=crop&w=1000&q=80"
                alt="Sujnan P - Creative Director"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              {/* Absolute label */}
              <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/90 bg-black/60 backdrop-blur-md px-4 py-2 uppercase tracking-widest">
                Sujnan P • Lead Cinematographer
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-studio-silver font-mono px-1">
              <span>CAMERA: LEICA / HASSELBLAD REF</span>
              <span>WESTERN GHATS, INDIA</span>
            </div>
          </motion.div>

          {/* Narrative text (Right 7 columns) */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-8 lg:pl-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mono-label text-studio-silver">Founder\'s Chronicle</span>
            
            <h3 className="serif-header text-3xl md:text-5xl font-bold text-studio-charcoal tracking-tight leading-tight">
              An instinct for capturing moments, born in the wilderness.
            </h3>

            {/* Exact Story from the PDF */}
            <div className="flex flex-col gap-6 serif-body text-lg md:text-xl text-studio-graphite leading-relaxed italic">
              <p>
                “My interest in cinematography, photography, and editing started as a kid. My dad had a camera, and we would go to forests to do bird photography. Those early experiences sparked my curiosity and eye for detail.”
              </p>
              <p>
                “Over time, I was inspired by movies and various creative media, which shaped my vision for strong, impactful shots. Like my dad, I developed an instinct for capturing moments, and that naturally led me into cinematography, a field I enjoy and have grown confident in.”
              </p>
            </div>

            {/* Technologies Tagging */}
            <div className="flex flex-col gap-3 border-t border-studio-secondary pt-8 mt-2">
              <span className="mono-label text-[9px] text-studio-silver">The Studio Tech-Stack & Mastery</span>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[9px] uppercase tracking-wider text-studio-charcoal bg-studio-secondary px-3 py-1.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Studio Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-studio-secondary pt-16 mt-8">
          {creativePillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="h-10 w-10 flex items-center justify-center bg-studio-secondary text-studio-charcoal">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="serif-header text-xl font-bold text-studio-charcoal mt-1">
                  {pillar.title}
                </h4>
                <p className="font-sans text-xs text-studio-graphite leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Creative Channels Section (Extracted from PDF Page 6) */}
        <div className="flex flex-col gap-12 border-t border-studio-charcoal/10 pt-24 mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="mono-label text-studio-silver">Digital Channels</span>
              <h3 className="serif-header text-3xl md:text-5xl font-bold text-studio-charcoal mt-2">
                My Creative Pages
              </h3>
            </div>
            <p className="font-sans text-xs text-studio-graphite max-w-sm md:text-right">
              Curated digital spaces showcasing specialized techniques, cinematography archives, and high-energy combat media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Page 1: @sujnxn */}
            <a 
              href="https://instagram.com/sujnxn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-studio-bg border border-studio-charcoal/10 hover:border-studio-charcoal p-8 transition-all duration-500 flex flex-col justify-between h-72 cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[9px] text-studio-silver uppercase tracking-wider">Cinematography & Color</span>
                  <span className="font-mono text-[10px] text-studio-charcoal/40 group-hover:text-studio-charcoal transition-colors">↗</span>
                </div>
                <h4 className="serif-header text-2xl font-bold text-studio-charcoal group-hover:italic transition-all">
                  @sujnxn
                </h4>
                <p className="font-sans text-xs text-studio-graphite leading-relaxed">
                  My initial work in cinematography and color grading was housed on my first account, @sujnxn.
                </p>
              </div>
              <span className="font-mono text-[9px] text-studio-silver tracking-widest uppercase">Archive Account</span>
            </a>

            {/* Page 2: @sujnxnn */}
            <a 
              href="https://instagram.com/sujnxnn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-studio-bg border border-studio-charcoal/10 hover:border-studio-charcoal p-8 transition-all duration-500 flex flex-col justify-between h-72 cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[9px] text-studio-silver uppercase tracking-wider">Experimental Editing</span>
                  <span className="font-mono text-[10px] text-studio-charcoal/40 group-hover:text-studio-charcoal transition-colors">↗</span>
                </div>
                <h4 className="serif-header text-2xl font-bold text-studio-charcoal group-hover:italic transition-all">
                  @sujnxnn
                </h4>
                <p className="font-sans text-xs text-studio-graphite leading-relaxed">
                  My primary creative page, @sujnxnn, now serves as a platform for experimental video editing and exploring new techniques.
                </p>
              </div>
              <span className="font-mono text-[9px] text-studio-silver tracking-widest uppercase">Active Platform</span>
            </a>

            {/* Page 3: @ufc_edging */}
            <a 
              href="https://instagram.com/ufc_edging" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-studio-bg border border-studio-charcoal/10 hover:border-studio-charcoal p-8 transition-all duration-500 flex flex-col justify-between h-72 cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[9px] text-studio-silver uppercase tracking-wider">Combat Sports Media</span>
                  <span className="font-mono text-[10px] text-studio-charcoal/40 group-hover:text-studio-charcoal transition-colors">↗</span>
                </div>
                <h4 className="serif-header text-2xl font-bold text-studio-charcoal group-hover:italic transition-all">
                  @ufc_edging
                </h4>
                <p className="font-sans text-xs text-studio-graphite leading-relaxed">
                  Additionally, I manage @ufc_edging, a niche account focused on producing content for combat sports fans.
                </p>
              </div>
              <span className="font-mono text-[9px] text-studio-silver tracking-widest uppercase">Niche Community</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
