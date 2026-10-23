import React, { useState, useRef, useEffect } from "react";
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  AlertCircle, 
  RotateCcw, 
  ChevronDown, 
  Compass, 
  ExternalLink,
  HelpCircle,
  ShieldCheck
} from "lucide-react";
import { queryLunarKnowledge } from "@/data/knowledge";

interface Message {
  id: string;
  sender: "user" | "luna";
  text: string;
  title?: string;
  sources?: string[];
  isLiveAI?: boolean;
  mode?: string;
  note?: string;
  timestamp: string;
}

interface LunaAIProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const LunaAI: React.FC<LunaAIProps> = ({ isOpen, onClose, onOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "luna",
      text: "Hello, explorer! I’m Luna AI, your personal space mission guide. Ask me anything about the Moon, astronauts, Apollo history, the Artemis program, or how humanity will live on the lunar surface!",
      timestamp: "T-00:00"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const suggestedQuestions = [
    "How did astronauts walk on the Moon?",
    "Why does the Moon have craters?",
    "What happened during Apollo 13?",
    "What is the Artemis programme?",
    "Could humans live on the Moon?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend?: string) => {
    const prompt = (textToSend || inputValue).trim();
    if (!prompt || isLoading) return;

    setErrorMessage(null);
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      let data;
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: prompt,
            conversationHistory: messages.slice(-4)
          })
        });

        if (res.ok) {
          data = await res.json();
        } else {
          data = queryLunarKnowledge(prompt);
        }
      } catch {
        // In static GitHub Pages deployment, /api/chat is not present; seamlessly use client-side knowledge engine
        data = queryLunarKnowledge(prompt);
      }

      const lunaMsg: Message = {
        id: `l-${Date.now()}`,
        sender: "luna",
        text: data.answer || "Transmission received, but data was empty.",
        title: data.title,
        sources: data.sources,
        isLiveAI: data.isLiveAI,
        mode: data.mode,
        note: data.note,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, lunaMsg]);
    } catch (err: unknown) {
      setErrorMessage("Lost contact with telemetry network. Please retry your transmission.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetryLast = () => {
    const lastUserMsg = [...messages].reverse().find((m) => m.sender === "user");
    if (lastUserMsg) {
      handleSend(lastUserMsg.text);
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Ask Luna AI Lunar Guide"
        >
          <div className="relative">
            <span className="animate-ping absolute -top-1 -right-1 inline-flex h-3 w-3 rounded-full bg-cyan-200 opacity-75"></span>
            <Bot className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold tracking-wider leading-none">ASK LUNA AI</p>
            <p className="text-[10px] text-cyan-100 font-mono">Mission Guide Online</p>
          </div>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] md:w-[460px] h-[580px] max-h-[85vh] bg-slate-950/95 border border-cyan-500/40 rounded-3xl shadow-2xl shadow-cyan-950/80 backdrop-blur-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
          role="dialog"
          aria-label="Luna AI Chat Window"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[1.5px] shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-300" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Luna AI</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-mono">
                    REAL-TIME
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400">Lunar Exploration Assistant</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Indicator Bar */}
          <div className="px-4 py-1.5 bg-cyan-950/40 border-b border-cyan-500/10 flex items-center justify-between text-[11px] font-mono text-cyan-300/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Verified Scientific Grounding
            </span>
            <span>NASA Data PDS</span>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyan-500/20">
            {messages.map((msg) => {
              const isUser = msg.sender === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"} space-y-1`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-xs shadow-md shadow-cyan-600/20"
                        : "bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-xs shadow-md shadow-slate-950/50"
                    }`}
                  >
                    {!isUser && msg.title && (
                      <p className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
                        {msg.title}
                      </p>
                    )}
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Sources citation if available */}
                    {!isUser && msg.sources && msg.sources.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-slate-400">
                        <span className="text-cyan-400 font-semibold">Sources: </span>
                        {msg.sources.join(" • ")}
                      </div>
                    )}

                    {!isUser && msg.note && (
                      <p className="mt-1 text-[9px] text-slate-500 font-mono italic">
                        {msg.note}
                      </p>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 p-3 bg-slate-900/60 rounded-2xl max-w-[65%] border border-cyan-500/20 text-xs text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="animate-pulse">Consulting Lunar Mission Control...</span>
              </div>
            )}

            {/* Error & Retry Banner */}
            {errorMessage && (
              <div className="p-3 bg-rose-950/70 border border-rose-500/40 rounded-2xl text-xs text-rose-200 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
                <button
                  onClick={handleRetryLast}
                  className="px-2 py-1 rounded bg-rose-900 text-rose-100 hover:bg-rose-800 text-[11px] flex items-center gap-1 font-medium"
                >
                  <RotateCcw className="w-3 h-3" /> Retry
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Prompts */}
          <div className="px-3 py-2 bg-slate-900/40 border-t border-slate-800/80 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-cyan-500/20 border border-slate-700/60 hover:border-cyan-500/40 text-[11px] text-slate-300 hover:text-cyan-300 transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about the Moon or Artemis..."
              disabled={isLoading}
              className="flex-1 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-cyan-500/20"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
