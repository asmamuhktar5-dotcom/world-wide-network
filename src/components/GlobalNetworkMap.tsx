import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Clock, Users, Phone, Mail, Building2, Sparkles, CheckCircle2 } from 'lucide-react';
import { GLOBAL_HUBS } from '../data/agencyData';
import { GlobalHub, Language } from '../types';

interface GlobalNetworkMapProps {
  lang: Language;
  onOpenProposal: (hubCity?: string) => void;
}

export const GlobalNetworkMap: React.FC<GlobalNetworkMapProps> = ({ lang, onOpenProposal }) => {
  const [selectedHub, setSelectedHub] = useState<GlobalHub>(GLOBAL_HUBS[0]);
  const [localTimes, setLocalTimes] = useState<Record<string, string>>({});

  // Compute live local times for each global hub
  useEffect(() => {
    const updateTimes = () => {
      const times: Record<string, string> = {};
      GLOBAL_HUBS.forEach((hub) => {
        try {
          const now = new Date();
          const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: hub.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          });
          times[hub.id] = formatter.format(now);
        } catch {
          times[hub.id] = 'Active';
        }
      });
      setLocalTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="network" className="py-24 bg-[#090c13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/20">
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Global Footprint & Real-Time Hubs' : 'عالمی نیٹ ورک اور دفاتر'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight mb-4">
            {lang === 'en' ? (
              <>
                LOCAL ROOTS. <span className="gold-gradient">PLANETARY</span> REACH.
              </>
            ) : (
              <span className="font-urdu text-3xl sm:text-4xl leading-relaxed">
                دنیا کے بڑے دارالحکومتوں میں ہمارے دفاتر اور اشتہاری ٹیمیں
              </span>
            )}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Our decentralized creative agencies and media buying desks operate 24/7 across every major timezone, guaranteeing real-time optimization.'
              : 'ہماری ٹیمیں نیویارک، لندن، دبئی، کراچی، سنگاپور اور ٹوکیو سے 24 گھنٹے لائیو مانیٹرنگ اور مہمات چلاتی ہیں۔'}
          </p>
        </div>

        {/* Interactive World Map View */}
        <div className="relative glass-panel rounded-3xl p-4 sm:p-8 border border-white/10 overflow-hidden mb-12 shadow-2xl">
          {/* SVG Map Canvas Visualization */}
          <div className="relative w-full aspect-[21/10] bg-[#07090f] rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
            {/* World Map SVG Silhouette */}
            <svg
              className="w-full h-full opacity-35"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simplified world map outline dots / paths */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.12)" />
                </pattern>
              </defs>
              <rect width="1000" height="500" fill="url(#grid)" />

              {/* Continents rough paths for aesthetic framing */}
              {/* North America */}
              <path
                d="M150,90 Q220,70 280,110 T320,180 T260,240 T180,210 T130,140 Z"
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              {/* South America */}
              <path
                d="M260,260 Q320,290 340,360 T290,440 T240,360 T230,290 Z"
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              {/* Europe & UK */}
              <path
                d="M450,80 Q520,70 540,130 T490,180 T430,140 Z"
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              {/* Africa */}
              <path
                d="M460,190 Q540,190 560,270 T520,380 T460,340 T430,240 Z"
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              {/* Middle East & South Asia */}
              <path
                d="M570,160 Q660,140 700,200 T680,270 T610,240 T560,190 Z"
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              {/* East Asia & APAC */}
              <path
                d="M720,110 Q830,100 880,180 T840,260 T760,230 T700,160 Z"
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              {/* Australia */}
              <path
                d="M780,340 Q880,330 890,400 T830,450 T760,400 Z"
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />

              {/* Inter-hub glowing programmatic transmission lines */}
              <line x1="280" y1="175" x2="480" y2="140" stroke="rgba(245,158,11,0.25)" strokeDasharray="4 4" />
              <line x1="480" y1="140" x2="620" y2="220" stroke="rgba(245,158,11,0.25)" strokeDasharray="4 4" />
              <line x1="620" y1="220" x2="660" y2="230" stroke="rgba(245,158,11,0.25)" strokeDasharray="4 4" />
              <line x1="660" y1="230" x2="780" y2="290" stroke="rgba(245,158,11,0.25)" strokeDasharray="4 4" />
              <line x1="780" y1="290" x2="860" y2="200" stroke="rgba(245,158,11,0.25)" strokeDasharray="4 4" />
            </svg>

            {/* Clickable Pins for Each Hub */}
            {GLOBAL_HUBS.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  style={{
                    left: `${hub.coordinates.x}%`,
                    top: `${hub.coordinates.y}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none z-20"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ripple ring */}
                    <span
                      className={`absolute inline-flex h-8 w-8 rounded-full ${
                        isSelected ? 'bg-amber-400 opacity-60 animate-ping' : 'bg-white opacity-20'
                      }`}
                    />

                    {/* Node Core */}
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg transition-transform ${
                        isSelected
                          ? 'bg-amber-400 text-black scale-125 ring-4 ring-amber-400/30'
                          : 'bg-[#151b2d] text-white border border-white/30 hover:scale-110 hover:border-amber-400'
                      }`}
                    >
                      ●
                    </div>

                    {/* City Floating Tag */}
                    <div
                      className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded text-[10px] font-bold shadow-lg transition-all ${
                        isSelected
                          ? 'bg-amber-400 text-black'
                          : 'bg-black/80 text-slate-300 backdrop-blur-sm border border-white/10 group-hover/pin:text-white'
                      }`}
                    >
                      {lang === 'en' ? hub.city : hub.cityUrdu}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Live Telemetry Overlay */}
            <div className="absolute top-3 left-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>WWN GLOBAL SYNCHRONIZATION: ACTIVE</span>
            </div>
          </div>

          {/* Quick Hub Selector Pill Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 pb-2 no-scrollbar">
            {GLOBAL_HUBS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => setSelectedHub(hub)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  selectedHub.id === hub.id
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? hub.city : hub.cityUrdu}</span>
                <span className="text-[10px] opacity-75 font-mono">
                  ({localTimes[hub.id] ? localTimes[hub.id].slice(0, 5) : ''})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Hub Inspector Card */}
        <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left: Office Identity & Live Clock */}
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>{selectedHub.region}</span>
              </div>

              <h3 className="text-3xl font-extrabold text-white font-display mb-1">
                {lang === 'en' ? `${selectedHub.city}, ${selectedHub.country}` : `${selectedHub.cityUrdu} - ${selectedHub.country}`}
              </h3>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs font-mono mb-4">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Local Office Time: </span>
                <span className="font-bold text-amber-300">
                  {localTimes[selectedHub.id] || 'Syncing...'}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {selectedHub.address}
              </p>

              <div className="text-xs text-slate-300">
                <span className="text-slate-500 block">Leadership:</span>
                <span className="font-semibold text-white">{selectedHub.teamLead}</span>
              </div>
            </div>

            {/* Middle: Capabilities */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Regional Specializations & Media Desks
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {selectedHub.capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{cap}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                <div>
                  <span className="text-white font-bold text-sm block">{selectedHub.activeAccounts}+</span>
                  <span>Active Global Accounts</span>
                </div>
                <div className="h-6 w-px bg-white/10" />
                <div>
                  <span className="text-emerald-400 font-bold text-sm block">100%</span>
                  <span>Desk Availability</span>
                </div>
              </div>
            </div>

            {/* Right: Direct Desk Contact CTA */}
            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-black/40 border border-white/5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Direct Agency Connection
              </span>

              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>{selectedHub.phone}</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{selectedHub.email}</span>
              </div>

              <button
                onClick={() => onOpenProposal(`${selectedHub.city} Regional Office`)}
                className="mt-2 w-full py-3 px-4 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 text-xs shadow-lg transition-all text-center cursor-pointer"
              >
                Connect With {selectedHub.city} Strategy Desk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
