import React, { useState } from 'react';
import { Globe, Menu, X, ArrowUpRight, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenProposal: (prefill?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenProposal, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services', labelUrdu: 'خدمات' },
    { href: '#work', label: 'Work & Impact', labelUrdu: 'کامیاب مہمات' },
    { href: '#network', label: 'Global Hubs', labelUrdu: 'عالمی نیٹ ورک' },
    { href: '#calculator', label: 'Media Planner', labelUrdu: 'بجٹ کیلکولیٹر' },
    { href: '#awards', label: 'Awards & Trust', labelUrdu: 'ایوارڈز اور ساکھ' },
    { href: '#contact', label: 'Contact', labelUrdu: 'رابطہ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#090b10]/85 backdrop-blur-md border-b border-white/10">
      {/* Top micro-banner: Live Network Status */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 text-[11px] tracking-wider uppercase border-b border-white/5 bg-black/40 text-slate-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-slate-300">WWN Global Grid Online:</span>
          <span>140+ Markets Active</span>
          <span className="text-slate-600">|</span>
          <span className="text-amber-400 font-medium">Programmatic Bidding: 0.12ms Latency</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Google Premier & Meta Diamond Agency</span>
          </div>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
            className="flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors font-medium cursor-pointer"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'اردو میں دیکھیں (Urdu)' : 'View in English'}</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <Globe className="w-6 h-6 text-black stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-display">
                  WORLD WIDE
                </span>
                <span className="font-extrabold text-xl tracking-tight text-amber-400 font-display">
                  NETWORK
                </span>
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-slate-400 font-medium -mt-0.5">
                Global Advertising & Media Agency
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {lang === 'en' ? link.label : link.labelUrdu}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language toggle mobile/desktop */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'en' ? 'اردو' : 'EN'}</span>
            </button>

            <button
              onClick={() => onOpenProposal()}
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span>{lang === 'en' ? 'Start Campaign' : 'مہم شروع کریں'}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="p-2 text-xs font-bold rounded-lg bg-white/5 text-amber-400 border border-white/10"
            >
              {lang === 'en' ? 'اردو' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e111a] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {lang === 'en' ? link.label : link.labelUrdu}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full py-3 px-4 rounded-xl text-center font-bold text-black bg-amber-400 hover:bg-amber-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20"
            >
              <Send className="w-4 h-4" />
              <span>{lang === 'en' ? 'Start a Campaign Brief' : 'اشتہاری منصوبہ بنائیں'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
