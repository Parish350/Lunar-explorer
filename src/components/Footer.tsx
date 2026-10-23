import React from "react";
import { Compass, ExternalLink, Heart, Globe, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-indigo-500/20 bg-slate-950/80 backdrop-blur-md text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <span className="text-2xl">🌕</span>
          <div>
            <p className="font-bold text-white text-sm tracking-wider">
              LUNAR EXPLORER — JOURNEY TO THE MOON
            </p>
            <p className="text-slate-400 text-[11px]">
              Interactive Educational Aerospace Experience • Powered by NASA Open Data & Luna AI
            </p>
          </div>
        </div>

        {/* Space Agencies Links */}
        <div className="flex items-center gap-4 text-xs font-mono text-cyan-300/80">
          <a
            href="https://www.nasa.gov/specials/artemis/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-200 transition-colors flex items-center gap-1"
          >
            <span>NASA Artemis</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span>•</span>
          <a
            href="https://www.nasa.gov/apollo2024/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-200 transition-colors flex items-center gap-1"
          >
            <span>Apollo Archives</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span>•</span>
          <a
            href="https://quickmap.lroc.asu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-200 transition-colors flex items-center gap-1"
          >
            <span>LROC Atlas</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all duration-200"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 text-cyan-400" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto text-center md:text-left text-[11px] text-slate-400 mt-6 pt-6 border-t border-slate-900">
        Educational space exploration resource designed for students, educators, and space enthusiasts worldwide. All mission dates verified against official agency declarations.
      </div>
    </footer>
  );
};
