import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { ResumeModal } from '../hero/ResumeModal';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#080C14]/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark (Top Bar Contract) */}
          <Link
            to="/"
            className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-400 flex items-center justify-center text-white font-extrabold text-xs shadow-md shadow-indigo-600/30">
              N
            </div>
            <span>Nexora<span className="text-indigo-400 font-mono">.dev</span></span>
          </Link>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('skills')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('journey')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Journey
            </button>
            <Link
              to="/dashboard"
              className="text-indigo-300 hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <span>SaaS Demo</span>
              <ArrowUpRight className="w-3 h-3 text-indigo-400" />
            </Link>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setShowResume(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 whitespace-nowrap shrink-0 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#080C14] px-4 py-4 space-y-3">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('journey')}
              className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white"
            >
              Journey
            </button>
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 text-sm text-indigo-400 font-medium"
            >
              Interactive SaaS Dashboard Route
            </Link>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white"
            >
              Contact
            </button>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowResume(true);
                }}
                className="w-full py-2.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold text-center"
              >
                View & Download Resume
              </button>
            </div>
          </div>
        )}
      </header>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </>
  );
};
