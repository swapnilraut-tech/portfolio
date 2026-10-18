"use client";

import { useState } from "react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const projects = PORTFOLIO_DATA.projects;
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-12 sm:py-20 md:py-24 relative border-t border-slate-800/80 bg-[#080c14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects &amp; Live Platforms
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            Real-world enterprise production systems built with clean architecture, headless integrations, and high performance.
          </p>
        </div>

        {/* Filter Navigation (renders if more than 1 category) */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                type="button"
                suppressHydrationWarning
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
        )}

        {/* Projects Grid */}
        <div className="space-y-8 sm:space-y-10">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-amber-500/25 shadow-2xl relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300"
            >
              {/* Subtle ambient corner gradient glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-500/15 transition-all duration-500" />
              
              <div className="relative z-10 space-y-8">
                
                {/* Header row: Badge, Category, Live status */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-xs font-mono font-semibold">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live in Production
                    </span>
                  </div>

                  {project.metrics && (
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Main Title & Tagline & Live CTA */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-amber-300/90 mt-1.5">
                      {project.tagline}
                    </p>
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200 self-start lg:self-center"
                    >
                      <span>Visit Live Website</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Key Architectural Deliverables */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {project.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-5 rounded-2xl bg-[#070b13] border border-slate-800/90 hover:border-amber-500/30 transition-colors space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center text-xs font-bold">
                            ✓
                          </span>
                          <h4 className="text-sm font-bold text-slate-100">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-7">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Tags */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                    Technologies &amp; Architecture:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 text-slate-200 text-xs font-mono transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
