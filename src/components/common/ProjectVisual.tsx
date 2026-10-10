import React from 'react';

interface ProjectVisualProps {
  category: 'ai' | 'healthcare' | 'edtech' | 'ecommerce';
  title: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ category, title }) => {
  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-[#0B1120] via-[#0E172A] to-[#080D1A] border border-white/10 select-none group">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-radial from-indigo-500/10 via-transparent to-transparent opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />

      {/* Browser / Application Top Bar */}
      <div className="relative z-10 flex items-center justify-between px-3 py-2 bg-slate-900/80 border-b border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-950/70 border border-white/5 text-[11px] font-mono text-slate-400">
          <span className="text-indigo-400">nexora.dev</span>
          <span>/</span>
          <span className="truncate max-w-[140px]">{category}</span>
        </div>
        <div className="text-[10px] text-slate-500 font-mono">React 19</div>
      </div>

      {/* Visual Content by Category */}
      <div className="relative z-0 p-4 h-[calc(100%-36px)] flex flex-col justify-between">
        {category === 'ai' && (
          <div className="h-full flex flex-col justify-between">
            {/* Top Stat Row */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">MRR Growth</div>
                <div className="text-sm font-semibold text-white mt-0.5 font-mono tabular-nums">$74,820</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5">+21.8%</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Token Fleet</div>
                <div className="text-sm font-semibold text-white mt-0.5 font-mono tabular-nums">1.4M / hr</div>
                <div className="text-[10px] text-indigo-400 font-mono mt-0.5">Optimized</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Latency</div>
                <div className="text-sm font-semibold text-white mt-0.5 font-mono tabular-nums">42ms</div>
                <div className="text-[10px] text-cyan-400 font-mono mt-0.5">Global Edge</div>
              </div>
            </div>

            {/* Simulated Live Vector Area Chart */}
            <div className="my-2 p-2 rounded-lg bg-slate-950/40 border border-white/5 flex-1 flex flex-col justify-end">
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                <span>Inference Queries vs Revenue</span>
                <span className="text-indigo-400 font-mono">99.98% Precision</span>
              </div>
              <svg className="w-full h-20 overflow-visible" viewBox="0 0 300 80" fill="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,70 Q40,50 80,60 T160,35 T230,20 T300,10 L300,80 L0,80 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,70 Q40,50 80,60 T160,35 T230,20 T300,10"
                  stroke="#818cf8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="230" cy="20" r="4" fill="#38bdf8" className="animate-pulse" />
                <circle cx="300" cy="10" r="4" fill="#6366f1" />
              </svg>
            </div>

            {/* Bottom Status bar */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Active Cluster: US-East-1
              </span>
              <span className="text-indigo-300">Recharts Synchronized</span>
            </div>
          </div>
        )}

        {category === 'healthcare' && (
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">CarePulse Health</div>
                  <div className="text-[10px] text-slate-400">Cardiology & Specialist Clinic</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                12 Slots Available
              </span>
            </div>

            {/* Doctor Profile Card inside visual */}
            <div className="p-2.5 rounded-lg bg-slate-900/70 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md">
                DR
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white truncate">Dr. Sarah Mitchell, MD</div>
                <div className="text-[11px] text-indigo-300">Chief of Interventional Cardiology</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Rating: 4.9 · Johns Hopkins Alum</div>
              </div>
            </div>

            {/* Time Slot Picker Visual */}
            <div className="p-2 rounded-lg bg-slate-950/50 border border-white/5">
              <div className="text-[10px] text-slate-400 mb-1.5 flex justify-between">
                <span>Select Appointment Time: Today</span>
                <span className="text-cyan-400 font-mono">GMT+1</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                <span className="text-center py-1 rounded bg-indigo-600/40 border border-indigo-400 text-indigo-200 text-[10px] font-mono font-medium">09:30 AM</span>
                <span className="text-center py-1 rounded bg-slate-900/60 border border-white/5 text-slate-300 text-[10px] font-mono">11:00 AM</span>
                <span className="text-center py-1 rounded bg-slate-900/60 border border-white/5 text-slate-300 text-[10px] font-mono">02:15 PM</span>
                <span className="text-center py-1 rounded bg-slate-900/60 border border-white/5 text-slate-300 text-[10px] font-mono">04:45 PM</span>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between">
              <span>Verified Patient intake Form</span>
              <span className="text-emerald-400">HIPAA Compliant UI</span>
            </div>
          </div>
        )}

        {category === 'edtech' && (
          <div className="h-full flex flex-col justify-between">
            {/* Header with Islamic Geometric Accent */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                    <path d="M6 6h10" />
                    <path d="M6 10h10" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">The Quran Academy Hub</div>
                  <div className="text-[10px] text-slate-400">Authentic Tajweed & Hifz Portal</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                WhatsApp Linked
              </span>
            </div>

            {/* Arabic Script & Tajweed Preview Box */}
            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-center relative overflow-hidden">
              <div className="text-[10px] text-emerald-400 uppercase tracking-widest font-mono mb-1">Tajweed Rule of the Day · Ghunnah</div>
              <div className="text-lg font-serif text-amber-200 py-1" dir="rtl">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </div>
              <div className="text-[11px] text-slate-300 italic mt-0.5">
                "In the name of Allah, the Entirely Merciful, the Especially Merciful"
              </div>
            </div>

            {/* Course modules strip */}
            <div className="grid grid-cols-3 gap-1.5 text-center">
              <div className="p-1.5 rounded bg-slate-900/60 border border-white/5">
                <div className="text-[10px] font-medium text-white">Noorani Qaida</div>
                <div className="text-[9px] text-emerald-400">Beginners</div>
              </div>
              <div className="p-1.5 rounded bg-slate-900/60 border border-white/5">
                <div className="text-[10px] font-medium text-white">Tajweed Mastery</div>
                <div className="text-[9px] text-indigo-400">Intermediate</div>
              </div>
              <div className="p-1.5 rounded bg-slate-900/60 border border-white/5">
                <div className="text-[10px] font-medium text-white">Hifz Program</div>
                <div className="text-[9px] text-amber-400">Advanced</div>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between">
              <span>One-on-One Certified Qaris</span>
              <span className="text-emerald-300">Free Trial Class Available</span>
            </div>
          </div>
        )}

        {category === 'ecommerce' && (
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">AuraCraft Storefront</div>
                  <div className="text-[10px] text-slate-400">Minimalist Studio Audio</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Cart (2 items)
              </span>
            </div>

            {/* Product Card visual */}
            <div className="p-2.5 rounded-lg bg-slate-900/70 border border-white/10 flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-slate-800 border border-white/5 flex items-center justify-center text-indigo-300 relative">
                {/* Vector Headphone Illustration */}
                <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white truncate">Aura Acoustic Studio Pro</div>
                <div className="text-[11px] text-emerald-400 font-mono font-medium">$349.00 USD</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Active Noise Cancelling · 48h Battery</div>
              </div>
              <div className="px-2 py-1 rounded bg-indigo-600 text-[10px] font-medium text-white shadow-sm">
                In Cart
              </div>
            </div>

            {/* Filter buttons representation */}
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-white font-medium">All Audio</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-white/5">Workspace</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-white/5">Wearables</span>
            </div>

            <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between">
              <span>LocalStorage Cart Sync</span>
              <span className="text-cyan-300">Instant Optimistic Update</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
