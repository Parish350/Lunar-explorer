import React, { useState } from "react";
import { MOON_FACTS, MoonFact } from "@/data/facts";
import { 
  Sparkles, 
  Ruler, 
  Sun, 
  RotateCw, 
  ThermometerSnowflake, 
  Activity, 
  Disc, 
  MoveUpRight, 
  ChevronRight, 
  Shuffle, 
  Info,
  HeartHandshake
} from "lucide-react";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Ruler,
  Sun,
  RotateCw,
  Sparkles,
  ThermometerSnowflake,
  Activity,
  Disc,
  MoveUpRight
};

export const FactsSection: React.FC = () => {
  const [activeFactId, setActiveFactId] = useState<string>(MOON_FACTS[0].id);
  const [randomFact, setRandomFact] = useState<MoonFact | null>(null);
  const [expandedFacts, setExpandedFacts] = useState<Record<string, boolean>>({});

  const handleRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * MOON_FACTS.length);
    setRandomFact(MOON_FACTS[randomIndex]);
  };

  const toggleLearnMore = (id: string) => {
    setExpandedFacts((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="facts" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-300 text-xs font-mono tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          LUNAR SECRETS & SCIENCE
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          The Moon Is Stranger Than You Think
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Dive into mind-bending scientific facts, surprising Earth comparisons, extreme geology, and child-friendly explanations.
        </p>

        {/* Did You Know? Button */}
        <div className="pt-2">
          <button
            onClick={handleRandomFact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-sky-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Shuffle className="w-4 h-4" />
            <span>Did You Know? (Reveal Random Secret)</span>
          </button>
        </div>
      </div>

      {/* Random Fact Modal Alert */}
      {randomFact && (
        <div className="mb-10 p-6 rounded-3xl bg-gradient-to-r from-sky-950/80 via-slate-900/90 to-indigo-950/80 border border-sky-400/40 shadow-xl shadow-sky-500/10 backdrop-blur-md relative animate-in fade-in slide-in-from-top-4 duration-300">
          <button
            onClick={() => setRandomFact(null)}
            className="absolute top-4 right-4 text-xs font-mono text-slate-400 hover:text-white bg-slate-800/80 px-2 py-1 rounded-full"
          >
            ✕ Dismiss
          </button>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-300 shrink-0">
              <Sparkles className="w-6 h-6 animate-spin [animation-duration:8s]" />
            </div>
            <div className="space-y-2 pr-6">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
                DID YOU KNOW? — {randomFact.title}
              </span>
              <h3 className="text-xl font-bold text-white">
                {randomFact.headline}
              </h3>
              <p className="text-sm text-sky-100 font-medium leading-relaxed">
                {randomFact.kidFriendlyQuote}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {randomFact.earthComparison}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOON_FACTS.map((fact) => {
          const Icon = ICON_MAP[fact.iconName] || Sparkles;
          const isExpanded = !!expandedFacts[fact.id];

          return (
            <article
              key={fact.id}
              className="rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/40 p-6 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 group"
            >
              <div className="space-y-4">
                {/* Header: Icon & Category Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-sky-300 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-950/70 border border-slate-800 text-sky-300 font-mono">
                    {fact.tag}
                  </span>
                </div>

                {/* Stat Big Highlight */}
                <div className="pt-1">
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-200 font-mono">
                    {fact.stat}
                  </p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                    {fact.statLabel}
                  </p>
                </div>

                {/* Headline & Short Explanation */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {fact.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {fact.shortExplanation}
                  </p>
                </div>

                {/* Earth Comparison Box */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <p className="font-semibold text-sky-400 text-[11px] flex items-center gap-1">
                    <HeartHandshake className="w-3.5 h-3.5" /> Earth vs. Moon:
                  </p>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    {fact.earthComparison}
                  </p>
                </div>

                {/* Expanded Detailed Science */}
                {isExpanded && (
                  <div className="pt-2 border-t border-slate-800/80 space-y-2 animate-in fade-in duration-200">
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-xl border border-sky-500/20">
                      {fact.detailedExplanation}
                    </p>
                    <p className="text-xs text-sky-200 italic">
                      "{fact.kidFriendlyQuote}"
                    </p>
                  </div>
                )}
              </div>

              {/* Learn More Toggle Button */}
              <div className="pt-4 mt-2">
                <button
                  onClick={() => toggleLearnMore(fact.id)}
                  className="w-full py-2 px-3 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 text-sky-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>{isExpanded ? "Show Less" : "Learn More Science"}</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
