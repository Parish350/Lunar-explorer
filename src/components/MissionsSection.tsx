import React, { useState, useMemo } from "react";
import { MISSIONS, Mission } from "@/data/missions";
import { 
  Rocket, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Info, 
  ExternalLink, 
  X, 
  Award, 
  Layers,
  ChevronRight
} from "lucide-react";

export const MissionsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  const filters = [
    "All",
    "Crewed",
    "Uncrewed",
    "Lunar Landing",
    "Lunar Flyby"
  ];

  const filteredMissions = useMemo(() => {
    return MISSIONS.filter((m) => {
      if (activeFilter === "All") return true;
      if (activeFilter === "Crewed") return m.type === "Crewed";
      if (activeFilter === "Uncrewed") return m.type === "Uncrewed";
      if (activeFilter === "Lunar Landing") return m.category === "Lunar Landing";
      if (activeFilter === "Lunar Flyby") return m.category === "Lunar Flyby";
      return true;
    });
  }, [activeFilter]);

  return (
    <section id="missions" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider">
          <Rocket className="w-3.5 h-3.5 text-cyan-400" />
          HUMAN MOON MISSIONS
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Chronicles of Lunar Exploration
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          From Apollo’s historic first footprints to NASA’s upcoming Artemis expeditions targeting the water ice of the Lunar South Pole.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4" role="tablist" aria-label="Mission Filters">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 border border-cyan-400/50"
                    : "bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800"
                }`}
                role="tab"
                aria-selected={isActive}
              >
                {filter === "All" ? "All Missions" : filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mission Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMissions.map((mission) => {
          const isPlanned = mission.status === "Planned";
          return (
            <article
              key={mission.id}
              className="group rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Image & Header Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={mission.image}
                  alt={`${mission.name} mission imagery`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border ${
                      isPlanned
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                    }`}
                  >
                    {isPlanned ? "Planned Mission" : "Completed"}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-950/70 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {mission.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-300 bg-slate-900/80 border border-slate-700/60 backdrop-blur-md">
                  {mission.year}
                </div>

                {/* Mission Name Overlay */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-2xl font-black text-white drop-shadow-md">
                    {mission.name}
                  </h3>
                  <p className="text-xs text-cyan-300 font-mono">
                    {mission.agency} • {mission.spacecraft}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {mission.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1">
                      {mission.achievements.slice(0, 2).map((ach, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Crew members if applicable */}
                  {mission.crew && mission.crew.length > 0 && (
                    <div className="pt-2 text-xs text-slate-400">
                      <span className="font-semibold text-slate-300 flex items-center gap-1.5 mb-1">
                        <Users className="w-3.5 h-3.5 text-cyan-400" /> Crew:
                      </span>
                      <p className="text-slate-300 truncate">
                        {mission.crew.map((c) => c.name).join(", ")}
                      </p>
                    </div>
                  )}

                  {/* Date Status Callout */}
                  <div className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950/30 p-2 rounded-lg border border-cyan-800/30">
                    {mission.dateStr}
                  </div>
                </div>

                {/* Discover Mission Button */}
                <button
                  onClick={() => setSelectedMission(mission)}
                  className="w-full mt-4 py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-400 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Discover Mission</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Expanded Mission Detail Modal */}
      {selectedMission && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setSelectedMission(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-mission-title"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/20 text-white space-y-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMission(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                  selectedMission.status === "Planned"
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                    : "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                }`}
              >
                {selectedMission.status === "Planned" ? "Planned Mission (NASA Target)" : "Mission Completed"}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-950/50 text-cyan-300 border border-cyan-500/30">
                {selectedMission.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {selectedMission.dateStr}
              </span>
            </div>

            <div className="space-y-1">
              <h3 id="modal-mission-title" className="text-3xl sm:text-4xl font-extrabold text-white">
                {selectedMission.name}
              </h3>
              <p className="text-cyan-400 font-mono text-sm">
                Agency: {selectedMission.agency} • Spacecraft: {selectedMission.spacecraft}
              </p>
            </div>

            {/* Modal Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-700/60 max-h-72 w-full">
              <img
                src={selectedMission.image}
                alt={`${selectedMission.name} primary photograph`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Story */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-400" /> Mission Narrative
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedMission.fullStory}
              </p>
            </div>

            {/* Key Achievements */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" /> Key Achievements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedMission.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300">{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Crew Details if any */}
            {selectedMission.crew && (
              <div className="space-y-3">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" /> Astronaut Crew
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedMission.crew.map((member, idx) => (
                    <div key={idx} className="bg-slate-950/40 border border-slate-800 p-3 rounded-xl">
                      <p className="text-sm font-semibold text-white">{member.name}</p>
                      <p className="text-xs text-cyan-400/80">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fun Fact Callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 text-xs text-cyan-200 leading-relaxed">
              <span className="font-bold text-cyan-300 block mb-1">🚀 Fascinating Mission Fact:</span>
              {selectedMission.funFact}
            </div>

            {/* Close Button */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedMission(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
              >
                Close Briefing
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
