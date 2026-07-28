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

  // GSAP Floating Staggered Reveal for option pills
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

    gsap.to(e.currentTarget, {
      scale: 0.98,
      duration: 0.08,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

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
        {/* Question Title */}
        <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight leading-[1.12] text-center sm:text-left">
          {question.title}
        </h2>

        {/* Subtitle */}
        {question.subtitle && (
          <p className="text-sm sm:text-base text-stone-600 font-medium mt-2.5 leading-relaxed max-w-2xl text-center sm:text-left">
            {question.subtitle}
          </p>
        )}

        {/* Error Notice */}
        {error && (
          <div className="mt-4 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 shadow-xs animate-fadeIn">
            <svg className="w-4 h-4 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                className="w-full p-4 sm:p-5 rounded-2xl bg-white border border-stone-300 text-base sm:text-lg text-stone-900 font-semibold placeholder-stone-400 focus:outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/15 shadow-sm transition-all duration-300 resize-none font-display"
                autoFocus
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[#15803d] text-white font-display font-black text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer"
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
                    className={`w-full text-left py-3.5 sm:py-4 px-5 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer group ${
                      isSelected
                        ? "border-[var(--accent)] bg-emerald-50 text-[#15803d] font-bold shadow-sm ring-2 ring-[var(--accent)]/20 scale-[1.01]"
                        : "border-stone-200 bg-white hover:border-[var(--accent)] hover:bg-emerald-50/40 text-stone-900 font-semibold shadow-xs hover:shadow-md"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-bold tracking-tight leading-snug text-stone-900 group-hover:translate-x-1 transition-transform">
                      {opt}
                    </span>
                    <div
                      className={`w-5.5 h-5.5 rounded-full border flex items-center justify-center shrink-0 ml-4 transition-all ${
                        isSelected
                          ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-xs"
                          : "border-stone-300 group-hover:border-[var(--accent)]"
                      }`}
                    >
                      {isSelected ? (
                        <svg className="w-3.5 h-3.5 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-[10px] font-mono text-stone-400 group-hover:text-[var(--accent)] transition-colors">&rarr;</span>
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
                <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-[#15803d] mb-1.5">
                  01 // Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={contactVal.name}
                  onChange={(e) => setContactVal({ ...contactVal, name: e.target.value })}
                  placeholder="e.g., Rajesh Sharma"
                  className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-white border border-stone-300 text-sm sm:text-base text-stone-900 font-semibold placeholder-stone-400 focus:outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/15 shadow-xs transition-all duration-300"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-[#15803d] mb-1.5">
                  02 // Phone or WhatsApp Number *
                </label>
                <input
                  type="tel"
                  value={contactVal.phone}
                  onChange={(e) => setContactVal({ ...contactVal, phone: e.target.value })}
                  placeholder="e.g., +91 98765 43210"
                  className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-white border border-stone-300 text-sm sm:text-base text-stone-900 font-semibold placeholder-stone-400 focus:outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/15 shadow-xs transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase tracking-widest text-stone-600 mb-1.5">
                  03 // Email Address (Optional if WhatsApp provided)
                </label>
                <input
                  type="email"
                  value={contactVal.email}
                  onChange={(e) => setContactVal({ ...contactVal, email: e.target.value })}
                  placeholder="e.g., rajesh@apexretail.in"
                  className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-white border border-stone-300 text-sm sm:text-base text-stone-900 font-semibold placeholder-stone-400 focus:outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/15 shadow-xs transition-all duration-300"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 sm:py-4.5 px-6 rounded-xl bg-[var(--accent)] hover:bg-[#15803d] text-white font-display font-black text-base sm:text-lg tracking-wide shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-50 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
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
