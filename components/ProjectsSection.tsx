"use client";

import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="py-12 sm:py-20 md:py-24 relative border-t border-slate-800/80 bg-[#080c14]/70 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects &amp; Live Platforms
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            Production systems engineered with modern architecture, React 19 / Expo cross-platform mobile solutions, and enterprise tools suites.
          </p>
        </div>

        {/* 3 Quick Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 hover:border-amber-500/35 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Live
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                <span className="text-slate-500 text-[11px] font-mono">
                  0{idx + 1} of 0{projects.length}
                </span>
                <Link
                  href={`/projects#${project.id}`}
                  className="text-amber-400 hover:text-amber-300 font-mono text-[11px] flex items-center gap-1 group-hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact CTA Banner to Dedicated Projects Page */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-amber-500/25 bg-gradient-to-r from-amber-500/10 via-slate-900/40 to-amber-500/5 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">
              🚀 Comprehensive Project Showcase
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Want to see detailed case studies, tools &amp; architecture?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore in-depth deliverables, interactive calculators, live website demos, and tech breakdowns on the dedicated Projects page.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/45 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore All Projects Page</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a
              href="https://hybrowlabs.com/tools"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/90 border border-amber-500/30 hover:border-amber-400 hover:text-amber-400 transition-all"
            >
              <span>Live Tools Suite 🛠️</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
