import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Globe2, Sparkles, TrendingUp, ShieldCheck, CheckCircle2, Volume2, VolumeX } from 'lucide-react';
import { AGENCY_STATS } from '../data/agencyData';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onOpenProposal: () => void;
  onOpenCalculator: () => void;
}

const LIVE_AD_EVENTS = [
  { city: 'New York', event: 'Times Square 3D Anamorphic Screen Takeover', time: 'Just now', reach: '2.4M Live Reach' },
  { city: 'London', event: 'Piccadilly Lights Synchronized Programmatic Buy', time: '2m ago', reach: '1.8M Footfall' },
  { city: 'Dubai', event: 'Burj Khalifa Projection & GCC Luxury Retargeting', time: '4m ago', reach: '850K Live Views' },
  { city: 'Tokyo', event: 'Shibuya Crossing Interactive AR Broadcast', time: '7m ago', reach: '3.1M Impressions' },
  { city: 'Singapore', event: 'Cross-Border TikTok Shop Programmatic Blitz', time: '9m ago', reach: '12.4M Video Plays' },
  { city: 'Karachi', event: 'Cricket World Cup Live Stream Commercial Takeover', time: '12m ago', reach: '9.2M Viewers' },
];

export const Hero: React.FC<HeroProps> = ({ lang, onOpenProposal, onOpenCalculator }) => {
  const [currentTickerIndex, setCurrentTickerIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTickerIndex((prev) => (prev + 1) % LIVE_AD_EVENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeEvent = LIVE_AD_EVENTS[currentTickerIndex];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-grid">
      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top agency accreditation badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-amber-500/30 text-xs font-semibold text-amber-300 shadow-lg shadow-amber-500/10 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span>
              {lang === 'en'
                ? 'Global Agency Network of the Year 2025'
                : 'سال 2025 کی بہترین عالمی اشتہاری ایجنسی'}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>$480M+ Media Deployed</span>
          </div>
        </div>

        {/* Hero Main Typography */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 font-display">
            {lang === 'en' ? (
              <>
                BORDERLESS <span className="gold-gradient">CREATIVITY.</span>
                <br />
                UNSTOPPABLE <span className="text-slate-100">REACH.</span>
              </>
            ) : (
              <span className="font-urdu leading-normal text-3xl sm:text-5xl lg:text-6xl text-amber-300">
                عالمی سطح پر آپ کے برانڈ کی طاقتور اور منافع بخش تشہیر
              </span>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'World Wide Network is a premier advertising agency engineering iconic creative campaigns, programmatic media buying, and viral digital expansion across 140+ countries.'
              : 'ورلڈ وائڈ نیٹ ورک آپ کے کاروبار کو نیویارک سے لے کر دبئی، لندن اور ایشیا تک جدید ڈیجیٹل اشتہارات، ٹی وی، اور بل بورڈز کے ذریعے عالمی برانڈ بناتا ہے۔'}
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenProposal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>{lang === 'en' ? 'Request Media Proposal' : 'اشتہاری منصوبہ اور قیمت حاصل کریں'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-400/40 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <TrendingUp className="w-5 h-5 text-amber-400" />
            <span>{lang === 'en' ? 'Launch Media ROI Planner' : 'بجٹ اور ریچ کیلکولیٹر'}</span>
          </button>

          <button
            onClick={() => setShowVideoModal(true)}
            className="w-full sm:w-auto px-5 py-4 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-black/40 hover:bg-black/60 border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center">
              <Play className="w-3 h-3 fill-amber-400 translate-x-0.5" />
            </div>
            <span>{lang === 'en' ? 'Watch Agency Reel (2025)' : 'ایجنسی شو ریل دیکھیں'}</span>
          </button>
        </div>

        {/* Live Network Activity Ticker */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="glass-panel rounded-2xl px-5 py-3.5 border border-white/10 shadow-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <div className="truncate text-xs sm:text-sm">
                <span className="text-amber-400 font-bold uppercase tracking-wider mr-2">
                  [LIVE {activeEvent.city}]:
                </span>
                <span className="text-slate-200">{activeEvent.event}</span>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs text-slate-400">
              <span className="hidden sm:inline bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-medium border border-emerald-500/20">
                {activeEvent.reach}
              </span>
              <span className="text-[11px] text-slate-400">{activeEvent.time}</span>
            </div>
          </div>
        </div>

        {/* Big Agency Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {AGENCY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display mb-1 group-hover:text-amber-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-200 mb-1">
                {lang === 'en' ? stat.label : stat.labelUrdu}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Agency Reel Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-4xl bg-[#0e121d] rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141927]">
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-white text-base">
                  World Wide Network — Global Showcase Showreel 2025
                </span>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 text-sm font-semibold"
              >
                ✕ Close
              </button>
            </div>

            {/* Simulated Cinematic High-Def Agency Showcase */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop"
                alt="Showreel Preview"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500 text-black font-extrabold text-xs mb-3 w-fit">
                  OFFICIAL REEL: BORDERLESS IMPACT
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display mb-2">
                  "Turning Ad Budgets into Cultural Icons"
                </h3>
                <p className="text-sm text-slate-300 max-w-xl">
                  Featuring 3D OOH placements in Times Square, Shibuya & Burj Khalifa, Super Bowl commercials, and viral TikTok campaigns scaling enterprise revenue.
                </p>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs text-amber-400 font-mono">
                <span className="animate-pulse">● REC</span> 4K ULTRA-HD
              </div>
            </div>

            <div className="p-6 bg-[#111522] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <div className="text-xs text-slate-400">
                Want this caliber of creative execution for your brand?
              </div>
              <button
                onClick={() => {
                  setShowVideoModal(false);
                  onOpenProposal();
                }}
                className="px-6 py-2.5 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 text-sm shadow-md"
              >
                Book a Strategy Brief With Our Directors
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
