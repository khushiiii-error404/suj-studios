/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { Mail, Instagram, MessageSquare, Send, CheckCircle, Sparkles, Copy, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactSectionProps {
  selectedPlanId: string | null;
  onClearPlan: () => void;
}

export default function ContactSection({ selectedPlanId, onClearPlan }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Video Editing');
  const [tier, setTier] = useState('frame');
  const [budget, setBudget] = useState(40000); // INR
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [projectRef, setProjectRef] = useState('');

  // Watch for external plan selections from pricing cards
  useEffect(() => {
    if (selectedPlanId) {
      setTier(selectedPlanId);
      if (selectedPlanId === 'cut') {
        setService('Video Editing');
        setBudget(25000);
      } else if (selectedPlanId === 'frame') {
        setService('Social Content');
        setBudget(55000);
      } else if (selectedPlanId === 'cinema') {
        setService('Creative Direction');
        setBudget(120000);
      }
      onClearPlan(); // Reset after reading
    }
  }, [selectedPlanId, onClearPlan]);

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!name || !email) return;

  const randomHex = Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase()
    .substring(0, 4);

  const dateStr = new Date().getFullYear();
  const reference = `SUJ-${dateStr}-${randomHex}`;

  try {
    const response = await fetch("https://formspree.io/f/mnjkovlqMSPREE_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        projectReference: reference,
        name,
        email,
        service,
        tier,
        budget,
        details,
      }),
    });

    if (response.ok) {
      setProjectRef(reference);
      setIsSubmitted(true);
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};
  const handleCopyProposal = () => {
    const proposal = `SUJ STUDIOS PROPOSAL DRAFT\nProject ID: ${projectRef}\nClient: ${name}\nService: ${service} (${tier.toUpperCase()})\nEstimated Budget: ₹${budget.toLocaleString()}\nBrief: ${details}`;
    navigator.clipboard.writeText(proposal);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const getTierPriceLabel = () => {
    if (tier === 'cut') return '₹400 per cut';
    if (tier === 'frame') return '₹750 per output';
    if (tier === 'cinema') return '₹1200 high-retention';
    return 'Custom Retainer';
  };

  const getEstimatedTimeline = () => {
    if (tier === 'cut') return '3 - 5 Business Days';
    if (tier === 'frame') return '5 - 7 Business Days';
    if (tier === 'cinema') return '10 - 14 Business Days';
    return 'TBD upon consultation';
  };

  return (
    <section id="contact" className="bg-studio-secondary py-24 md:py-36 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Large Typography Tagline */}
        <div className="flex flex-col gap-6 max-w-4xl border-b border-studio-silver/20 pb-12">
          <span className="mono-label text-studio-silver">Project Desk & Booking</span>
          <h2 className="serif-header text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-studio-charcoal leading-[1.1] md:leading-none">
            Let's create something unforgettable.
          </h2>
          <p className="serif-body italic text-xl md:text-2xl text-studio-graphite mt-2">
            “Cinema is not a craft of pixels. It is the physics of light, sound, and deep human connection.”
          </p>
        </div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: The Interactive Booking Form (7 columns) */}
          <div className="lg:col-span-7 bg-studio-bg border border-studio-silver/10 p-8 md:p-12 shadow-xl relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8"
                >
                  <span className="mono-label text-[9px] text-studio-silver border-b border-studio-secondary pb-4">
                    Step 01 — Project Specifications
                  </span>

                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="client-name" className="mono-label text-[9px] text-studio-charcoal font-semibold">
                        Your Name / Agency
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        placeholder="e.g., Alexander Cos"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-studio-secondary border-b border-studio-charcoal/10 focus:border-studio-charcoal py-3 px-4 font-sans text-xs focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="client-email" className="mono-label text-[9px] text-studio-charcoal font-semibold">
                        Email Address
                      </label>
                      <input
                        id="client-email"
                        type="email"
                        required
                        placeholder="e.g., alex@cos.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-studio-secondary border-b border-studio-charcoal/10 focus:border-studio-charcoal py-3 px-4 font-sans text-xs focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service & Tier selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service-select" className="mono-label text-[9px] text-studio-charcoal font-semibold">
                        Offering Segment
                      </label>
                      <select
                        id="service-select"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-studio-secondary border-b border-studio-charcoal/10 focus:border-studio-charcoal py-3.5 px-4 font-sans text-xs focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Video Editing">Premium Video Editing</option>
                        <option value="Podcast Setup">Podcast Production</option>
                        <option value="Creative Direction">Creative Direction</option>
                        <option value="Cinematography">Cinematography</option>
                        <option value="Fine Photography">Commercial Photography</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="mono-label text-[9px] text-studio-charcoal font-semibold">
                        Pricing Tier Anchor
                      </label>
                      <div className="flex bg-studio-secondary p-1 border-b border-studio-charcoal/10">
                        {['cut', 'frame', 'cinema'].map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setTier(t)}
                            className={`flex-1 py-2 text-[8px] font-mono font-bold tracking-widest uppercase transition-colors cursor-pointer ${
                              tier === t
                                ? 'bg-studio-charcoal text-white'
                                : 'text-studio-silver hover:text-studio-charcoal'
                            }`}
                            id={`form-tier-btn-${t}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Budget Slider */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-[10px] font-mono text-studio-charcoal uppercase">
                      <span>Approximate Retainer Budget</span>
                      <span className="font-bold text-studio-charcoal">
                        ₹{budget.toLocaleString()} INR
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="250000"
                      step="5000"
                      value={budget}
                      onChange={(e) => setBudget(parseInt(e.target.value))}
                      className="w-full h-1 bg-studio-secondary rounded-lg appearance-none cursor-pointer accent-studio-charcoal"
                      style={{
                        background: `linear-gradient(to right, #1A1A1A ${(budget - 10000) / 240000 * 100}%, #F4F3EE ${(budget - 10000) / 240000 * 100}%)`,
                      }}
                    />
                    <div className="flex justify-between text-[8px] text-studio-silver font-mono uppercase">
                      <span>₹10,000</span>
                      <span>₹1,20,000 (Recommended)</span>
                      <span>₹2,50,000+</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="project-details" className="mono-label text-[9px] text-studio-charcoal font-semibold">
                      Project Narrative & Outline
                    </label>
                    <textarea
                      id="project-details"
                      rows={4}
                      placeholder="Briefly describe your timeline requirements, core subject story, and visual styling targets..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full bg-studio-secondary border-b border-studio-charcoal/10 focus:border-studio-charcoal py-3 px-4 font-sans text-xs focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Action Button */}
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-3 bg-studio-charcoal hover:bg-studio-graphite text-white text-xs font-semibold uppercase tracking-[0.2em] py-4.5 transition-all duration-300 rounded-none cursor-pointer"
                    id="contact-submit-btn"
                  >
                    Submit Project Proposal
                    <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-8"
                >
                  <div className="h-16 w-16 bg-studio-secondary rounded-full flex items-center justify-center text-studio-charcoal border border-studio-charcoal/10">
                    <CheckCircle className="h-8 w-8" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="mono-label text-[9px] text-studio-silver uppercase tracking-[0.2em]">
                      Booking Confirmed
                    </span>
                    <h3 className="serif-header text-3xl font-bold text-studio-charcoal">
                      Proposal Lodged Successfully
                    </h3>
                    <p className="font-sans text-xs text-studio-graphite max-w-md mx-auto leading-relaxed">
                      Thanks, <span className="font-semibold">{name}</span>. Your project order draft has been logged under custom index reference <span className="font-mono bg-studio-secondary px-1.5 py-0.5 font-bold text-studio-charcoal">{projectRef}</span>. We will analyze your specifications and reach out in 12 hours.
                    </p>
                  </div>

                  {/* Dynamic Action suite on Success */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <button
                      onClick={handleCopyProposal}
                      className="flex items-center justify-center gap-2 border border-studio-charcoal/15 bg-studio-secondary text-studio-charcoal text-[10px] font-mono font-bold tracking-widest uppercase py-3.5 px-6 hover:bg-studio-charcoal hover:text-white transition-all duration-300"
                      id="proposal-copy-btn"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {copiedText ? 'Copied Draft' : 'Copy Work Order'}
                    </button>
                    <a
                      href={`https://wa.me/919901535017?text=Hi Sujnan, I just submitted a project proposal draft on SUJ STUDIOS website under Reference ID: ${projectRef}. My name is ${name}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 bg-studio-charcoal text-white text-[10px] font-mono font-bold tracking-widest uppercase py-3.5 px-6 hover:bg-studio-graphite transition-all duration-300"
                      id="whatsapp-chat-btn"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      Chat on WhatsApp
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setDetails('');
                    }}
                    className="text-[9px] font-mono uppercase tracking-[0.2em] text-studio-silver hover:text-studio-charcoal transition-colors underline cursor-pointer"
                    id="contact-new-proposal-btn"
                  >
                    Submit New Specs
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Block: Dynamic Live Proposal Draft / Contract (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Live proposal card */}
            <div className="bg-studio-bg border border-studio-silver/10 p-8 flex flex-col gap-6 shadow-md relative">
              {/* Draft label */}
              <div className="absolute top-4 right-4 font-mono text-[8px] text-studio-silver uppercase tracking-widest border border-studio-secondary px-2 py-0.5 bg-studio-secondary">
                LIVE COMPILER OUTPUT
              </div>

              <div className="flex items-center gap-3 border-b border-studio-secondary pb-4">
                <FileText className="h-5 w-5 text-studio-silver" />
                <span className="mono-label text-[9px] text-studio-charcoal font-bold">
                  STUDIO WORK-ORDER DRAFT
                </span>
              </div>

              {/* Dynamic draft elements */}
              <div className="flex flex-col gap-5 text-xs font-sans text-studio-graphite leading-relaxed">
                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-1 sm:gap-2 border-b border-studio-secondary/50 pb-2">
                  <span className="mono-label text-[8px] text-studio-silver">CONTRACTOR:</span>
                  <span className="sm:col-span-2 font-mono text-studio-charcoal uppercase font-bold text-[10px]">
                    SUJ STUDIOS LTD
                  </span>
                </div>

                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-1 sm:gap-2 border-b border-studio-secondary/50 pb-2">
                  <span className="mono-label text-[8px] text-studio-silver">CLIENT ORG:</span>
                  <span className="sm:col-span-2 font-bold text-studio-charcoal">
                    {name || 'Awaiting Input...'}
                  </span>
                </div>

                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-1 sm:gap-2 border-b border-studio-secondary/50 pb-2">
                  <span className="mono-label text-[8px] text-studio-silver">OFFERING:</span>
                  <span className="sm:col-span-2 text-studio-charcoal font-medium">
                    {service}
                  </span>
                </div>

                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-1 sm:gap-2 border-b border-studio-secondary/50 pb-2">
                  <span className="mono-label text-[8px] text-studio-silver">PLAN ANCHOR:</span>
                  <span className="sm:col-span-2 text-studio-charcoal font-medium uppercase font-mono text-[10px] flex flex-wrap items-center gap-1.5">
                    <span>{tier}</span>
                    <span className="text-studio-silver font-sans font-normal normal-case">({getTierPriceLabel()})</span>
                  </span>
                </div>

                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-1 sm:gap-2 border-b border-studio-secondary/50 pb-2">
                  <span className="mono-label text-[8px] text-studio-silver">EST TIMELINE:</span>
                  <span className="sm:col-span-2 text-studio-charcoal font-medium">
                    {getEstimatedTimeline()}
                  </span>
                </div>

                <div className="flex flex-col sm:grid sm:grid-cols-3 gap-1 sm:gap-2 border-b border-studio-secondary/50 pb-2">
                  <span className="mono-label text-[8px] text-studio-silver">EST BUDGET:</span>
                  <span className="sm:col-span-2 text-studio-charcoal font-bold text-sm">
                    ₹{budget.toLocaleString()} INR
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="mono-label text-[8px] text-studio-silver">CLIENT STATEMENT:</span>
                  <p className="font-serif italic text-studio-silver leading-relaxed bg-studio-secondary p-3 text-[11px] border-l border-studio-charcoal/20">
                    {details ? `“${details}”` : '“No narrative supplied. Awaiting description details...”'}
                  </p>
                </div>
              </div>

              {/* Verified seal */}
              <div className="border-t border-studio-secondary/80 pt-4 mt-2 flex items-center justify-between text-[9px] text-studio-silver font-mono">
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-studio-silver" />
                  AUTHENTICATED BLUEPRINT
                </span>
                <span>STATUS: ACTIVE COMPILATION</span>
              </div>
            </div>

            {/* Direct Studio Contact Suite */}
            <div className="flex flex-col gap-4">
              <span className="mono-label text-[9px] text-studio-silver pl-1">
                Direct Contact Suite
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="mailto:sujnansuju@gmail.com"
                  className="flex items-center gap-3 bg-studio-bg border border-studio-silver/10 hover:border-studio-charcoal p-4 transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 text-studio-silver group-hover:text-studio-charcoal shrink-0" />
                  <div className="flex flex-col">
                    <span className="mono-label text-[8px] text-studio-silver leading-none mb-1">Email</span>
                    <span className="font-sans text-[11px] text-studio-charcoal font-medium truncate">
                      sujnansuju@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/sujnxnn"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-studio-bg border border-studio-silver/10 hover:border-studio-charcoal p-4 transition-all duration-300 group"
                >
                  <Instagram className="h-5 w-5 text-studio-silver group-hover:text-studio-charcoal shrink-0" />
                  <div className="flex flex-col">
                    <span className="mono-label text-[8px] text-studio-silver leading-none mb-1">Instagram</span>
                    <span className="font-sans text-[11px] text-studio-charcoal font-medium truncate">
                      @sujnxnn
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919901535017"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-studio-bg border border-studio-silver/10 hover:border-studio-charcoal p-4 transition-all duration-300 group"
                >
                  <MessageSquare className="h-5 w-5 text-studio-silver group-hover:text-studio-charcoal shrink-0" />
                  <div className="flex flex-col">
                    <span className="mono-label text-[8px] text-studio-silver leading-none mb-1">WhatsApp</span>
                    <span className="font-sans text-[11px] text-studio-charcoal font-medium truncate">
                      +91 99015 35017
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
