import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: "Projects & Engineering Case Studies | Swapnil Raut",
  description:
    "Explore featured full-stack platforms, cross-platform mobile applications (React 19 / Expo SDK 57), and interactive enterprise tools engineered by Swapnil Raut.",
};

export default function ProjectsPage() {
  const projects = PORTFOLIO_DATA.projects;

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back navigation & Page Header (Centered) */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16 flex flex-col items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-amber-400/90 hover:text-amber-300 transition-colors group mb-1"
            >
              <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-amber-400/40 transition-colors">
                ←
              </span>
              <span>Back to Portfolio Home</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span>CASE STUDIES &amp; PRODUCTION PLATFORMS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              In-depth breakdown of production-grade systems, cross-platform mobile architectures (React 19 / Expo SDK 57), and interactive business suites built by Swapnil Raut.
            </p>
          </div>

          {/* Detailed Projects List */}
          <div className="space-y-16">
            {projects.map((project, idx) => (
              <article
                key={project.id}
                id={project.id}
                className="glass-panel rounded-3xl p-6 sm:p-10 md:p-12 border border-amber-500/25 shadow-2xl relative overflow-hidden group"
              >
                {/* Ambient glow in card */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 space-y-8">
                  
                  {/* Card Header metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-6">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-semibold">
                        PROJECT 0{idx + 1}
                      </span>
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

                  {/* Title & Tagline & Live Action Buttons */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="max-w-3xl space-y-2">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                        {project.title}
                      </h2>
                      <p className="text-sm sm:text-base font-medium text-amber-300/90 leading-snug">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 self-start lg:self-center flex-shrink-0">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <span>Visit Live Website</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}

                      {project.secondaryUrl && (
                        <a
                          href={project.secondaryUrl.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <span>{project.secondaryUrl.label}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Overview description */}
                  <div className="p-6 rounded-2xl bg-[#070b13] border border-slate-800/90 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                      Architectural Overview:
                    </span>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features & Architecture Deliverables */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                        <span>⚡ Key Features &amp; Engineering Deliverables:</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.highlights.map((item, hIdx) => (
                          <div
                            key={hIdx}
                            className="p-5 rounded-2xl bg-[#090e18] border border-slate-800 hover:border-amber-500/35 transition-all flex flex-col justify-between space-y-2 shadow-sm group/feat"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2.5">
                                  <span className="w-5 h-5 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                                    ✓
                                  </span>
                                  <h4 className="text-sm font-bold text-slate-100 group-hover/feat:text-amber-300 transition-colors">
                                    {item.title}
                                  </h4>
                                </div>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-7.5">
                                {item.desc}
                              </p>
                            </div>

                            {item.link && (
                              <div className="pt-2 pl-7.5 border-t border-slate-900 flex justify-end">
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 hover:underline"
                                >
                                  Try Calculator Tool ↗
                                </a>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="pt-6 border-t border-slate-800/80 space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                      Technologies &amp; Architecture:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 text-slate-300 text-xs font-mono transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>

          {/* Bottom Back CTA */}
          <div className="mt-16 pt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Have a project in mind?</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Let&apos;s build high-performance web applications or cross-platform mobile solutions together.
              </p>
            </div>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/25 transition-all"
            >
              Get In Touch 🚀
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
