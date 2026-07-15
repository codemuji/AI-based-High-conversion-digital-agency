"use client";

import React, { useState, useEffect } from "react";
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

export function QuestionStep({
  question,
  currentAnswer,
  totalSteps,
  onNext,
  onBack,
  isSubmitting = false,
}: QuestionStepProps) {
  const [textVal, setTextVal] = useState<string>("");
  const [selectVal, setSelectVal] = useState<string>("");
  const [contactVal, setContactVal] = useState<ContactData>({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (question.type === "text" && typeof currentAnswer === "string") {
      setTextVal(currentAnswer);
    } else if (question.type === "select" && typeof currentAnswer === "string") {
      setSelectVal(currentAnswer);
    } else if (question.type === "contact" && currentAnswer && typeof currentAnswer === "object") {
      setContactVal(currentAnswer as ContactData);
    }
  }, [question.id, question.type, currentAnswer]);

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

  const handleSelectOption = (opt: string) => {
    setSelectVal(opt);
    setError("");
    // Auto advance on pill select for super smooth UX
    setTimeout(() => {
      onNext(opt);
    }, 150);
  };

  return (
    <div
      className="flex flex-col h-full justify-between"
      style={{
        /* Override CSS vars for glass-dark context */
        "--foreground": "rgba(255,255,255,0.92)",
        "--muted": "rgba(255,255,255,0.50)",
        "--muted-light": "rgba(255,255,255,0.30)",
        "--surface-border": "rgba(255,255,255,0.12)",
        "--surface-hover": "rgba(255,255,255,0.08)",
        "--background": "rgba(255,255,255,0.06)",
        "--accent-subtle": "rgba(37,99,235,0.20)",
      } as React.CSSProperties}
    >
      <div>
        {/* Progress header */}
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
          <span>Step {question.step} of {totalSteps}</span>
          <span className="text-[var(--accent)] font-medium">
            {Math.round((question.step / totalSteps) * 100)}% Completed
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 rounded-full overflow-hidden mb-6" style={{ background: "rgba(255,255,255,0.12)" }}>
          <div
            className="h-full bg-[var(--accent)] transition-all duration-300 rounded-full"
            style={{ width: `${(question.step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Title and subtitle */}
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--foreground)] leading-tight">
          {question.title}
        </h2>
        {question.subtitle && (
          <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
            {question.subtitle}
          </p>
        )}

        {/* Error notice */}
        {error && (
          <div className="mt-4 p-3 rounded-lg text-xs font-medium flex items-center gap-2" style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.35)", color: "#fca5a5" }}>
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Inputs section */}
        <form onSubmit={handleSubmit} className="mt-6">
          {question.type === "text" && (
            <div>
              <textarea
                rows={4}
                value={textVal}
                onChange={(e) => setTextVal(e.target.value)}
                placeholder={question.placeholder}
                className="w-full p-4 rounded-xl bg-[var(--background)] border border-[var(--surface-border)] text-base text-[var(--foreground)] placeholder-[var(--muted-light)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                autoFocus
              />
            </div>
          )}

          {question.type === "select" && question.options && (
            <div className="space-y-3">
              {question.options.map((opt) => {
                const isSelected = selectVal === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleSelectOption(opt)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "border-[var(--accent)] bg-[var(--accent-subtle)] text-[var(--accent)] font-semibold shadow-xs"
                        : "border-[var(--surface-border)] bg-[var(--background)] hover:border-[var(--accent)]/50 hover:bg-[var(--surface-hover)] text-[var(--foreground)]"
                    }`}
                  >
                    <span className="text-sm sm:text-base">{opt}</span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                        isSelected ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--muted-light)]"
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
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
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={contactVal.name}
                  onChange={(e) => setContactVal({ ...contactVal, name: e.target.value })}
                  placeholder="e.g., Rajesh Sharma"
                  className="w-full py-3 px-4 rounded-xl bg-[var(--background)] border border-[var(--surface-border)] text-base text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  value={contactVal.phone}
                  onChange={(e) => setContactVal({ ...contactVal, phone: e.target.value })}
                  placeholder="e.g., +91 98765 43210"
                  className="w-full py-3 px-4 rounded-xl bg-[var(--background)] border border-[var(--surface-border)] text-base text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-1">
                  Email Address (Optional if WhatsApp provided)
                </label>
                <input
                  type="email"
                  value={contactVal.email}
                  onChange={(e) => setContactVal({ ...contactVal, email: e.target.value })}
                  placeholder="e.g., rajesh@apexretail.in"
                  className="w-full py-3 px-4 rounded-xl bg-[var(--background)] border border-[var(--surface-border)] text-base text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
            </div>
          )}

          {/* Navigation Action Buttons */}
          <div className="mt-8 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            {onBack ? (
              <button
                type="button"
                onClick={onBack}
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer disabled:opacity-50"
                style={{ border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)" }}
              >
                &larr; Back
              </button>
            ) : (
              <div />
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-display font-semibold shadow-sm hover:shadow-md transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Scoping Lead...</span>
                </>
              ) : question.step === totalSteps ? (
                <span>Generate AI Profile & Submit &rarr;</span>
              ) : (
                <span>Next Step &rarr;</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
