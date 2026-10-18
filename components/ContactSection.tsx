"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something High-Performance
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            I am currently open to full-time engineering roles, remote opportunities, and exciting full-stack projects.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct info & social cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="glass-panel rounded-2xl p-6 border border-amber-500/20 shadow-xl space-y-4">
              <span className="text-xs font-mono uppercase text-slate-400">Direct Email</span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-amber-400 transition-colors break-all"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  suppressHydrationWarning
                  className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 hover:border-amber-500/30 space-y-3">
              <span className="text-xs font-mono uppercase text-slate-400">Professional Network</span>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">LinkedIn Profile</h4>
                  <p className="text-xs text-slate-400 font-mono">linkedin.com/in/swapnil12</p>
                </div>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
                >
                  Connect ↗
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400">Base Location</span>
              <h4 className="font-bold text-white text-base flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {PORTFOLIO_DATA.personal.location}
              </h4>
              <p className="text-xs text-slate-400">
                Available for local on-site discussions in Solapur/Maharashtra &amp; worldwide remote collaboration.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Quick Reach Out Form */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 border border-amber-500/20 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Have an opening, contract project, or technical question? Feel free to drop a note.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2 animate-in fade-in duration-300">
                <span className="inline-block p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
                  ✓
                </span>
                <h4 className="text-base font-bold text-white">Thank you for reaching out!</h4>
                <p className="text-xs text-emerald-300">
                  Your message has been simulated successfully. You can also directly email at {PORTFOLIO_DATA.personal.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    suppressHydrationWarning
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#090d15] border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    suppressHydrationWarning
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#090d15] border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Message / Opportunity
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    suppressHydrationWarning
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, product, or stack..."
                    className="w-full px-4 py-3 rounded-xl bg-[#090d15] border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  suppressHydrationWarning
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200"
                >
                  Send Message 🚀
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
