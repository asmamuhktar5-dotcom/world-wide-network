import React from 'react';
import { Globe, ShieldCheck, Award, ArrowUp, Mail, Phone } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-white/10 text-slate-400 text-xs">
      {/* Top Banner with Partners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-base text-white block font-display">
                WORLD WIDE NETWORK (WWN)
              </span>
              <span className="text-[11px] text-slate-400">
                Global Advertising Agency, Programmatic Media Trading & Creative Production
              </span>
            </div>
          </div>

          {/* Accreditation Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-slate-300 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Google Premier Partner 2025</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-slate-300 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Meta Diamond Agency</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-slate-300 font-mono text-[11px]">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Cannes Lions Network Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Office Directories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3 text-amber-400">
              New York (Americas)
            </h4>
            <p className="leading-relaxed text-slate-400">
              One World Trade Center, 64th Floor, NY 10007
            </p>
            <p className="font-mono text-slate-300 mt-2">+1 (212) 890-4400</p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3 text-amber-400">
              London (EMEA)
            </h4>
            <p className="leading-relaxed text-slate-400">
              22 Bishopsgate, Level 38, London EC2N 4BQ
            </p>
            <p className="font-mono text-slate-300 mt-2">+44 (20) 7946-0812</p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3 text-amber-400">
              Dubai (MENA)
            </h4>
            <p className="leading-relaxed text-slate-400">
              DIFC Gate Precinct 4, Level 7, Dubai
            </p>
            <p className="font-mono text-slate-300 mt-2">+971 (4) 362-7700</p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3 text-amber-400">
              Karachi & Lahore
            </h4>
            <p className="leading-relaxed text-slate-400">
              Dolmen City Towers, Clifton, Karachi
            </p>
            <p className="font-mono text-slate-300 mt-2">+92 (21) 3529-8800</p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3 text-amber-400">
              Singapore (APAC)
            </h4>
            <p className="leading-relaxed text-slate-400">
              Marina Bay Financial Centre Tower 2
            </p>
            <p className="font-mono text-slate-300 mt-2">+65 6812-9900</p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3 text-amber-400">
              Tokyo (East Asia)
            </h4>
            <p className="leading-relaxed text-slate-400">
              Roppongi Hills Mori Tower, 41F, Minato-ku
            </p>
            <p className="font-mono text-slate-300 mt-2">+81 (3) 5410-8200</p>
          </div>
        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} World Wide Network (WWN) Advertising Agency Inc. All rights reserved. Registered across New York, London, Dubai & Singapore.
          </p>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#network" className="hover:text-white transition-colors">Global Hubs</a>
            <a href="#calculator" className="hover:text-white transition-colors">Planner</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              title="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
