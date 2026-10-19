"use client";

import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080e] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-amber-400 text-sm">
                SR
              </span>
              <span className="font-bold text-slate-100 text-sm">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <p className="text-xs text-slate-500">
              © 2026 Swapnil Raut. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/#about"
              className="text-xs text-slate-400 hover:text-amber-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="text-xs text-slate-400 hover:text-amber-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="text-xs text-slate-400 hover:text-amber-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="text-xs text-slate-400 hover:text-amber-400 transition-colors"
            >
              Contact
            </Link>
            
            <button
              onClick={scrollToTop}
              type="button"
              suppressHydrationWarning
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-200"
              aria-label="Back to top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center">
          <p className="text-[11px] font-mono text-slate-600">
            Engineered with Next.js 16 (App Router), React 19, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
