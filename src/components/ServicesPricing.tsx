/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Check, Info, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICE_PLANS } from '../data';

interface ServicesPricingProps {
  onSelectPlan: (planId: string) => void;
}

export default function ServicesPricing({ onSelectPlan }: ServicesPricingProps) {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Split currency symbol and numeric value for perfect typographic rendering
  const getPriceParts = (planId: string) => {
    const plan = SERVICE_PLANS.find((p) => p.id === planId);
    if (!plan) return { symbol: '', value: '' };
    if (currency === 'INR') {
      return { symbol: '₹', value: plan.priceINR.toString() };
    } else {
      return { symbol: '$', value: plan.priceUSD.toString() };
    }
  };

  const getSubtext = () => {
    if (currency === 'INR') {
      return 'Per edited output • Flat rate, no surprises';
    } else {
      return 'Per edited output • Converted rate, flat pricing';
    }
  };

  return (
    <section id="pricing" className="bg-studio-secondary py-24 md:py-36 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-studio-charcoal/10 pb-8 gap-4">
          <div>
            <span className="mono-label text-studio-silver">Creative Packages</span>
            <h2 className="serif-header text-4xl md:text-6xl font-bold text-studio-charcoal mt-2">
              Studio Offerings
            </h2>
          </div>

          {/* Interactive Currency Switcher */}
          <div className="flex items-center gap-2 bg-studio-bg border border-studio-charcoal/10 p-1 rounded-none self-start">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-4 py-1.5 text-[10px] font-mono font-bold tracking-widest cursor-pointer transition-all duration-300 ${
                currency === 'INR'
                  ? 'bg-studio-charcoal text-white'
                  : 'text-studio-silver hover:text-studio-charcoal'
              }`}
              id="currency-inr-btn"
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 text-[10px] font-mono font-bold tracking-widest cursor-pointer transition-all duration-300 ${
                currency === 'USD'
                  ? 'bg-studio-charcoal text-white'
                  : 'text-studio-silver hover:text-studio-charcoal'
              }`}
              id="currency-usd-btn"
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Informational Subtext */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 bg-studio-bg p-8 border border-studio-charcoal/10">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-studio-charcoal shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-xs text-studio-charcoal uppercase tracking-wider">
                Premium Boutique Assembly
              </span>
              <p className="font-sans text-xs text-studio-graphite mt-1 max-w-2xl leading-relaxed">
                We operate as an exclusive cinematic partner, not a micro-gig platform. Every sequence, frame pacing, and soundmastering curve is treated with rigorous creative direction. No presets, no templates.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-studio-charcoal border-l border-studio-charcoal/10 pl-4 py-1 flex items-center gap-2 shrink-0">
            <Sparkles className="h-3.5 w-3.5 text-studio-silver" />
            Custom workflows available
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICE_PLANS.map((plan, index) => {
            return (
              <motion.div
                key={plan.id}
                className="relative flex flex-col justify-between p-8 md:p-10 transition-all duration-500 bg-studio-bg group border border-studio-charcoal/10 hover:border-studio-charcoal hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col gap-6">
                  {/* Category Plan Label */}
                  <div className="flex justify-between items-center border-b border-studio-secondary pb-4">
                    <span className="mono-label text-[11px] text-studio-silver font-bold">
                      {plan.name}
                    </span>
                    <span className="font-mono text-[10px] text-studio-silver">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Price Block */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-baseline gap-1">
                      <span className="font-sans text-lg md:text-xl font-light text-studio-silver select-none mr-1">
                        {getPriceParts(plan.id).symbol}
                      </span>
                      <span className="serif-header text-4xl md:text-5xl font-bold text-studio-charcoal tracking-normal leading-none transition-all duration-500">
                        {getPriceParts(plan.id).value}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-studio-silver uppercase tracking-wider">
                      {getSubtext()}
                    </span>
                  </div>

                  {/* Plan description */}
                  <p className="serif-body italic text-sm text-studio-graphite leading-relaxed border-b border-studio-secondary pb-6">
                    {plan.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="flex flex-col gap-4">
                    <span className="mono-label text-[8px] text-studio-silver tracking-[0.2em]">
                      Includes Offerings
                    </span>
                    <ul className="flex flex-col gap-3">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-studio-charcoal shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-studio-graphite leading-relaxed">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Booking Trigger */}
                <div className="pt-10 mt-auto">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className="w-full flex items-center justify-center gap-3 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-500 rounded-none cursor-pointer focus:outline-none bg-studio-secondary text-studio-charcoal group-hover:bg-studio-charcoal group-hover:text-white hover:!bg-studio-graphite hover:!text-white"
                    id={`pricing-select-${plan.id}`}
                  >
                    Select {plan.name} Package
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Footer Disclaimer */}
        <p className="font-sans text-[10px] text-studio-silver text-center italic mt-4 max-w-2xl mx-auto leading-relaxed">
          Need custom volume, monthly retainers, corporate cinematography, or podcast master setups?
          Select custom details on the Booking Desk below or get in touch directly.
        </p>

      </div>
    </section>
  );
}
