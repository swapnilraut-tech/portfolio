import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ExperienceSection() {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on engineering across client-facing products, enterprise portals, and high-velocity development teams.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical line indicator */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-amber-400 via-amber-500/30 to-transparent" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative sm:pl-20">
              
              {/* Timeline marker node */}
              <div className="hidden sm:flex absolute left-6 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0a0e17] border-2 border-amber-400 items-center justify-center shadow-md shadow-amber-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-7 border border-slate-800 hover:border-amber-500/30 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-amber-400 font-medium mt-1">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-xs">{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
                      {exp.period}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-amber-400 mt-1 flex-shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack used */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-500 mr-1">Stack:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
