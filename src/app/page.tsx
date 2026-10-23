"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Starfield } from "@/components/Starfield";
import { HeroSection } from "@/components/HeroSection";
import { MissionsSection } from "@/components/MissionsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { FactsSection } from "@/components/FactsSection";
import { QuizSection } from "@/components/QuizSection";
import { JourneyTracker } from "@/components/JourneyTracker";
import { LunaAI } from "@/components/LunaAI";
import { Footer } from "@/components/Footer";

export default function LunarExplorerApp() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [currentJourneyStage, setCurrentJourneyStage] = useState<number>(0);
  const [isLunaOpen, setIsLunaOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Stage mapping for storytelling tracker
  const stageToSection = ["hero", "timeline", "missions", "facts", "luna", "quiz"];
  const handleSelectStage = (stageIdx: number) => {
    setCurrentJourneyStage(stageIdx);
    const target = stageToSection[stageIdx];
    if (target === "luna") {
      setIsLunaOpen(true);
    } else {
      handleNavigate(target);
    }
  };

  // Listen to scroll position to update active navbar highlight and astronaut flight stage
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const sections = ["hero", "missions", "timeline", "facts", "quiz"];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            if (section === "hero") setCurrentJourneyStage(0);
            if (section === "timeline") setCurrentJourneyStage(1);
            if (section === "missions") setCurrentJourneyStage(2);
            if (section === "facts") setCurrentJourneyStage(3);
            if (section === "quiz") setCurrentJourneyStage(5);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden relative">
      {/* Dynamic Animated Starfield & Deep-Space Nebula Canvas */}
      <Starfield />

      {/* Persistent Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenLuna={() => setIsLunaOpen(true)}
      />

      {/* Main Experience Modules */}
      <main className="relative z-10 flex flex-col space-y-16 sm:space-y-24">
        {/* 1. Hero Section: Animated Moon Sphere, Briefing, and Feature Cards */}
        <HeroSection
          onBeginMission={() => {
            setCurrentJourneyStage(1);
            handleNavigate("missions");
          }}
          onExploreTimeline={() => {
            setCurrentJourneyStage(1);
            handleNavigate("timeline");
          }}
          onNavigateToCard={(cardId) => {
            handleNavigate(cardId);
          }}
        />

        {/* 2. Missions Section: Apollo 8, 11, 12, 13, 15, 17 & Artemis I, II, III */}
        <MissionsSection />

        {/* 3. Timeline Section: Luna 2 (1959) to Artemis & Gateway (2020s) */}
        <TimelineSection />

        {/* 4. Moon Facts: Distance, Moonlight, Tidal Locking, Gravity, Extreme Temps, Moonquakes, Craters, Drift */}
        <FactsSection />

        {/* 5. Moon Quiz: Mission Control 12-Question Evaluation */}
        <QuizSection />
      </main>

      {/* Interactive Storytelling Astronaut Flight Plan Tracker */}
      <JourneyTracker
        currentStage={currentJourneyStage}
        onSelectStage={handleSelectStage}
      />

      {/* Built-in Real-Time Luna AI Floating Space Guide */}
      <LunaAI
        isOpen={isLunaOpen}
        onClose={() => setIsLunaOpen(false)}
        onOpen={() => {
          setIsLunaOpen(true);
          setCurrentJourneyStage(4);
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
