import React, { useState } from 'react';
import { Award, ArrowUpRight, CheckCircle2, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy, Language } from '../types';

interface CaseStudiesSectionProps {
  lang: Language;
  onOpenProposal: (clientRef?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ lang, onOpenProposal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Automotive & EV Luxury', 'Luxury Beauty & Fragrance', 'Fintech & Neobanking', 'FMCG & Soft Drinks', 'B2B Enterprise Software'];

  const filteredStudies = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.sector.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(c.sector.toLowerCase()));

  return (
    <section id="work" className="py-24 bg-[#080a10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Portfolio & Proof of Performance' : 'کامیاب اشتہاری مہمات'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
              {lang === 'en' ? (
                <>
                  ICONIC WORK THAT <span className="gold-gradient">SHAPED CULTURE</span> &
                  <br className="hidden sm:block" /> DOMINATED MARKETS
                </>
              ) : (
                <span className="font-urdu text-3xl sm:text-4xl leading-relaxed">
                  عالمی برانڈز کے لیے ریکارڈ ساز اشتہاری نتائج
                </span>
              )}
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
            {lang === 'en'
              ? 'Explore how we took challenger brands and Fortune 500 titans to the pinnacle of awareness, engagement, and exponential revenue.'
              : 'دیکھیں کہ کس طرح ہم نے نت نئے آئیڈیاز اور عالمی میڈیا کے ذریعے اپنے کلائنٹس کے بزنس کو تیزی سے وسعت دی۔'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-[#090b10]/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-bold text-amber-400 border border-amber-400/30">
                      {study.sector}
                    </span>
                  </div>

                  {study.awards && study.awards.length > 0 && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/90 text-black text-[10px] font-black uppercase tracking-wider shadow-md">
                        <Award className="w-3 h-3" />
                        <span>Award Winner</span>
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {study.client} • {study.year}
                    </span>
                    <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-300 transition-colors line-clamp-1">
                      {lang === 'en' ? study.title : study.titleUrdu}
                    </h3>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  <p className="text-sm text-slate-300 line-clamp-2 mb-6 leading-relaxed">
                    {lang === 'en' ? study.summary : study.summaryUrdu}
                  </p>

                  {/* Impact Stats Row */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 mb-6">
                    {study.keyMetrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <div className="text-lg font-black text-amber-400 font-display">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium">
                          {lang === 'en' ? m.label : (m.labelUrdu || m.label)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {study.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-slate-400 px-2 py-0.5 rounded bg-white/5"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setActiveCaseStudy(study)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-amber-400 hover:text-black text-slate-200 transition-all font-bold text-xs flex items-center justify-center gap-2 group/btn border border-white/10 hover:border-amber-400 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'View Full Case Brief & ROI' : 'مکمل تفصیلی رپورٹ دیکھیں'}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0f1422] rounded-2xl border border-amber-400/30 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Modal Hero Image */}
            <div className="relative h-60 sm:h-72 overflow-hidden">
              <img
                src={activeCaseStudy.heroImage}
                alt={activeCaseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1422] via-[#0f1422]/60 to-transparent" />
              
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md text-xs font-bold"
              >
                ✕ Close
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded bg-amber-400 text-black text-xs font-black uppercase">
                    {activeCaseStudy.client}
                  </span>
                  <span className="text-xs text-slate-300">
                    {activeCaseStudy.sector} • Campaign {activeCaseStudy.year}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {lang === 'en' ? activeCaseStudy.title : activeCaseStudy.titleUrdu}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Metrics Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  Verified Campaign Outcomes
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeCaseStudy.keyMetrics.map((met, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-xl sm:text-2xl font-black text-white font-display">
                        {met.value}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        {lang === 'en' ? met.label : (met.labelUrdu || met.label)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards if any */}
              {activeCaseStudy.awards && activeCaseStudy.awards.length > 0 && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-amber-300 block">Industry Recognition:</span>
                    <span className="text-xs text-slate-300">{activeCaseStudy.awards.join(' • ')}</span>
                  </div>
                </div>
              )}

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                    The Business Challenge
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeCaseStudy.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    WWN Network Solution
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeCaseStudy.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-[#131828] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Achieve comparable market lift for your brand.
              </div>
              <button
                onClick={() => {
                  const clientRef = activeCaseStudy.client;
                  setActiveCaseStudy(null);
                  onOpenProposal(`Similar to ${clientRef} campaign`);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Custom Brief for This Sector</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
