import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { LiveHealthcareModal } from './LiveHealthcareModal';
import { LiveQuranModal } from './LiveQuranModal';
import { LiveStoreModal } from './LiveStoreModal';

export const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  // Modal demo states
  const [showHealthcareDemo, setShowHealthcareDemo] = useState(false);
  const [showQuranDemo, setShowQuranDemo] = useState(false);
  const [showStoreDemo, setShowStoreDemo] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Telemetry' },
    { id: 'healthcare', label: 'HealthTech' },
    { id: 'edtech', label: 'EdTech' },
    { id: 'ecommerce', label: 'E-Commerce' }
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleLaunchDemo = (project: Project) => {
    if (project.demoType === 'dashboard_route') {
      navigate('/dashboard');
    } else if (project.demoType === 'healthcare_modal') {
      setShowHealthcareDemo(true);
    } else if (project.demoType === 'quran_modal') {
      setShowQuranDemo(true);
    } else if (project.demoType === 'ecommerce_modal') {
      setShowStoreDemo(true);
    }
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
            Selected Portfolio Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production-Grade Applications
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Real, interactive frontend engineering showcasing component architecture, state management, responsive design, and high-performance React patterns.
          </p>
        </div>

        {/* Functional Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelectProject={(proj) => setSelectedCaseStudy(proj)}
            onLaunchDemo={handleLaunchDemo}
          />
        ))}
      </div>

      {/* Modals */}
      <ProjectDetailModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onLaunchDemo={handleLaunchDemo}
      />

      <LiveHealthcareModal
        isOpen={showHealthcareDemo}
        onClose={() => setShowHealthcareDemo(false)}
      />

      <LiveQuranModal
        isOpen={showQuranDemo}
        onClose={() => setShowQuranDemo(false)}
      />

      <LiveStoreModal
        isOpen={showStoreDemo}
        onClose={() => setShowStoreDemo(false)}
      />
    </section>
  );
};
