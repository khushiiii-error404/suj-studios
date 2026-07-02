/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { X, ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';
import SmartImage from './SmartImage';

interface CaseStudyViewProps {
  project: Project;
  rotation?: number;
  onClose: () => void;
}

export default function CaseStudyView({ project, rotation = 0, onClose }: CaseStudyViewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const getLocalSrc = (id: string) => {
    switch (id) {
      case 'manthan-trailer':
        return '/assets/manthan.jpg';
      case 'life-within':
        return '/assets/life-within.jpg';
      case 'nature-films':
        return '/assets/nature.jpg';
      default:
        return `/assets/${id}.jpg`;
    }
  };

  // Prevent background scroll when case study is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-studio-bg overflow-y-auto w-full h-full select-none"
      ref={containerRef}
    >
      {/* Absolute Film Grain overlay specifically for the Case Study overlay to maintain design consistency */}
      <div className="film-grain" />

      {/* Exquisite Top Bar Navigation */}
      <header className="sticky top-0 left-0 w-full bg-studio-bg/90 backdrop-blur-md z-10 border-b border-studio-secondary py-6 px-6 md:px-12 flex items-center justify-between">
        <button
          onClick={onClose}
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-studio-silver hover:text-studio-charcoal transition-colors cursor-pointer focus:outline-none"
          id="casestudy-back-btn"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Work
        </button>

        <span className="mono-label text-[9px] text-studio-silver text-center hidden sm:inline-block">
          SUJ STUDIOS • CASE FILE: {project.id.toUpperCase()}
        </span>

        <button
          onClick={onClose}
          className="p-1 rounded-full text-studio-silver hover:text-studio-charcoal transition-colors cursor-pointer focus:outline-none"
          aria-label="Close Case Study"
          id="casestudy-close-btn"
        >
          <X className="h-6 w-6" />
        </button>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col gap-16 md:gap-24">
        
        {/* Title, Year, Category */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="mono-label text-studio-silver">{project.category}</span>
            <span className="text-studio-silver/40">•</span>
            <span className="mono-label text-studio-silver">{project.year}</span>
          </div>
          <h1 className="serif-header text-5xl md:text-8xl font-bold tracking-tight text-studio-charcoal max-w-4xl leading-tight">
            {project.title}
          </h1>
        </div>

        {/* Large Cinematic Hero Image */}
        <div className="w-full h-[300px] sm:h-[450px] md:h-[650px] overflow-hidden bg-studio-secondary shadow-xl">
          <SmartImage
            src={getLocalSrc(project.id)}
            fallbackSrc={project.coverImage}
            rotation={rotation}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta Grid: Stats & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-studio-secondary pb-16">
          {project.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="mono-label text-[10px] text-studio-silver">{stat.label}</span>
              <span className="serif-header text-3xl font-semibold text-studio-charcoal">{stat.value}</span>
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <span className="mono-label text-[10px] text-studio-silver">Creative Stack</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[9px] uppercase tracking-wider text-studio-charcoal bg-studio-secondary px-2.5 py-1"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section: Background, Challenge, Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Block: Brief Description (3 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="mono-label text-[9px] text-studio-silver">Overview</span>
            <p className="serif-body italic text-2xl text-studio-charcoal leading-relaxed">
              “{project.description}”
            </p>
          </div>

          {/* Right Block: Deep Dive (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            
            {/* Challenge */}
            <div className="flex flex-col gap-4">
              <h3 className="mono-label text-xs font-semibold text-studio-charcoal border-l-2 border-studio-charcoal pl-3">
                The Creative Obstacle
              </h3>
              <p className="font-sans text-studio-graphite leading-relaxed text-sm md:text-base">
                {project.challenge}
              </p>
            </div>

            {/* Process */}
            <div className="flex flex-col gap-4">
              <h3 className="mono-label text-xs font-semibold text-studio-charcoal border-l-2 border-studio-charcoal pl-3">
                The Strategic Execution
              </h3>
              <p className="font-sans text-studio-graphite leading-relaxed text-sm md:text-base">
                {project.process}
              </p>
            </div>

            {/* Results */}
            {project.results && (
              <div className="flex flex-col gap-4 bg-studio-secondary p-8 border-l border-studio-charcoal">
                <h3 className="mono-label text-xs font-semibold text-studio-charcoal flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Visual Milestones Achieved
                </h3>
                <p className="font-sans text-studio-graphite leading-relaxed text-sm md:text-base italic">
                  {project.results}
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Embedded Video Player */}
        <div className="flex flex-col gap-6">
          <div className="border-b border-studio-secondary pb-4">
            <span className="mono-label text-studio-silver">Project Stream</span>
            <h3 className="serif-header text-2xl md:text-3xl font-bold text-studio-charcoal mt-1">
              Active Screen Output
            </h3>
          </div>

          <div className="w-full h-[250px] sm:h-[400px] md:h-[600px] bg-black shadow-xl overflow-hidden relative">
            {project.embedType === 'youtube' ? (
              <iframe
                src={`${project.videoUrl}?autoplay=1&mute=1&loop=1`}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : project.embedType === 'instagram' ? (
              <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center bg-black overflow-hidden p-4 gap-6">
                <div className="w-full max-w-[340px] h-full max-h-[500px] flex items-center justify-center bg-zinc-950 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">
                  <iframe
                    src={project.videoUrl.endsWith('/embed') || project.videoUrl.endsWith('/embed/') ? project.videoUrl : `${project.videoUrl.replace(/\/$/, '')}/embed`}
                    title={project.title}
                    className="w-full h-full border-0 rounded-xl"
                    scrolling="no"
                    allowtransparency="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  />
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs p-4">
                  <span className="mono-label text-[10px] text-studio-silver/60 mb-2">Social Feed Broadcast</span>
                  <h4 className="serif-header text-xl text-white mb-2">Instagram Cinematic Reel</h4>
                  <p className="font-sans text-xs text-studio-silver/70 mb-6 leading-relaxed">
                    If the live social feed does not render inside the frame, you can open and view the cinematic broadcast stream directly.
                  </p>
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white text-black text-xs font-semibold uppercase tracking-[0.15em] px-6 py-3 hover:bg-studio-secondary transition-all hover:scale-105 duration-300"
                  >
                    Open Instagram
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ) : (
              <video
                src={project.videoUrl}
                controls
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        {/* Project Sub-Gallery Grid */}
        <div className="flex flex-col gap-6">
          <div className="border-b border-studio-secondary pb-4">
            <span className="mono-label text-studio-silver">Cinematographic Grid</span>
            <h3 className="serif-header text-2xl md:text-3xl font-bold text-studio-charcoal mt-1">
              Storyboard Captures
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((img, i) => (
              <div
                key={img}
                className="h-[250px] sm:h-[350px] overflow-hidden bg-studio-secondary shadow-lg img-zoom-container cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Capture ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA in Case Study */}
        <div className="border-t border-studio-secondary pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="serif-header text-3xl font-bold text-studio-charcoal">
              Like what you see?
            </h4>
            <p className="font-sans text-sm text-studio-silver">
              Let\'s adapt this high-end storytelling style to your brand or project.
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 400);
            }}
            className="group flex items-center gap-2 bg-studio-charcoal text-studio-bg text-xs font-semibold uppercase tracking-[0.15em] px-8 py-4.5 hover:bg-studio-graphite transition-all duration-300"
            id="casestudy-book-btn"
          >
            Book Similar Project
            <ArrowUpRight className="h-4 w-4 text-studio-secondary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </main>
    </motion.div>
  );
}
