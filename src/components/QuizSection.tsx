import React, { useState } from "react";
import { QUIZ_QUESTIONS, QuizQuestion } from "@/data/quiz";
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  Share2, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ChevronRight,
  Trophy,
  Compass
} from "lucide-react";
import confetti from "canvas-confetti";

export const QuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentIdx];
  const totalQuestions = QUIZ_QUESTIONS.length;

  // Web Audio synthetic sound effects (works in any browser without external audio files)
  const playBeep = (type: "correct" | "incorrect" | "finish") => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === "correct") {
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.25);
      } else if (type === "incorrect") {
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(200, audioCtx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.25);
      } else if (type === "finish") {
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.4); // C6
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
      }
    } catch {
      // AudioContext unavailable or blocked by browser policy
    }
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(idx);
    setIsAnswerSubmitted(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
      playBeep("correct");
    } else {
      playBeep("incorrect");
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < totalQuestions) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      playBeep("finish");
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  const handleChallengeFriend = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(
        `I scored ${score}/${totalQuestions} on the Lunar Explorer Mission Control Quiz! Can you beat my score? Check it out here: ${window.location.href}`
      );
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  // Badges based on performance
  const percentage = Math.round((score / totalQuestions) * 100);
  const getBadge = () => {
    if (percentage >= 90) return { title: "Commander of Lunar Operations", color: "from-amber-400 to-yellow-500", icon: Trophy, note: "Outstanding! You possess the deep aerospace knowledge of a veteran Apollo Flight Director." };
    if (percentage >= 70) return { title: "Senior Lunar Pilot", color: "from-cyan-400 to-blue-500", icon: Award, note: "Great work! You are ready to pilot Orion into lunar orbit." };
    if (percentage >= 50) return { title: "Lunar Module Specialist", color: "from-indigo-400 to-purple-500", icon: Compass, note: "Solid effort! A few more flight simulations and you will be ready for Moon landing." };
    return { title: "Cadet Trainee", color: "from-slate-400 to-slate-500", icon: HelpCircle, note: "A great start! Review the Mission Cards and Moon Facts to boost your lunar mastery." };
  };

  const badge = getBadge();

  return (
    <section id="quiz" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-mono tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-violet-400" />
          MISSION CONTROL EVALUATION
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Are You Ready for Lunar Mission Control?
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          Test your expertise on Apollo missions, Artemis timelines, astronauts, and lunar science.
        </p>

        {/* Audio Toggle & Score Header */}
        <div className="flex items-center justify-between pt-2 px-2">
          <div className="text-xs font-mono text-cyan-300 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
            Score: <strong className="text-white">{score}</strong> / {totalQuestions}
          </div>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800 transition-colors"
            aria-label="Toggle Sound Effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            <span>Sound {soundEnabled ? "ON" : "MUTED"}</span>
          </button>
        </div>
      </div>

      {!isQuizCompleted ? (
        <div className="rounded-3xl bg-slate-900/60 border border-violet-500/30 p-6 sm:p-10 backdrop-blur-xl shadow-2xl shadow-violet-950/40 space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Question {currentIdx + 1} of {totalQuestions}</span>
              <span className="px-2 py-0.5 rounded bg-violet-950 text-violet-300 border border-violet-500/30">
                {currentQ.difficulty}
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
            {currentQ.question}
          </h3>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3 pt-2">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = "bg-slate-950/60 border-slate-800 hover:border-violet-500/50 hover:bg-slate-800/60 text-slate-200";

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-500/20";
                } else if (isSelected) {
                  btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200 shadow-md shadow-rose-500/20";
                } else {
                  btnStyle = "bg-slate-950/30 border-slate-900 text-slate-500 opacity-50";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-4 rounded-2xl border text-sm sm:text-base font-medium transition-all duration-200 flex items-center justify-between gap-4 ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-slate-400 shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box After Answer */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-violet-500/30 space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                {selectedAnswer === currentQ.correctIndex ? (
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                  </span>
                ) : (
                  <span className="text-rose-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> Mission Telemetry Correction:
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentQ.explanation}
              </p>
              <p className="text-xs text-cyan-300 pt-1">
                💡 <strong>Did You Know?</strong> {currentQ.didYouKnow}
              </p>

              {/* Next Question Button */}
              <div className="pt-3 flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-violet-500/25 transition-all duration-200"
                >
                  <span>{currentIdx + 1 < totalQuestions ? "Next Question" : "Complete Mission"}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Final Results Screen */
        <div className="rounded-3xl bg-slate-900/80 border border-violet-500/40 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl shadow-violet-950/50 text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[2px] shadow-xl shadow-violet-500/30">
            <div className="w-full h-full bg-slate-950 rounded-3xl flex items-center justify-center">
              <Trophy className="w-10 h-10 text-amber-400" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              MISSION CONTROL DEBRIEFING
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Evaluation Completed!
            </h3>
            <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 font-mono">
              Final Score: {score} / {totalQuestions} ({percentage}%)
            </p>
          </div>

          {/* Achievement Badge */}
          <div className="p-6 rounded-2xl bg-slate-950/70 border border-violet-500/30 max-w-md mx-auto text-center space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Awarded Badge:
            </span>
            <div className="text-xl font-black text-white flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{badge.title}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {badge.note}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleRestartQuiz}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 transition-transform active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>

            <button
              onClick={handleChallengeFriend}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-slate-700 hover:border-slate-500 text-white font-medium text-sm transition-colors"
            >
              <Share2 className="w-4 h-4 text-cyan-400" />
              <span>{copiedLink ? "Link Copied to Clipboard!" : "Challenge a Friend"}</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
