import React from 'react';
import { CAREER_JOURNEY } from '../../data/portfolioData';
import { CheckCircle2, Milestone, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Engineering Philosophy */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
              Engineering Mindset
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              How I Approach Web Engineering
            </h2>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Prioritizing genuine user experience, zero-latency interactions, clean component separation, and resilient deployments over unnecessary complexity.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fast & Responsive</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Every interaction responds within 100-200ms. Code is split cleanly so initial page paints are instant and light.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Zero Broken Images & Resilient Deploys</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Tailored vector UI illustrations and robust fallback systems ensure the application deploys seamlessly on Netlify, Vercel, or custom servers.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Accessibility & Real Interactivity</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Keyboard navigability, WCAG AA color contrast, tabular numerals for analytics, and working handlers for every button.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:col-span-7">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
            Professional Trajectory
          </span>
          <h3 className="text-2xl font-bold text-white mb-6">
            Development Journey
          </h3>

          <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
            {CAREER_JOURNEY.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform" />

                <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 group-hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-xs font-mono text-indigo-400 font-semibold">{item.period}</span>
                    <span className="text-xs text-slate-400">{item.company}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.role}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">{item.description}</p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
