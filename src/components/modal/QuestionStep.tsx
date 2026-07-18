"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import type { QuestionDef } from "@/lib/questions";

export interface ContactData {
  name: string;
  email: string;
  phone: string;
}

export interface QuestionStepProps {
  question: QuestionDef;
  currentAnswer?: string | ContactData;
  totalSteps: number;
  onNext: (answer: string | ContactData) => void;
  onBack?: () => void;
  isSubmitting?: boolean;
}

export const QuestionStep = React.forwardRef<HTMLDivElement, QuestionStepProps>(function QuestionStep({
  question,
  currentAnswer,
  onNext,
  isSubmitting = false,
}, ref) {
  const [textVal, setTextVal] = useState<string>("");
  const [selectVal, setSelectVal] = useState<string>("");
  const [contactVal, setContactVal] = useState<ContactData>({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState<string>("");
  const optionsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (question.type === "text" && typeof currentAnswer === "string") {
      setTextVal(currentAnswer);
    } else if (question.type === "select" && typeof currentAnswer === "string") {
      setSelectVal(currentAnswer);
    } else if (question.type === "contact" && currentAnswer && typeof currentAnswer === "object") {
      setContactVal(currentAnswer as ContactData);
    }
  }, [question.id, question.type, currentAnswer]);

  // GSAP Floating Staggered Blur Reveal for option pills
  useEffect(() => {
    if (question.type === "select" && optionsContainerRef.current) {
      const buttons = optionsContainerRef.current.querySelectorAll("button");
      if (buttons.length > 0) {
        gsap.fromTo(
          buttons,
          { opacity: 0, y: 28, filter: "blur(12px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, stagger: 0.08, ease: "power3.out", clearProps: "transform,opacity,filter" }
        );
      }
    }
  }, [question.id, question.type]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (question.type === "text") {
      if (question.required && !textVal.trim()) {
        setError("Please provide a brief answer to continue.");
        return;
      }
      onNext(textVal.trim());
    } else if (question.type === "select") {
      if (question.required && !selectVal) {
        setError("Please select an option to continue.");
        return;
      }
      onNext(selectVal);
    } else if (question.type === "contact") {
      if (!contactVal.name.trim()) {
        setError("Please enter your name.");
        return;
      }
      if (!contactVal.phone.trim() && !contactVal.email.trim()) {
        setError("Please provide either your phone/WhatsApp number or email address.");
        return;
      }
      onNext(contactVal);
    }
  };

  const handleSelectOption = (opt: string, e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectVal(opt);
    setError("");

    // Tactile selection micro-bounce & emerald flash
    gsap.to(e.currentTarget, {
      scale: 0.98,
      duration: 0.08,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    // Auto advance on single option select after brief delay
    setTimeout(() => {
      onNext(opt);
    }, 180);
  };

  return (
    <div
      ref={ref}
      className="w-full flex flex-col justify-center"
    >
      <div>
        {/* Floating Question Title */}
        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-[1.12] drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)] text-center sm:text-left">
          {question.title}
        </h2>

        {/* Floating Subtitle */}
        {question.subtitle && (
          <p className="text-sm sm:text-base text-stone-300 font-normal mt-2.5 leading-relaxed max-w-2xl drop-shadow-[0_4px_15px_rgba(0,0,0,0.7)] text-center sm:text-left">
            {question.subtitle}
          </p>
        )}

        {/* Floating Error Notice */}
        {error && (
          <div className="mt-4 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-3 bg-red-500/20 border border-red-500/40 text-red-300 backdrop-blur-md shadow-lg animate-fadeIn">
            <svg className="w-4 h-4 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Interactive Matrix Area */}
        <form onSubmit={handleSubmit} className="mt-6 sm:mt-8">
          {question.type === "text" && (
            <div className="space-y-4">
              <textarea
                rows={4}
                value={textVal}
                onChange={(e) => setTextVal(e.target.value)}
                placeholder={question.placeholder}
                className="w-full p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/15 text-base sm:text-lg text-white placeholder-stone-500 focus:outline-none focus:border-[#4ade80] focus:ring-4 focus:ring-[#4ade80]/20 shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition-all duration-300 backdrop-blur-md resize-none font-display"
                autoFocus
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl bg-[#4ade80] hover:bg-[#22c55e] text-black font-display font-black text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(74,222,128,0.35)] hover:shadow-[0_0_45px_rgba(74,222,128,0.55)] active:scale-95 disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Continue to Next Step &rarr;</span>
                </button>
              </div>
            </div>
          )}

          {question.type === "select" && question.options && (
            <div ref={optionsContainerRef} className="grid grid-cols-1 gap-3 sm:gap-3.5">
              {question.options.map((opt) => {
                const isSelected = selectVal === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={(e) => handleSelectOption(opt, e)}
                    className={`w-full text-left py-3.5 sm:py-4 px-5 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer group backdrop-blur-md ${
                      isSelected
                        ? "border-[#4ade80] bg-[#4ade80]/20 text-[#4ade80] font-bold shadow-[0_0_35px_rgba(74,222,128,0.3)] scale-[1.01]"
                        : "border-white/15 bg-white/[0.05] hover:border-[#4ade80]/70 hover:bg-white/[0.1] text-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-medium tracking-tight leading-snug group-hover:translate-x-1 transition-transform">
                      {opt}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-4 transition-all ${
                        isSelected
                          ? "border-[#4ade80] bg-[#4ade80] text-black shadow-[0_0_12px_#4ade80]"
                          : "border-white/30 group-hover:border-[#4ade80]"
                      }`}
                    >
                      {isSelected ? (
                        <svg className="w-3 h-3 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-[10px] font-mono text-stone-500 group-hover:text-[#4ade80] transition-colors">&rarr;</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {question.type === "contact" && (
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-[#4ade80] mb-1.5">
                  01 // Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={contactVal.name}
                  onChange={(e) => setContactVal({ ...contactVal, name: e.target.value })}
                  placeholder="e.g., Rajesh Sharma"
                  className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-white/[0.05] border border-white/15 text-sm sm:text-base text-white placeholder-stone-500 focus:outline-none focus:border-[#4ade80] focus:ring-4 focus:ring-[#4ade80]/20 shadow-[0_8px_25px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-[#4ade80] mb-1.5">
                  02 // Phone or WhatsApp Number *
                </label>
                <input
                  type="tel"
                  value={contactVal.phone}
                  onChange={(e) => setContactVal({ ...contactVal, phone: e.target.value })}
                  placeholder="e.g., +91 98765 43210"
                  className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-white/[0.05] border border-white/15 text-sm sm:text-base text-white placeholder-stone-500 focus:outline-none focus:border-[#4ade80] focus:ring-4 focus:ring-[#4ade80]/20 shadow-[0_8px_25px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-stone-400 mb-1.5">
                  03 // Email Address (Optional if WhatsApp provided)
                </label>
                <input
                  type="email"
                  value={contactVal.email}
                  onChange={(e) => setContactVal({ ...contactVal, email: e.target.value })}
                  placeholder="e.g., rajesh@apexretail.in"
                  className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-white/[0.05] border border-white/15 text-sm sm:text-base text-white placeholder-stone-500 focus:outline-none focus:border-[#4ade80] focus:ring-4 focus:ring-[#4ade80]/20 shadow-[0_8px_25px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 sm:py-4.5 px-6 rounded-xl bg-[#4ade80] hover:bg-[#22c55e] text-black font-display font-black text-base sm:text-lg tracking-wide shadow-[0_0_30px_rgba(74,222,128,0.35)] hover:shadow-[0_0_50px_rgba(74,222,128,0.55)] active:scale-[0.98] disabled:opacity-50 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      <span>Architecting Your Custom Roadmap...</span>
                    </>
                  ) : (
                    <span>Generate My Free Growth Roadmap ⚡ &rarr;</span>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
});
