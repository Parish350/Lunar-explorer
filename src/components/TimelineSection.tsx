import React, { useState } from "react";
import { TIMELINE_MILESTONES, TimelineMilestone } from "@/data/timeline";
import { Clock, Orbit, Calendar, ArrowRight, ArrowLeft, Globe, Rocket, CheckCircle } from "lucide-react";

export const TimelineSection: React.FC = () => {
  const [selectedDecade, setSelectedDecade] = useState<string>("All");
  const [activeMilestone, setActiveMilestone] = useState<TimelineMilestone>(TIMELINE_MILESTONES[3]); // Apollo 11 by default

  const decades = ["All", "1950s", "1960s", "1970s", "1990s", "2000s-2010s", "2020s"];

  const filteredMilestones = TIMELINE_MILESTONES.filter((m) => {
    if (selectedDecade === "All") return true;
    return m.decade === selectedDecade;
  });

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-wider">
          <Clock className="w-3.5 h-3.5 text-indigo-400" />
          INTERACTIVE HUMAN LUNAR TIMELINE
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Humanity’s Great Leap Through Time
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Trace every defining era of lunar and space exploration, from the first satellite impacts to sustainable lunar bases.
        </p>

        {/* Decade selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4" role="tablist" aria-label="Decade filters">
          {decades.map((dec) => {
            const isActive = selectedDecade === dec;
            return (
              <button
                key={dec}
                onClick={() => setSelectedDecade(dec)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white border border-indigo-400 shadow-md shadow-indigo-500/25"
                    : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
                }`}
                role="tab"
                aria-selected={isActive}
              >
                {dec}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Horizontal / Vertical Milestone Tracker */}
      <div className="space-y-10">
        {/* Horizontal Scroll Track */}
        <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-indigo-500/30 scrollbar-track-slate-950">
          <div className="flex items-center gap-4 min-w-max px-2">
            {filteredMilestones.map((m, index) => {
              const isSelected = activeMilestone.id === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMilestone(m)}
                  className={`group relative text-left p-4 rounded-2xl border transition-all duration-300 w-60 sm:w-64 backdrop-blur-md flex flex-col justify-between ${
                    isSelected
                      ? "bg-indigo-950/70 border-indigo-400 shadow-lg shadow-indigo-500/20 scale-[1.02]"
                      : "bg-slate-900/40 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/70"
                  }`}
                >
                  {/* Year & Category */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 font-mono">
                      {m.year}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950 text-indigo-300 border border-indigo-500/30 font-medium">
                      {m.decade}
                    </span>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs text-indigo-300 font-medium mb-1 line-clamp-1">
                      {m.date}
                    </p>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {m.title}
                    </h3>
                  </div>

                  {/* Indicator Pip */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="truncate max-w-[120px]">{m.countryOrOrg}</span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-indigo-400 animate-ping" : "bg-slate-600"}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Spotlight Feature View */}
        <div className="rounded-3xl bg-slate-900/70 border border-indigo-500/30 p-6 sm:p-10 backdrop-blur-xl shadow-2xl shadow-indigo-950/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-700/60 h-72 sm:h-96 w-full shadow-inner bg-slate-950">
            <img
              src={activeMilestone.image}
              alt={activeMilestone.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-cyan-300 bg-slate-950/80 backdrop-blur-md p-2 rounded-lg border border-cyan-500/30">
              VEHICLE: {activeMilestone.vehicle}
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-3xl font-black text-indigo-400 font-mono">
                {activeMilestone.year}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium">
                {activeMilestone.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {activeMilestone.date}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {activeMilestone.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeMilestone.story}
            </p>

            {/* Key Facts */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                Key Historical Insights:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeMilestone.keyFacts.map((fact, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-slate-950/50 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-snug">{fact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Country / Agency badge */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Conducted by: <strong className="text-slate-200">{activeMilestone.countryOrOrg}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
