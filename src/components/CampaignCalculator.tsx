import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Target, PieChart, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language, CampaignPlanRequest } from '../types';

interface CampaignCalculatorProps {
  lang: Language;
  onApplyPlanToProposal: (planSummary: string) => void;
}

const REGIONS = [
  { id: 'global', name: 'Global Cross-Market (US, EU, MENA, APAC)', nameUrdu: 'عالمی تمام مارکیٹس' },
  { id: 'north-america', name: 'North America (US & Canada)', nameUrdu: 'شمالی امریکہ (یو ایس اور کینیڈا)' },
  { id: 'europe', name: 'Europe & UK (London, Paris, Berlin)', nameUrdu: 'یورپ اور برطانیہ' },
  { id: 'mena', name: 'Middle East & GCC (UAE, Saudi Arabia)', nameUrdu: 'مشرقِ وسطیٰ اور جی سی سی' },
  { id: 'south-asia', name: 'South Asia (Pakistan, UAE & Regional)', nameUrdu: 'جنوبی ایشیا اور پاکستان' },
  { id: 'apac', name: 'Asia Pacific (Singapore, Japan, Australia)', nameUrdu: 'ایشیا پیسیفک اور جاپان' },
];

const GOALS = [
  { id: 'awareness', label: 'Brand Awareness & Global Prestige', labelUrdu: 'برانڈ کی پہچان اور عالمی ساکھ', roas: '2.5x - 3.8x', reachMultiplier: 380 },
  { id: 'ecommerce', label: 'E-Commerce Direct Sales & High ROAS', labelUrdu: 'آن لائن سیلز اور فوری منافع', roas: '3.6x - 5.8x', reachMultiplier: 240 },
  { id: 'app-growth', label: 'App Downloads & Rapid User Acquisition', labelUrdu: 'ایپ ڈاؤن لوڈز اور تیز رفتار کسٹمرز', roas: '3.0x - 4.6x', reachMultiplier: 310 },
  { id: 'b2b-leads', label: 'B2B Enterprise Pipeline & ABM', labelUrdu: 'انٹرپرائز کلائنٹس اور بڑی ڈیلز', roas: '4.2x - 7.0x', reachMultiplier: 120 },
  { id: 'dooh-takeover', label: 'Iconic 3D Billboards & High-Impact DOOH', labelUrdu: 'بڑے ڈیجیٹل بل بورڈز اور 3D شوکیس', roas: '2.8x - 4.2x', reachMultiplier: 450 },
];

export const CampaignCalculator: React.FC<CampaignCalculatorProps> = ({ lang, onApplyPlanToProposal }) => {
  const [budget, setBudget] = useState<number>(75000);
  const [selectedRegion, setSelectedRegion] = useState<string>(REGIONS[0].name);
  const [selectedGoal, setSelectedGoal] = useState<string>(GOALS[1].id);

  // Dynamic calculations based on input
  const calculation = useMemo(() => {
    const goalObj = GOALS.find((g) => g.id === selectedGoal) || GOALS[0];
    const baseMult = goalObj.reachMultiplier;

    // Budget math
    const impressions = Math.round((budget * baseMult) / 10) * 10;
    const reach = Math.round(impressions * 0.38);
    const clicks = Math.round(impressions * 0.024);

    let channels: { name: string; percent: number; color: string }[] = [];

    if (selectedGoal === 'ecommerce') {
      channels = [
        { name: 'Meta (Instagram & Facebook CAPI)', percent: 35, color: '#3b82f6' },
        { name: 'Google Performance Max & Shopping', percent: 30, color: '#10b981' },
        { name: 'TikTok Shop & Creator Whitelisting', percent: 20, color: '#ec4899' },
        { name: 'Programmatic Retargeting', percent: 15, color: '#f59e0b' },
      ];
    } else if (selectedGoal === 'dooh-takeover') {
      channels = [
        { name: 'Iconic 3D LED Screens (Times Sq / Shibuya)', percent: 50, color: '#f59e0b' },
        { name: 'Mobile Geo-Fenced Retargeting', percent: 20, color: '#3b82f6' },
        { name: 'Social Amplification Reels', percent: 20, color: '#ec4899' },
        { name: 'Global Wire PR Distribution', percent: 10, color: '#8b5cf6' },
      ];
    } else if (selectedGoal === 'app-growth') {
      channels = [
        { name: 'Google App Campaigns (UAC & YouTube)', percent: 40, color: '#10b981' },
        { name: 'TikTok & Meta App Acquisition', percent: 35, color: '#ec4899' },
        { name: 'Apple Search Ads (ASA)', percent: 15, color: '#3b82f6' },
        { name: 'Influencer App Onboarding', percent: 10, color: '#f59e0b' },
      ];
    } else if (selectedGoal === 'b2b-leads') {
      channels = [
        { name: 'LinkedIn Sponsored Content & Message Ads', percent: 45, color: '#3b82f6' },
        { name: 'Airport Executive Lounge Programmatic DOOH', percent: 25, color: '#f59e0b' },
        { name: 'Google Search High-Intent Intent Keywords', percent: 20, color: '#10b981' },
        { name: 'Industry Publications Private Marketplaces', percent: 10, color: '#8b5cf6' },
      ];
    } else {
      channels = [
        { name: 'Connected TV (CTV) & YouTube Mastheads', percent: 35, color: '#ef4444' },
        { name: 'Global Programmatic Display & Video 360', percent: 25, color: '#3b82f6' },
        { name: 'High-Impact Digital Out-of-Home', percent: 20, color: '#f59e0b' },
        { name: 'Global Influencer Ambassador Network', percent: 20, color: '#10b981' },
      ];
    }

    return {
      impressionsFormatted: (impressions >= 1000000) ? `${(impressions / 1000000).toFixed(1)}M+` : `${(impressions / 1000).toFixed(0)}K+`,
      reachFormatted: (reach >= 1000000) ? `${(reach / 1000000).toFixed(1)}M+` : `${(reach / 1000).toFixed(0)}K+`,
      clicksFormatted: (clicks >= 1000) ? `${(clicks / 1000).toFixed(1)}K+` : `${clicks}`,
      roas: goalObj.roas,
      channels,
    };
  }, [budget, selectedGoal]);

  const handleApply = () => {
    const goalTitle = GOALS.find((g) => g.id === selectedGoal)?.label || selectedGoal;
    const planText = `Estimated Budget: $${budget.toLocaleString()} USD | Region: ${selectedRegion} | Objective: ${goalTitle} | Projected Reach: ${calculation.reachFormatted} | Estimated ROAS: ${calculation.roas}`;
    onApplyPlanToProposal(planText);
  };

  return (
    <section id="calculator" className="py-24 bg-[#080a11] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Interactive Media Planner' : 'اشتہاری بجٹ اور ریچ کیلکولیٹر'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight mb-4">
            {lang === 'en' ? (
              <>
                SIMULATE YOUR <span className="gold-gradient">CAMPAIGN REACH</span> & ROI
              </>
            ) : (
              <span className="font-urdu text-3xl sm:text-4xl leading-relaxed">
                اپنے بجٹ کے مطابق متوقع نتائج اور میڈیا پلان دیکھیں
              </span>
            )}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Select your target global territories, campaign objective, and projected media spend to see our quantitative delivery projections.'
              : 'اپنا مطلوبہ علاقہ، مہم کا مقصد اور بجٹ منتخب کریں اور دیکھیں کہ آپ کا برانڈ کتنے افراد تک پہنچے گا۔'}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-8 shadow-2xl">
            {/* Step 1: Target Geography */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center justify-between">
                <span>1. Select Target Advertising Markets</span>
                <span className="text-amber-400 text-[11px] lowercase font-mono">140+ countries covered</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {REGIONS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRegion(r.name)}
                    className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                      selectedRegion === r.name
                        ? 'bg-amber-400/15 text-amber-300 border-amber-400'
                        : 'bg-white/5 text-slate-300 border-white/5 hover:bg-white/10'
                    }`}
                  >
                    {lang === 'en' ? r.name : r.nameUrdu}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Campaign Objective */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                2. Primary Campaign Objective
              </label>
              <div className="space-y-2">
                {GOALS.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGoal(g.id)}
                    className={`w-full p-3.5 rounded-xl text-xs font-medium text-left flex items-center justify-between transition-all border cursor-pointer ${
                      selectedGoal === g.id
                        ? 'bg-amber-400 text-black font-bold border-amber-400 shadow-md'
                        : 'bg-white/5 text-slate-300 border-white/5 hover:bg-white/10'
                    }`}
                  >
                    <span>{lang === 'en' ? g.label : g.labelUrdu}</span>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                      selectedGoal === g.id ? 'bg-black text-amber-400' : 'bg-white/10 text-amber-300'
                    }`}>
                      Avg ROAS: {g.roas}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Monthly Media Spend Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. Projected Monthly Media Budget
                </label>
                <div className="text-2xl font-black text-amber-400 font-display">
                  ${budget.toLocaleString()} <span className="text-xs text-slate-400 font-normal">USD</span>
                </div>
              </div>

              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />

              {/* Budget Quick Presets */}
              <div className="flex items-center justify-between mt-3 gap-2">
                {[25000, 50000, 100000, 250000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setBudget(preset)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                      budget === preset
                        ? 'bg-amber-400 text-black'
                        : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    ${preset >= 1000 ? `${preset / 1000}k` : preset}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Projection Card (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-400/30 space-y-6 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#121624] to-[#0c0f19]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block font-bold">
                  WWN QUANTITATIVE ESTIMATE
                </span>
                <h3 className="text-lg font-bold text-white font-display">
                  Projected Media Delivery
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                Confidence: 94.8%
              </span>
            </div>

            {/* Big Stat Outputs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-[11px] text-slate-400 block mb-1">Estimated Impressions</span>
                <span className="text-3xl font-black text-white font-display">{calculation.impressionsFormatted}</span>
                <span className="text-[10px] text-emerald-400 block mt-1">Tier-1 Guaranteed Placements</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-[11px] text-slate-400 block mb-1">Unique Global Reach</span>
                <span className="text-3xl font-black text-amber-400 font-display">{calculation.reachFormatted}</span>
                <span className="text-[10px] text-slate-400 block mt-1">Verified Targeted Individuals</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[11px] text-slate-400 block">High-Intent Engagements</span>
                <span className="text-xl font-bold text-white font-display mt-0.5">{calculation.clicksFormatted}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[11px] text-slate-400 block">Historical ROAS Range</span>
                <span className="text-xl font-bold text-emerald-400 font-display mt-0.5">{calculation.roas}</span>
              </div>
            </div>

            {/* Strategic Channel Allocation */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
                Recommended Omnichannel Media Split
              </span>

              <div className="space-y-2.5">
                {calculation.channels.map((chan, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium truncate pr-2">{chan.name}</span>
                      <span className="font-mono text-amber-300 font-bold">{chan.percent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${chan.percent}%`, backgroundColor: chan.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lock in CTA */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-5 rounded-xl font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <span>Lock Plan & Request Custom Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                No commitment required. Includes complimentary competitor share-of-voice audit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
