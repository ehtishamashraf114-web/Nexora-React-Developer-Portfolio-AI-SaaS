import React, { useRef, useState } from 'react';
import { ExternalLink, Github, FileText, ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { ProjectVisual } from '../common/ProjectVisual';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onLaunchDemo: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
  onLaunchDemo
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Subtle 3D tilt calculation on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -5;
    const rY = ((x - centerX) / centerX) * 5;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out'
      }}
      className="group relative flex flex-col rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/30 backdrop-blur-sm p-5 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
    >
      {/* Visual Mockup Container (Zero broken image guarantee) */}
      <div className="mb-4 overflow-hidden rounded-xl">
        <ProjectVisual category={project.category} title={project.title} />
      </div>

      {/* Unboxed Metadata with Typographic Separator (Constitutional Rule) */}
      <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono mb-2">
        <span>{project.categoryLabel}</span>
        <span aria-hidden="true" className="text-slate-600">·</span>
        <span className="text-slate-400">{project.metrics[0]}</span>
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
        {project.title}
      </h3>
      <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack Chips */}
      <div className="flex flex-wrap gap-1.5 my-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md bg-slate-950/70 border border-white/5 text-[11px] font-mono text-slate-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-0.5 rounded-md bg-slate-950/40 text-[11px] font-mono text-slate-500">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-auto pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors py-1.5"
        >
          <FileText className="w-3.5 h-3.5 text-indigo-400" />
          <span>Case Study</span>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Repository"
            className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => onLaunchDemo(project)}
            className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm shadow-indigo-600/30 transition-all"
          >
            <span>Live Demo</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
