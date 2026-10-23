import React, { useState } from "react";
import { Check, Shield, Rocket, Orbit, Footprints, Bot, Trophy, ArrowRight } from "lucide-react";

interface JourneyTrackerProps {
  currentStage: number;
  onSelectStage: (stageIndex: number) => void;
}

export const JourneyTracker: React.FC<JourneyTrackerProps> = ({ currentStage, onSelectStage }) => {
  const [minimized, setMinimized] = useState(false);

  const stages = [
    { title: "Mission Briefing", subtitle: "Why We Explore", icon: Shield, target: "hero" },
    { title: "Launch & Ascent", subtitle: "Timeline History", icon: Orbit, target: "timeline" },
    { title: "Lunar Orbit", subtitle: "Apollo & Artemis", icon: Rocket, target: "missions" },
    { title: "Moonwalk Surface", subtitle: "Lunar Secrets", icon: Footprints, target: "facts" },
    { title: "Mission Control", subtitle: "Ask Luna AI", icon: Bot, target: "luna" },
    { title: "Final Evaluation", subtitle: "Take the Quiz", icon: Trophy, target: "quiz" }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
      <div className="bg-slate-950/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl shadow-cyan-950/50 max-w-xs transition-all duration-300">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-bold">
              Astronaut Flight Plan
            </span>
          </div>
          <button
            onClick={() => setMinimized(!minimized)}
            className="text-[10px] text-slate-400 hover:text-white font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800"
          >
            {minimized ? "Expand" : "Hide"}
          </button>
        </div>

        {!minimized && (
          <div className="pt-3 space-y-2">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isPast = idx < currentStage;
              const isCurrent = idx === currentStage;

              return (
                <button
                  key={idx}
                  onClick={() => onSelectStage(idx)}
                  className={`w-full flex items-center gap-3 p-2 rounded-xl text-left transition-all duration-200 ${
                    isCurrent
                      ? "bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 shadow-sm shadow-cyan-500/20"
                      : isPast
                      ? "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                      : "text-slate-500 hover:bg-white/5 hover:text-slate-400"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                      isCurrent
                        ? "bg-cyan-500 text-slate-950 font-bold"
                        : isPast
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-slate-900 text-slate-500 border border-slate-800"
                    }`}
                  >
                    {isPast ? <Check className="w-4 h-4" /> : <Icon className="w-3.5 h-3.5" />}
                  </div>

                  <div className="overflow-hidden">
                    <p className={`text-xs font-semibold leading-tight truncate ${isCurrent ? "text-white" : ""}`}>
                      {stage.title}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">
                      {stage.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
