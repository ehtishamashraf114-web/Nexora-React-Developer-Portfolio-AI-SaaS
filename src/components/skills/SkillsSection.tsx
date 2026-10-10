import React, { useState } from 'react';
import { SKILLS } from '../../data/portfolioData';
import { SkillItem } from '../../types';
import { CheckCircle2, Sparkles, BookOpen, Layers, Terminal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'production' | 'learning'>('all');

  const filteredSkills = SKILLS.filter((s) => {
    if (activeTab === 'all') return true;
    return s.status === activeTab;
  });

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Active Learning
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            A transparent breakdown distinguishing production-ready frontend technologies from concepts currently being explored and deepened.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Technologies ({SKILLS.length})
          </button>
          <button
            onClick={() => setActiveTab('production')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'production'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Production Ready ({SKILLS.filter((s) => s.status === 'production').length})
          </button>
          <button
            onClick={() => setActiveTab('learning')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'learning'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Currently Learning ({SKILLS.filter((s) => s.status === 'learning').length})
          </button>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((skill) => {
          const isLearning = skill.status === 'learning';
          return (
            <div
              key={skill.name}
              className={`p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                isLearning
                  ? 'bg-slate-900/30 border-dashed border-indigo-500/30 hover:border-indigo-500/60'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
              }`}
            >
              <div>
                {/* Header with status */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {isLearning ? (
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    )}
                    <h3 className="text-sm font-bold text-white tracking-wide">{skill.name}</h3>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isLearning
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {isLearning ? 'Active Learning' : 'Production Ready'}
                  </span>
                </div>

                {/* Subtitle / Experience label */}
                <div className="text-[11px] font-mono text-indigo-300 mb-2">
                  {skill.experienceLabel}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                  <span>Proficiency & Confidence</span>
                  <span className="text-white font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      isLearning
                        ? 'bg-gradient-to-r from-amber-500 to-indigo-500'
                        : 'bg-gradient-to-r from-indigo-500 to-sky-400'
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note for Recruiters */}
      <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2.5">
          <Terminal className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>
            Committed to continuous growth: actively building real prototypes to reinforce server actions, TypeScript generics, and backend integrations.
          </span>
        </div>
        <span className="font-mono text-indigo-300 text-[11px] shrink-0">Updated October 2026</span>
      </div>
    </section>
  );
};
