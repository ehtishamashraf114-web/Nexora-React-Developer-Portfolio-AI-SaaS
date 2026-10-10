import React from 'react';
import { DEVELOPER_PROFILE } from '../../data/portfolioData';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-extrabold text-xs">
            N
          </div>
          <div>
            <span className="text-white font-bold text-sm">Nexora</span>
            <span className="text-slate-500 text-xs ml-2">Crafted with React 19 & Tailwind CSS</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono">
          <a
            href={DEVELOPER_PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={DEVELOPER_PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${DEVELOPER_PROFILE.email}`}
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            {DEVELOPER_PROFILE.email}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500 font-mono">© {new Date().getFullYear()} Nexora</span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
