"use client";

import { useState } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const coreSkills = [
    { label: "React.js & Next.js 16", color: "from-amber-400/20 to-amber-500/5 text-amber-300 border-amber-500/30" },
    { label: "React Native (Expo)", color: "from-sky-500/20 to-sky-600/5 text-sky-300 border-sky-500/30" },
    { label: "TypeScript", color: "from-blue-500/20 to-blue-600/5 text-blue-300 border-blue-500/30" },
    { label: "Node.js & Express", color: "from-emerald-500/20 to-emerald-600/5 text-emerald-300 border-emerald-500/30" },
    { label: "Frappe Framework", color: "from-orange-500/20 to-orange-600/5 text-orange-300 border-orange-500/30" },
    { label: "MySQL & MongoDB", color: "from-indigo-500/20 to-indigo-600/5 text-indigo-300 border-indigo-500/30" },
  ];

  return (
    <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Information */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Full-time, Remote & Freelance Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2.5 sm:space-y-3">
              <h2 className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-mono font-semibold">
                Hi there, I am
              </h2>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Swapnil{" "}
                <span className="shimmer-text">Raut</span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-slate-200 leading-snug">
                Full Stack &amp; Cross-Platform Mobile Engineer
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Specializing in building high-performance web applications and cross-platform mobile solutions. 
              My core expertise lies in <strong className="text-slate-200">React.js, Next.js, React Native (Expo), TypeScript, Node.js</strong>, and modern databases.
            </p>

            {/* Location & Quick Credential */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span className="text-slate-700">•</span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Hybrowlabs & skillians alum
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <button
                onClick={handleCopyEmail}
                type="button"
                suppressHydrationWarning
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-slate-900/90 border border-amber-500/25 hover:border-amber-400/50 hover:bg-slate-800/80 transition-all duration-200"
              >
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span>{copied ? "Email Copied! ✓" : "Copy Email"}</span>
              </button>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-slate-300 bg-slate-900/90 border border-amber-500/25 hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Quick Tech Tag Badges */}
            <div className="pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2.5">
                Primary Stack Focus:
              </span>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill.label}
                    className={`text-xs font-mono px-3 py-1 rounded-lg border bg-gradient-to-r ${skill.color} transition-all duration-200 hover:scale-105`}
                  >
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Brand Developer Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative group">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-amber-300/10 rounded-2xl blur-lg group-hover:blur-xl opacity-70 transition-all duration-300" />
              
              {/* Main Card */}
              <div className="relative glass-panel rounded-2xl p-6 border border-amber-500/25 shadow-2xl space-y-5">
                
                {/* Header bar styled like code editor / terminal */}
                <div className="flex items-center justify-between border-b border-amber-500/15 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-amber-400/90 tracking-wider">
                    swapnil-raut.tsx
                  </span>
                </div>

                {/* Avatar & Profile Identity */}
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-md shadow-amber-500/20">
                      <div className="w-full h-full bg-[#0a0e17] rounded-2xl flex items-center justify-center font-bold text-2xl text-amber-400 font-mono">
                        SR
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-amber-400 text-black text-[9px] font-black tracking-wider uppercase">
                      PRO
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                      Swapnil Raut
                      <span className="text-amber-400" title="Verified Full Stack">
                        <svg className="w-4 h-4 fill-current inline" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Full Stack & Mobile Developer
                    </p>
                  </div>
                </div>

                {/* Code-style info block */}
                <div className="bg-[#070a10] rounded-xl p-4 font-mono text-xs border border-slate-800/80 space-y-1.5 leading-relaxed">
                  <div className="text-slate-500">{"// Developer Core Values"}</div>
                  <div>
                    <span className="text-amber-400">const</span>{" "}
                    <span className="text-sky-300">specialization</span> = [
                  </div>
                  <div className="pl-4 text-emerald-300">
                    &quot;React.js / Next.js 16&quot;,
                  </div>
                  <div className="pl-4 text-emerald-300">
                    &quot;React Native (Expo)&quot;,
                  </div>
                  <div className="pl-4 text-emerald-300">
                    &quot;Node.js &amp; Frappe&quot;,
                  </div>
                  <div>];</div>
                  <div>
                    <span className="text-amber-400">const</span>{" "}
                    <span className="text-sky-300">availability</span> ={" "}
                    <span className="text-amber-300">&quot;Full-time / Remote&quot;</span>;
                  </div>
                  <div>
                    <span className="text-amber-400">const</span>{" "}
                    <span className="text-sky-300">passion</span> ={" "}
                    <span className="text-purple-300">&quot;High-Performance &amp; Scale&quot;</span>;
                  </div>
                </div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-center">
                    <span className="block text-xl font-bold font-mono text-amber-400">100%</span>
                    <span className="text-[11px] text-slate-400">Responsive &amp; Mobile-First</span>
                  </div>
                  <div className="p-3 rounded-xl bg-sky-500/5 border border-sky-500/20 text-center">
                    <span className="block text-xl font-bold font-mono text-sky-400">Production</span>
                    <span className="text-[11px] text-slate-400">Ready Architecture</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
