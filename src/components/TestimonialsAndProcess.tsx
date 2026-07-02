/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';

export default function TestimonialsAndProcess() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  return (
    <section className="bg-studio-bg py-24 md:py-36 px-6 md:px-12 select-none flex flex-col gap-24 md:gap-36">
      
      {/* Testimonials Segment */}
      <div id="testimonials" className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        
        {/* Section label */}
        <div className="flex items-center gap-3 border-b border-studio-charcoal/10 pb-6">
          <span className="mono-label text-studio-silver">Peer Assessments</span>
          <span className="h-[1px] w-12 bg-studio-silver/30" />
          <span className="mono-label text-studio-silver">What They Say</span>
        </div>

        {/* Huge Editorial Quote Container */}
        <div className="relative min-h-[350px] md:min-h-[300px] flex flex-col justify-center gap-8 md:px-12">
          {/* Absolute Background Quote Icon */}
          <Quote className="absolute top-0 left-0 text-studio-secondary h-28 w-28 -translate-x-6 -translate-y-8 pointer-events-none opacity-40" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 relative z-10"
            >
              <blockquote className="serif-body italic text-2xl sm:text-3xl md:text-4xl text-studio-charcoal leading-relaxed max-w-5xl">
                “{TESTIMONIALS_DATA[activeTestimonial].quote}”
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-studio-charcoal/10 pt-6 gap-4">
                <div className="flex flex-col">
                  <cite className="font-serif text-lg font-bold not-italic text-studio-charcoal">
                    {TESTIMONIALS_DATA[activeTestimonial].author}
                  </cite>
                  <span className="font-sans text-xs text-studio-silver mt-0.5">
                    {TESTIMONIALS_DATA[activeTestimonial].role} • {TESTIMONIALS_DATA[activeTestimonial].project}
                  </span>
                </div>

                {/* Testimonial Nav Arrows */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="h-10 w-10 flex items-center justify-center border border-studio-charcoal/10 hover:border-studio-charcoal transition-all cursor-pointer focus:outline-none"
                    aria-label="Previous Testimonial"
                    id="testimonial-prev-btn"
                  >
                    <ArrowLeft className="h-4 w-4 text-studio-charcoal" />
                  </button>
                  <span className="font-mono text-[10px] text-studio-silver tracking-widest">
                    {(activeTestimonial + 1).toString().padStart(2, '0')} / {TESTIMONIALS_DATA.length.toString().padStart(2, '0')}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    className="h-10 w-10 flex items-center justify-center border border-studio-charcoal/10 hover:border-studio-charcoal transition-all cursor-pointer focus:outline-none"
                    aria-label="Next Testimonial"
                    id="testimonial-next-btn"
                  >
                    <ArrowRight className="h-4 w-4 text-studio-charcoal" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
</section>
  );
}