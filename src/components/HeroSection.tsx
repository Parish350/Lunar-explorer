import React from "react";
import { ArrowRight, Compass, Sparkles, Orbit, Award, ShieldCheck, ChevronDown, Rocket } from "lucide-react";

interface HeroSectionProps {
  onBeginMission: () => void;
  onExploreTimeline: () => void;
  onNavigateToCard: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBeginMission,
  onExploreTimeline,
  onNavigateToCard,
}) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-b from-cyan-500/10 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Mission Briefing & Title */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md text-cyan-300 text-xs sm:text-sm font-mono tracking-wider animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            MISSION STATUS: ACTIVE DISCOVERY
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            One Small Step.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">
              One Giant Journey.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Explore humanity’s journey to the Moon, discover its geological secrets, and see what comes next in our return to the lunar South Pole and beyond.
          </p>

          {/* Educational Prologue Callout */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md max-w-xl mx-auto lg:mx-0 text-left">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 shrink-0 mt-0.5">
                <Compass className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white">Why Do Humans Explore the Moon?</h2>
                <p className="text-xs text-slate-300 leading-relaxed mt-1">
                  The Moon preserves an undisturbed 4.5-billion-year record of early solar system history, contains vital water ice reserves for deep-space missions, and serves as our testbed for journeying to Mars.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onBeginMission}
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Begin Your Mission</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreTimeline}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-slate-700/60 hover:border-slate-500 text-slate-200 hover:text-white font-medium backdrop-blur-sm transition-all duration-200 active:scale-[0.98]"
            >
              <Orbit className="w-4 h-4 text-cyan-400" />
              <span>Explore the Timeline</span>
            </button>
          </div>
        </div>

        {/* Right Column: Realistic Animated Moon Model */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] group select-none">
            {/* Outer atmospheric aura */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl group-hover:bg-cyan-400/30 transition-all duration-700" />
            <div className="absolute -inset-4 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />

            {/* Orbit ring decorative */}
            <div className="absolute -inset-6 rounded-full border border-cyan-400/20 border-dashed animate-spin [animation-duration:90s] pointer-events-none" />

            {/* The Moon Sphere */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[inset_-30px_-30px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(56,189,248,0.25)] border border-slate-700/50 bg-slate-900">
              {/* Moon texture photo overlay */}
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images-assets.nasa.gov/image/PIA00405/PIA00405~orig.jpg')`,
                  filter: 'contrast(1.15) brightness(0.95)'
                }}
              />

              {/* Day/Night terminator gradient shadow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/40 to-transparent pointer-events-none" />
              
              {/* Specular rim light */}
              <div className="absolute inset-0 rounded-full shadow-[inset_15px_15px_30px_rgba(255,255,255,0.25)] pointer-events-none" />

              {/* Surface Landmark Pin: Apollo 11 Tranquility Base */}
              <div className="absolute top-[48%] left-[56%] group/pin cursor-pointer">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-300"></span>
                </span>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden group-hover/pin:flex whitespace-nowrap bg-slate-950/90 text-cyan-300 border border-cyan-500/40 text-[10px] px-2 py-1 rounded backdrop-blur-md shadow-lg pointer-events-none">
                  Tranquility Base (Apollo 11, 1969)
                </div>
              </div>

              {/* Surface Landmark Pin: Lunar South Pole (Artemis target) */}
              <div className="absolute bottom-[10%] left-[48%] group/pin cursor-pointer">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-300"></span>
                </span>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden group-hover/pin:flex whitespace-nowrap bg-slate-950/90 text-violet-300 border border-violet-500/40 text-[10px] px-2 py-1 rounded backdrop-blur-md shadow-lg pointer-events-none">
                  South Pole (Artemis Target — Water Ice)
                </div>
              </div>
            </div>

            {/* Quick telemetry caption */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300/90 backdrop-blur-md">
              ORBITAL RADIUS: 1,737.4 KM • TIDALLY LOCKED
            </div>
          </div>
        </div>
      </div>

      {/* 4 Interactive Feature Cards Below Hero */}
      <div className="max-w-7xl mx-auto w-full mt-20 relative z-10">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-mono">MISSION MODULES</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Choose Your Lunar Expedition</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Human Missions */}
          <div
            onClick={() => onNavigateToCard("missions")}
            className="group cursor-pointer rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 p-6 backdrop-blur-md hover:bg-slate-900/70 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-transform">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                Human Missions
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Discover the Apollo and Artemis lunar expeditions, astronauts, Saturn V rockets, and verified mission status.
              </p>
            </div>
            <div className="pt-6 flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
              <span>Inspect Missions</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Lunar Timeline */}
          <div
            onClick={() => onNavigateToCard("timeline")}
            className="group cursor-pointer rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 p-6 backdrop-blur-md hover:bg-slate-900/70 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:text-indigo-300 transition-transform">
                <Orbit className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                Lunar Timeline
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Journey through six decades from Luna 2 and Yuri Gagarin to Apollo 11 and modern Artemis lunar gateways.
              </p>
            </div>
            <div className="pt-6 flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
              <span>View Milestones</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Moon Facts */}
          <div
            onClick={() => onNavigateToCard("facts")}
            className="group cursor-pointer rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/50 p-6 backdrop-blur-md hover:bg-slate-900/70 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500/20 to-teal-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-sky-300 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                Moon Facts
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Explore gravity, tidal locking, moonquakes, ancient craters, and surprising comparisons between the Moon and Earth.
              </p>
            </div>
            <div className="pt-6 flex items-center text-xs font-semibold text-sky-400 group-hover:text-sky-300">
              <span>Uncover Secrets</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Test Your Knowledge */}
          <div
            onClick={() => onNavigateToCard("quiz")}
            className="group cursor-pointer rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-violet-500/50 p-6 backdrop-blur-md hover:bg-slate-900/70 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-500/20 to-fuchsia-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:text-violet-300 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                Test Your Knowledge
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Take the Lunar Mission Control Quiz to test your space IQ, earn commander badges, and challenge fellow explorers.
              </p>
            </div>
            <div className="pt-6 flex items-center text-xs font-semibold text-violet-400 group-hover:text-violet-300">
              <span>Start Quiz</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
