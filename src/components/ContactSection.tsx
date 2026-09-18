import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Copy, Check, Sparkles, Shield, Clock, Phone, Mail, Building, Globe } from 'lucide-react';
import { Language, ProjectProposalForm } from '../types';

interface ContactSectionProps {
  lang: Language;
  prefilledNotes?: string;
}

const SERVICE_OPTIONS = [
  'Global Media Buying & Programmatic',
  'Creative Direction & 3D CGI Spots',
  'Performance Marketing & ROAS',
  'Global Out-of-Home & Times Square Billboards',
  'Influencer & Global PR Network',
  'AI Marketing & Attribution Intelligence'
];

const BUDGET_TIERS = [
  '$10,000 - $25,000 / month',
  '$25,000 - $50,000 / month',
  '$50,000 - $100,000 / month',
  '$100,000 - $250,000 / month',
  '$250,000+ Enterprise Scale'
];

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, prefilledNotes = '' }) => {
  const [formData, setFormData] = useState<ProjectProposalForm>({
    brandName: '',
    contactName: '',
    email: '',
    phone: '',
    targetRegion: 'Global Cross-Market',
    budgetTier: '$50,000 - $100,000 / month',
    servicesNeeded: ['Global Media Buying & Programmatic'],
    campaignObjectives: prefilledNotes,
    preferredLaunchDate: 'Within 30 Days'
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledNotes) {
      setFormData((prev) => ({
        ...prev,
        campaignObjectives: prev.campaignObjectives ? `${prev.campaignObjectives}\n\n${prefilledNotes}` : prefilledNotes
      }));
    }
  }, [prefilledNotes]);

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(srv);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== srv)
          : [...prev.servicesNeeded, srv]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `WWN-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryId(id);
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    const text = `WORLD WIDE NETWORK — CAMPAIGN BRIEF\nRef: ${inquiryId}\nBrand: ${formData.brandName}\nContact: ${formData.contactName} (${formData.email}, ${formData.phone})\nBudget: ${formData.budgetTier}\nRegion: ${formData.targetRegion}\nServices: ${formData.servicesNeeded.join(', ')}\nObjectives: ${formData.campaignObjectives}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#07090f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/20">
            <Send className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Start a Global Project' : 'اشتہاری مشاورت اور کوٹیشن'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight mb-4">
            {lang === 'en' ? (
              <>
                SCALE YOUR BRAND ON THE <span className="gold-gradient">WORLD STAGE</span>
              </>
            ) : (
              <span className="font-urdu text-3xl sm:text-4xl leading-relaxed">
                آج ہی اپنی اشتہاری مہم کی منصوبہ بندی شروع کریں
              </span>
            )}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Submit your campaign requirements below. Our international media directors will formulate a customized media plan within 4 business hours.'
              : 'ہمیں اپنے برانڈ اور بجٹ کے بارے میں آگاہ کریں۔ ہماری بین الاقوامی اشتہاری ٹیم چند گھنٹوں میں مکمل پلان کے ساتھ رابطہ کرے گی۔'}
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Panel (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-white font-display">
                Global Strategy Desks
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="font-bold text-amber-400 block text-sm">Americas HQ (New York)</span>
                  <p className="text-slate-400">One World Trade Center, 64th Fl</p>
                  <p className="text-slate-300 font-mono">+1 (212) 890-4400</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="font-bold text-amber-400 block text-sm">EMEA Hub (London)</span>
                  <p className="text-slate-400">22 Bishopsgate, Level 38</p>
                  <p className="text-slate-300 font-mono">+44 (20) 7946-0812</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="font-bold text-amber-400 block text-sm">MENA Gateway (Dubai)</span>
                  <p className="text-slate-400">DIFC Gate Precinct 4, Level 7</p>
                  <p className="text-slate-300 font-mono">+971 (4) 362-7700</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="font-bold text-amber-400 block text-sm">South Asia (Karachi)</span>
                  <p className="text-slate-400">Dolmen City Executive Towers, Clifton</p>
                  <p className="text-slate-300 font-mono">+92 (21) 3529-8800</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>4-Hour SLA Strategy Turnaround</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict Mutual NDA Protected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel (8 cols) */}
          <div className="lg:col-span-8 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                    INQUIRY DISPATCHED SUCCESSFULLY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
                    Campaign Brief Registered
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                    Your agency inquiry ID is <span className="font-mono font-bold text-amber-400">{inquiryId}</span>. A Senior Media Director has been assigned to your brief.
                  </p>
                </div>

                {/* Brief Summary Receipt Card */}
                <div className="p-6 rounded-2xl bg-black/60 border border-white/10 text-left max-w-lg mx-auto space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-mono text-slate-400">Reference Token:</span>
                    <span className="font-mono text-white font-bold">{inquiryId}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Brand:</span>
                    <span className="text-white font-semibold">{formData.brandName || 'Unspecified'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Representative:</span>
                    <span className="text-white">{formData.contactName} ({formData.email})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Budget Bracket:</span>
                    <span className="text-amber-400 font-mono font-bold">{formData.budgetTier}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Selected Services:</span>
                    <span className="text-slate-200 text-right truncate max-w-[200px]">
                      {formData.servicesNeeded.join(', ')}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <button
                    onClick={handleCopySummary}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Brief Copied to Clipboard!' : 'Copy Brief Summary'}</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-400 text-black font-bold text-xs hover:bg-amber-300 transition-colors cursor-pointer"
                  >
                    Submit Another Campaign Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Brand & Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Brand / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Zenith Global or Apex Lifestyle"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Contact Person & Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins (CMO)"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Direct Phone or WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000 or +92 300..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Budget Tier & Target Region */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Monthly Media Budget Tier
                    </label>
                    <select
                      value={formData.budgetTier}
                      onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#131726] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      {BUDGET_TIERS.map((tier) => (
                        <option key={tier} value={tier}>
                          {tier}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Primary Target Region
                    </label>
                    <select
                      value={formData.targetRegion}
                      onChange={(e) => setFormData({ ...formData, targetRegion: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#131726] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      <option value="Global Cross-Market">Global Cross-Market (Worldwide)</option>
                      <option value="North America (US & Canada)">North America (US & Canada)</option>
                      <option value="Europe & United Kingdom">Europe & United Kingdom</option>
                      <option value="Middle East & GCC (UAE, Saudi)">Middle East & GCC (UAE, Saudi)</option>
                      <option value="South Asia & Emerging Markets">South Asia & Pakistan / Regional</option>
                      <option value="Asia Pacific & Oceania">Asia Pacific & Oceania</option>
                    </select>
                  </div>
                </div>

                {/* Capabilities Needed Checkboxes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                    Agency Capabilities Required (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICE_OPTIONS.map((srv) => {
                      const selected = formData.servicesNeeded.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`p-3 rounded-xl text-xs text-left font-medium transition-all flex items-center justify-between border cursor-pointer ${
                            selected
                              ? 'bg-amber-400/15 border-amber-400 text-amber-300'
                              : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                          }`}
                        >
                          <span className="truncate pr-2">{srv}</span>
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center text-[10px] shrink-0 ${
                              selected ? 'bg-amber-400 text-black font-bold' : 'border border-slate-600'
                            }`}
                          >
                            {selected ? '✓' : ''}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Campaign Objectives & Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Campaign Brief & Objectives
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand vision, key KPIs, desired launch dates, or reference campaigns..."
                    value={formData.campaignObjectives}
                    onChange={(e) => setFormData({ ...formData, campaignObjectives: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-base shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01]"
                >
                  <span>{lang === 'en' ? 'Dispatch Campaign Brief to Strategy Directors' : 'اشتہاری پلان جمع کروائیں'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
