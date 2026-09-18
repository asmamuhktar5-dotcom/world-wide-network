import React, { useState } from 'react';
import { Award, Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';
import { AGENCY_AWARDS, TESTIMONIALS, GLOBAL_CLIENTS } from '../data/agencyData';
import { Language } from '../types';

interface AwardsAndTestimonialsProps {
  lang: Language;
}

export const AwardsAndTestimonials: React.FC<AwardsAndTestimonialsProps> = ({ lang }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentTestimonialIndex];

  return (
    <section id="awards" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Logos Bar */}
        <div className="mb-20">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-8 font-semibold">
            {lang === 'en'
              ? 'TRUSTED BY INNOVATIVE CATEGORY LEADERS & FORTUNE 500 BRANDS'
              : 'دنیا کے نمایاں اور معروف برانڈز کا بااعتماد پارٹنر'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {GLOBAL_CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-colors flex flex-col items-center justify-center text-center group"
              >
                <span className="font-extrabold text-sm text-slate-300 group-hover:text-white transition-colors font-display">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-400 group-hover:text-amber-400">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/20">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Industry Recognition & Client Impact' : 'عالمی ایوارڈز اور کلائنٹ فیڈ بیک'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight mb-4">
            {lang === 'en' ? (
              <>
                CELEBRATED BY THE <span className="gold-gradient">INDUSTRY.</span>
                <br /> REVERED BY OUR CLIENTS.
              </>
            ) : (
              <span className="font-urdu text-3xl sm:text-4xl leading-relaxed">
                بین الاقوامی اعزازات اور کلائنٹس کا غیر متزلزل اعتماد
              </span>
            )}
          </h2>
        </div>

        {/* Two Columns: Left Awards List, Right Testimonial Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Awards Column (6 cols) */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Premier Global Honors</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">2023–2025</span>
            </div>

            <div className="space-y-3">
              {AGENCY_AWARDS.map((award, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-colors flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white font-display truncate">
                        {award.title}
                      </h4>
                      <span className="text-xs font-mono text-amber-400 shrink-0 font-bold">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">
                      {award.festival} — <span className="text-slate-400">{award.category}</span>
                    </p>
                    <p className="text-[11px] text-slate-400 italic mt-0.5">
                      Campaign: {award.campaign}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Spotlight Column (6 cols) */}
          <div className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between shadow-xl relative overflow-hidden bg-gradient-to-br from-[#121625] to-[#0c0e18]">
            <div className="absolute top-6 right-8 text-amber-400/15 pointer-events-none">
              <Quote className="w-24 h-24 stroke-[1]" />
            </div>

            <div>
              {/* Star rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-mono text-slate-400 ml-2 font-bold">5.0 Agency Score</span>
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed mb-8 relative z-10">
                "{lang === 'en' ? activeTestimonial.quote : activeTestimonial.quoteUrdu}"
              </blockquote>

              {/* Impact Metric Highlight */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold mb-8">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Impact: {activeTestimonial.impactMetric}</span>
              </div>
            </div>

            {/* Author details & Nav controls */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {activeTestimonial.author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {activeTestimonial.role}
                  </p>
                  <p className="text-xs text-amber-400 font-semibold">
                    {activeTestimonial.company}
                  </p>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-9 h-9 rounded-full bg-amber-400 hover:bg-amber-300 text-black flex items-center justify-center transition-colors cursor-pointer shadow-md"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
