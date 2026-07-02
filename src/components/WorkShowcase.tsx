/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowUpRight, PlayCircle, RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data';
import CaseStudyView from './CaseStudyView';
import SmartImage from './SmartImage';

export default function WorkShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rotations, setRotations] = useState<Record<string, number>>({
    'manthan-trailer': 0, // Starts upright, user can cycle alignment
    'life-within': 0,
    'nature-films': 0,
  });

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

  return (
    <section id="work" className="bg-studio-bg min-h-screen py-24 md:py-36 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-20">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-studio-secondary pb-8 gap-4">
          <div>
            <span className="mono-label text-studio-silver">Selected Portfolios</span>
            <h2 className="serif-header text-4xl md:text-6xl font-bold text-studio-charcoal mt-2">
              Featured Works
            </h2>
          </div>
          <span className="mono-label text-[9px] text-studio-silver md:text-right">
            01 — {PROJECTS_DATA.length.toString().padStart(2, '0')} REEL RELEASES
          </span>
        </div>

        {/* Large Viewport-Occupying Interactive Editorial List */}
        <div className="flex flex-col gap-24 md:gap-36">
          {PROJECTS_DATA.map((project, index) => {
            const isHovered = hoveredIndex === index;
            // Asymmetric layouts: stagger the padding and text locations based on index parity
            const isEven = index % 2 === 0;
            const currentRotation = rotations[project.id] || 0;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-16 items-center lg:min-h-[500px] xl:min-h-[600px] w-full`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Visual Imagery Box (Occupies majority of width) */}
                <div
                  className="w-full lg:w-2/3 h-[300px] sm:h-[450px] md:h-[550px] overflow-hidden bg-studio-secondary cursor-pointer relative shadow-xl img-zoom-container group"
                  id={`work-item-img-${project.id}`}
                  onClick={() => setActiveProject(project)}
                >
                  <SmartImage
                    src={getLocalSrc(project.id)}
                    fallbackSrc={project.coverImage}
                    rotation={currentRotation}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-1000"
                  />

                  {/* High contrast overlay on image hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-700" />

                  {/* Real-time Rotation Control for Alignment */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setRotations((prev) => ({
                        ...prev,
                        [project.id]: (prev[project.id] + 90) % 360,
                      }));
                    }}
                    className="absolute top-6 right-6 z-20 h-8 w-8 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/85 transition-all cursor-pointer focus:outline-none"
                    title="Rotate Image for Alignment"
                    id={`rotate-btn-${project.id}`}
                  >
                    <RotateCw className="h-3.5 w-3.5" />
                  </button>

                  {/* On-image play/open prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-14 w-14 flex items-center justify-center rounded-full bg-studio-bg text-studio-charcoal shadow-2xl">
                      <PlayCircle className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Absolute Corner Indicators */}
                  <div className="absolute top-6 left-6 font-mono text-[9px] text-white/80 bg-black/40 backdrop-blur-md px-3 py-1.5 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <div className="absolute bottom-6 right-6 font-mono text-[9px] text-white/80 bg-black/40 backdrop-blur-md px-3 py-1.5 uppercase tracking-wider">
                    {project.year}
                  </div>
                </div>

                {/* Typography Box */}
                <div className="w-full lg:w-1/3 flex flex-col justify-center gap-6 lg:px-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-studio-charcoal">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="h-[1px] w-8 bg-studio-charcoal/20" />
                    <span className="mono-label text-[10px] text-studio-silver">
                      {project.category}
                    </span>
                  </div>

                  <h3
                    onClick={() => setActiveProject(project)}
                    className="serif-header text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-studio-charcoal hover:opacity-70 transition-opacity cursor-pointer"
                    id={`work-item-title-${project.id}`}
                  >
                    {project.title}
                  </h3>

                  <p className="serif-body italic text-base leading-relaxed text-studio-graphite">
                    “{project.description}”
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[8px] uppercase tracking-wider text-studio-charcoal border border-studio-secondary px-2.5 py-1"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="group self-start flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-studio-charcoal hover:opacity-75 transition-opacity mt-4 cursor-pointer focus:outline-none"
                    id={`work-item-btn-${project.id}`}
                  >
                    Open Case Study
                    <ArrowUpRight className="h-4 w-4 text-studio-silver group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Fullscreen View Overlay */}
      <AnimatePresence>
        {activeProject && (
          <CaseStudyView
            project={activeProject}
            rotation={rotations[activeProject.id] || 0}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
