import React, { useState } from 'react';
import { ArrowRight, FileDown, Github, Linkedin, Sparkles, TrendingUp, Cpu, Activity, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../../data/portfolioData';
import { ResumeModal } from './ResumeModal';

export const HeroSection: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'realtime' | 'architecture'>('realtime');

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Typographic Hierarchy */}
        <div className="lg:col-span-7 space-y-6">
          {/* Availability Status Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-emerald-300 font-medium">Available</span>
            <span className="text-slate-500">·</span>
            <span>Full-Time & High-Impact Contracts</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            I Build Digital Experiences That{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
              Move Businesses Forward.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            {DEVELOPER_PROFILE.subline}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2 group"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setShowResumeModal(true)}
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 text-indigo-400" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Proof & Quick Links */}
          <div className="flex items-center gap-6 pt-4 text-xs text-slate-400 font-mono">
            <a
              href={DEVELOPER_PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={DEVELOPER_PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">·</span>
            <span className="text-slate-500">React 19 SPA Architecture</span>
          </div>
        </div>

        {/* Right 3D-Inspired Dashboard Mockup Visual */}
        <div className="lg:col-span-5 relative">
          {/* Outer glow ring */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-75" />

          {/* Main Glass Panel */}
          <div className="relative rounded-2xl bg-slate-900/80 border border-slate-700/60 p-5 backdrop-blur-xl shadow-2xl">
            {/* Mock Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">nexora-telemetry.app</span>
              </div>
              <div className="flex gap-1 p-0.5 rounded-lg bg-slate-950/80 border border-white/5 text-[10px] font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('realtime')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    activeTab === 'realtime' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Live
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    activeTab === 'architecture' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Stack
                </button>
              </div>
            </div>

            {activeTab === 'realtime' ? (
              <div className="space-y-4">
                {/* Metric Strip */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Monthly Volume</span>
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-xl font-bold text-white font-mono mt-1 tabular-nums">$74,820</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-0.5">+21.8% vs last month</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Inference Speed</span>
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-xl font-bold text-white font-mono mt-1 tabular-nums">42ms</div>
                    <div className="text-[10px] text-cyan-400 font-mono mt-0.5">Global Edge Cluster</div>
                  </div>
                </div>

                {/* Simulated Waveform SVG */}
                <div className="p-3 rounded-xl bg-slate-950/40 border border-white/5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span>Synchronized Recharts Vector</span>
                    <span className="text-indigo-400 font-mono text-[10px]">60 FPS Fluid</span>
                  </div>
                  <svg className="w-full h-24 overflow-visible" viewBox="0 0 320 90" fill="none">
                    <defs>
                      <linearGradient id="heroAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 Q40,65 80,70 T160,40 T240,25 T320,15 L320,90 L0,90 Z"
                      fill="url(#heroAreaGrad)"
                    />
                    <path
                      d="M0,80 Q40,65 80,70 T160,40 T240,25 T320,15"
                      stroke="#818cf8"
                      strokeWidth="2.5"
                    />
                    <circle cx="160" cy="40" r="4" fill="#38bdf8" />
                    <circle cx="240" cy="25" r="4" fill="#818cf8" />
                    <circle cx="320" cy="15" r="4" fill="#6366f1" />
                  </svg>
                </div>

                {/* Floating Micro Card */}
                <div className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-500/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-slate-300 font-medium">Interactive SaaS Dashboard Live Route</span>
                  </div>
                  <span className="text-indigo-300 font-mono text-[11px]">/dashboard</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 py-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Zero-Broken-Image Guarantee
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    All UI mockups, icons, and diagrams are natively generated via vector SVG & Tailwind. 100% reliable on Vercel & Netlify!
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    Atomic Component Architecture
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Decoupled state management, modular custom hooks, and zero superfluous render cascades.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full-width 4-Column KPI Strip below the hero split (Constitutional Rule 13) */}
      <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {DEVELOPER_PROFILE.keyStats.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
              {stat.value}
            </div>
            <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
      />
    </section>
  );
};
