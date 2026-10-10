import React from 'react';
import { X, Download, Printer, Mail, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_PROFILE, PROJECTS, SKILLS } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#090E17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-200">
        {/* Modal Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/70 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-white">Curriculum Vitae / Resume</h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
              React Specialist
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Printable Sheet */}
        <div className="p-8 overflow-y-auto bg-slate-950 text-slate-300 font-sans space-y-6 print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
              {DEVELOPER_PROFILE.name}
            </h1>
            <p className="text-base font-medium text-indigo-400 mt-1 print:text-slate-800">
              {DEVELOPER_PROFILE.role}
            </p>
            <p className="text-xs text-slate-400 mt-2 max-w-2xl leading-relaxed print:text-slate-700">
              {DEVELOPER_PROFILE.subline} Experienced in architecting production web applications with modular components, fluid animations, strict accessibility (WCAG AA), and high-performance Recharts telemetry.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-mono text-slate-400 print:text-slate-700">
              <span>{DEVELOPER_PROFILE.email}</span>
              <span>·</span>
              <span>Remote / Worldwide</span>
              <span>·</span>
              <span>github.com/nexora</span>
              <span>·</span>
              <span className="text-emerald-400 print:text-emerald-700 font-semibold">Immediate Availability</span>
            </div>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-indigo-400 mb-3 print:text-indigo-800">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="text-white font-semibold block print:text-black">Frontend Core</span>
                <span className="text-slate-400 text-[11px] print:text-slate-600">React 18/19, ES6+ JS, HTML5 Semantic</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="text-white font-semibold block print:text-black">Styling & UI</span>
                <span className="text-slate-400 text-[11px] print:text-slate-600">Tailwind CSS, CSS Grid, Fluid Clamp</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="text-white font-semibold block print:text-black">Navigation & State</span>
                <span className="text-slate-400 text-[11px] print:text-slate-600">React Router, LocalStorage, Context API</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                <span className="text-white font-semibold block print:text-black">Visualization & Motion</span>
                <span className="text-slate-400 text-[11px] print:text-slate-600">Recharts Analytics, Motion Transitions</span>
              </div>
            </div>
          </div>

          {/* Flagship Projects */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-indigo-400 mb-3 print:text-indigo-800">
              Flagship Frontend Engineering Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold text-white print:text-black">{p.title}</h3>
                    <span className="text-[11px] font-mono text-indigo-300 print:text-indigo-700">{p.categoryLabel}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2 print:text-slate-700">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300 print:bg-white print:border-slate-300 print:text-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Standards */}
          <div className="border-t border-slate-800 pt-4 print:border-black text-xs text-slate-400 space-y-1 print:text-slate-700">
            <div className="flex justify-between font-mono">
              <span className="text-white font-medium print:text-black">Continuous Professional Frontend Mastery</span>
              <span>2022 — Present</span>
            </div>
            <p>Specialization in Component Modularity, Strict Type Safety, and High-Performance Render Cycles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
