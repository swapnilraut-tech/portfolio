import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function AboutSection() {
  const highlights = [
    {
      title: "Full-Stack Web & Mobile",
      desc: "Seamlessly bridging high-scale web platforms with responsive cross-platform iOS & Android mobile apps.",
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Architecture & Performance",
      desc: "Obsessed with clean code architecture, state management optimization, and lightning-fast web vitals.",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Business Logic & Scalability",
      desc: "Translating complex business goals into maintainable APIs, Frappe workflows, and robust database layers.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 md:py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering intuitive, high-performance solutions
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            I enjoy converting complex business requirements into intuitive, scalable, and responsive applications.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Bio Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-5 sm:p-8 border border-amber-500/20 shadow-xl flex flex-col justify-between space-y-5 sm:space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p className="font-semibold text-lg text-white">
                👋 Hello! I&apos;m Swapnil Raut, based in Solapur, Maharashtra, India.
              </p>
              {PORTFOLIO_DATA.personal.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-sm text-amber-200/90 leading-relaxed font-mono">
                &ldquo;Always open to connecting with fellow engineers, tech leaders, and exciting product opportunities!&rdquo;
              </div>
            </div>

            {/* Opportunities checklist */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                📫 Actively Open To:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {["Full-time Roles", "Remote Opportunities", "Frontend & Full Stack Projects", "Mobile App Development"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-amber-500/30 text-xs font-medium text-amber-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 hover:border-amber-500/30 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
