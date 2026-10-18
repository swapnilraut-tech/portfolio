"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = PORTFOLIO_DATA.skillsCategories;

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.title.toLowerCase().includes(activeCategory));

  return (
    <section id="skills" className="py-12 sm:py-20 md:py-24 relative border-t border-slate-800/80 bg-[#090d15]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Bring to the Table
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            A comprehensive, modern tech stack engineered for responsive user experiences, robust backends, and maintainable systems.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            type="button"
            suppressHydrationWarning
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-500/25"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setActiveCategory("frontend")}
            type="button"
            suppressHydrationWarning
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === "frontend"
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-500/25"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Frontend &amp; Web
          </button>
          <button
            onClick={() => setActiveCategory("mobile")}
            type="button"
            suppressHydrationWarning
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === "mobile"
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-500/25"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Mobile (React Native / Expo)
          </button>
          <button
            onClick={() => setActiveCategory("backend")}
            type="button"
            suppressHydrationWarning
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === "backend"
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-500/25"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Backend &amp; Databases
          </button>
          <button
            onClick={() => setActiveCategory("tools")}
            type="button"
            suppressHydrationWarning
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === "tools"
                ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-500/25"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            Tools &amp; Practices
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-7 border border-slate-800 hover:border-amber-500/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {category.skills.length} Technologies
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                        skill.highlight
                          ? "bg-amber-500/15 text-amber-200 border border-amber-500/40 font-semibold shadow-sm shadow-amber-500/10"
                          : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1 h-1 rounded-full bg-amber-400" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Production Tested</span>
                <span className="text-amber-400/80">Clean Architecture</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
