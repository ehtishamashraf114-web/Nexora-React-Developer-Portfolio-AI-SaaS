import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Code2, Layers, Cpu } from 'lucide-react';
import { Project } from '../../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onLaunchDemo: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onLaunchDemo
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#090E17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-slate-200">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60 shrink-0">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400">
              {project.categoryLabel}
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Subtitle & Key Metric Highlights */}
          <div>
            <p className="text-sm text-slate-300 font-medium mb-3">{project.subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 font-mono">Performance Metric</div>
                  <div className="text-xs font-semibold text-white mt-0.5">{m}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              Engineered With
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Breakdown */}
          <div className="space-y-4 pt-2 border-t border-slate-800/80">
            <div>
              <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
                The Problem
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                The Solution
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                Frontend Architecture Highlights
              </h4>
              <ul className="space-y-1.5">
                {project.caseStudy.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                Measurable Engineering Outcomes
              </h4>
              <ul className="space-y-1.5">
                {project.caseStudy.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/70 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 flex items-center justify-center gap-2 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onLaunchDemo(project);
              }}
              className="w-full sm:w-auto px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 transition-all"
            >
              <span>Launch Live Interactive Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
