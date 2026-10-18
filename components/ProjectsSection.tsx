"use client";

import { useState } from "react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterTabs = ["All", "Full Stack", "Mobile", "Backend"];

  const projects = PORTFOLIO_DATA.projects;

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/80 bg-[#080c14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects &amp; Solutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world applications built with clean code architecture, responsive design, and production-grade technologies.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === tab
                  ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-500/25"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-7 border border-slate-800 hover:border-amber-500/30 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Tag & Category */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono font-medium">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Project Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Code-preview box placeholder */}
                <div className="bg-[#06080e] rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-slate-400 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/60 text-[10px] text-slate-500">
                    <span>architecture_preview.ts</span>
                    <span className="text-amber-400/70">Next.js 16 + React</span>
                  </div>
                  <p className="line-clamp-3 text-slate-300 leading-relaxed font-sans text-xs">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl || PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>Source Code</span>
                </a>

                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 shadow-sm shadow-amber-500/20 transition-all duration-200"
                >
                  <span>Live Preview</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note / Ease of editing banner for Swapnil */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              Ready for your custom project details!
            </h4>
            <p className="text-xs text-slate-400 max-w-xl">
              Jab bhi aap apne real projects ke links ya details dena chahte ho, bas <code className="text-amber-400 font-mono">data/portfolio-data.ts</code> file mein update kar dena — layout aur brand theme automatically apply ho jayenge!
            </p>
          </div>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-amber-500/30 hover:border-amber-400 hover:text-amber-400 transition-colors whitespace-nowrap self-start sm:self-center"
          >
            Connect on LinkedIn ↗
          </a>
        </div>

      </div>
    </section>
  );
}
