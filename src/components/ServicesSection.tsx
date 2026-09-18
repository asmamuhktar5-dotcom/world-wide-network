import React, { useState } from 'react';
import { 
  Tv, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Users, 
  Cpu, 
  ArrowRight, 
  CheckCircle, 
  Layers3, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { AGENCY_SERVICES } from '../data/agencyData';
import { Service, Language } from '../types';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (serviceName: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Tv: <Tv className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectService }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-[#0a0d14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/20">
              {lang === 'en' ? 'Core Agency Capabilities' : 'ہماری بنیادی اشتہاری خدمات'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
              {lang === 'en' ? (
                <>
                  ENGINEERING <span className="gold-gradient">EVERY STAGE</span> OF
                  <br className="hidden sm:block" /> THE ADVERTISING JOURNEY
                </>
              ) : (
                <span className="font-urdu leading-relaxed text-3xl sm:text-4xl">
                  اشتہارات اور میڈیا پلاننگ کی جدید ترین سہولیات
                </span>
              )}
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
            {lang === 'en'
              ? 'We integrate tier-1 creative production with relentless mathematical ad delivery across every global coordinate.'
              : 'ہم جدید ترین ٹیکنالوجی اور منفرد تخلیقی صلاحیتوں کے ذریعے آپ کے اشتہاری بجٹ کو زیادہ سے زیادہ منافع میں بدلتے ہیں۔'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENCY_SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle accent hover backdrop glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl group-hover:bg-amber-400/10 transition-colors pointer-events-none" />

              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all duration-300">
                  {ICON_MAP[service.iconName] || <Layers3 className="w-6 h-6" />}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-amber-300 transition-colors">
                  {lang === 'en' ? service.title : service.titleUrdu}
                </h3>

                <p className="text-xs font-semibold text-amber-400/90 mb-3 tracking-wide">
                  {lang === 'en' ? service.tagline : service.taglineUrdu}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {lang === 'en' ? service.shortDesc : service.shortDescUrdu}
                </p>

                {/* Key Deliverables Bullet Preview */}
                <div className="space-y-2 mb-6">
                  {(lang === 'en' ? service.deliverables : service.deliverablesUrdu).slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Metric Badge */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 mb-4 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span className="truncate">{service.metricTag}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'View Scope & Channels' : 'مکمل تفصیلات دیکھیں'}</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="p-2 rounded-lg bg-amber-400/10 hover:bg-amber-400 hover:text-black text-amber-400 transition-colors text-xs font-bold flex items-center gap-1 cursor-pointer"
                    title="Inquire about this capability"
                  >
                    <span>{lang === 'en' ? 'Inquire' : 'پوچھیں'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0f1422] rounded-2xl border border-amber-400/30 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#151b2d]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-black flex items-center justify-center font-bold">
                  {ICON_MAP[selectedService.iconName]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {lang === 'en' ? selectedService.title : selectedService.titleUrdu}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">
                    {lang === 'en' ? selectedService.tagline : selectedService.taglineUrdu}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Agency Methodology & Execution
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* All Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Scope of Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(lang === 'en' ? selectedService.deliverables : selectedService.deliverablesUrdu).map((del, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200 p-2 rounded bg-white/5 border border-white/5">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Channels */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Platforms & Media Exchanges
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.channels.map((chan, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/5 text-amber-300 text-xs font-medium border border-white/10"
                    >
                      {chan}
                    </span>
                  ))}
                </div>
              </div>

              {/* Performance proof point */}
              <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-200 flex items-center justify-between">
                <div>
                  <span className="font-bold block text-white text-sm mb-0.5">Proven Benchmark:</span>
                  <span>{selectedService.metricTag}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 block text-[11px]">Representative Clients:</span>
                  <span className="font-semibold text-white">{selectedService.featuredClient}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 bg-[#131828] border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Ready to deploy this capability for your brand?
              </span>
              <button
                onClick={() => {
                  const name = selectedService.title;
                  setSelectedService(null);
                  onSelectService(name);
                }}
                className="px-6 py-2.5 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 text-sm shadow-lg shadow-amber-400/20 flex items-center gap-2"
              >
                <span>Add to Campaign Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
