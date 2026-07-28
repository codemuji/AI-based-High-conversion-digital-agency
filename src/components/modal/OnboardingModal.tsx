"use client";

import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import type { Category } from "@/lib/intent-engine";
import { QUESTIONS_BY_CATEGORY } from "@/lib/questions";
import { QuestionStep, type ContactData } from "./QuestionStep";

export interface LeadSubmissionPayload {
  category: Category;
  initialQuery: string;
  answers: Record<string, string>;
  contact: ContactData;
}

export interface OnboardingModalProps {
  isOpen: boolean;
  category: Category | null;
  initialQuery: string;
  onClose: () => void;
  onSubmit: (payload: LeadSubmissionPayload) => Promise<void>;
}

export function OnboardingModal({
  isOpen,
  category,
  initialQuery,
  onClose,
  onSubmit,
}: OnboardingModalProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [stepIndex, setStepIndex] = useState(0);
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // GSAP animation refs
  const overlayRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const questions = category ? QUESTIONS_BY_CATEGORY[category] : [];
  const currentQuestion = questions[stepIndex];

  // Animated close handler triggered on X, ESC, or backdrop click
  const handleAnimatedClose = useCallback(() => {
    if (isClosing || !overlayRef.current) {
      onClose();
      return;
    }
    setIsClosing(true);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsClosing(false);
          setShouldRender(false);
          onClose();
        },
      });

      tl.to([headerRef.current, questionRef.current], {
        y: -30,
        opacity: 0,
        filter: "blur(16px)",
        duration: 0.25,
        ease: "power2.in",
      }).to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "-=0.12"
      );
    });

    return () => ctx.revert();
  }, [isClosing, onClose]);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setIsClosing(false);
      setStepIndex(0);
      setAnswers(initialQuery ? { q1: initialQuery } : {});
      setShouldRender(true);
    }
  }

  // Sync close animation with prop isOpen
  useEffect(() => {
    if (!isOpen && shouldRender && !isClosing) {
      handleAnimatedClose();
    }
  }, [isOpen, shouldRender, isClosing, handleAnimatedClose]);

  // Body scroll locking and ESC key handling
  useEffect(() => {
    if (!shouldRender) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleAnimatedClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shouldRender, handleAnimatedClose]);

  // GSAP Entrance Choreography
  useLayoutEffect(() => {
    if (!shouldRender || !overlayRef.current || !headerRef.current || !questionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(overlayRef.current, { opacity: 0 });
        gsap.set(headerRef.current, { y: -30, opacity: 0 });
        gsap.set(questionRef.current, { y: 40, opacity: 0, filter: "blur(20px)" });

        const tl = gsap.timeline();
        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
        })
          .to(
            headerRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.2"
          )
          .to(
            questionRef.current,
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.6,
              ease: "power3.out",
              clearProps: "filter,transform",
            },
            "-=0.35"
          );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(overlayRef.current, { opacity: 1 });
        gsap.set([headerRef.current, questionRef.current], { y: 0, opacity: 1 });
      });
    });

    return () => ctx.revert();
  }, [shouldRender]);

  const transitionToStep = (newIndex: number, direction: "forward" | "backward") => {
    if (!questionRef.current) {
      setStepIndex(newIndex);
      return;
    }

    const exitY = direction === "forward" ? -45 : 45;
    const enterY = direction === "forward" ? 45 : -45;

    gsap.to(questionRef.current, {
      y: exitY,
      scale: 0.96,
      filter: "blur(18px)",
      opacity: 0,
      duration: 0.24,
      ease: "power2.in",
      onComplete: () => {
        if (questionRef.current) {
          gsap.set(questionRef.current, { y: enterY, scale: 0.96, filter: "blur(18px)", opacity: 0 });
        }
        setStepIndex(newIndex);
        if (questionRef.current) {
          gsap.fromTo(
            questionRef.current,
            { y: enterY, scale: 0.96, filter: "blur(18px)", opacity: 0 },
            { y: 0, scale: 1, filter: "blur(0px)", opacity: 1, duration: 0.5, ease: "power3.out", clearProps: "filter,transform" }
          );
        }
      },
    });
  };

  const handleNext = async (answer: string | ContactData) => {
    if (!currentQuestion || !category) return;
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    if (stepIndex < questions.length - 1) {
      transitionToStep(stepIndex + 1, "forward");
    } else {
      setIsSubmitting(true);
      try {
        const contactData = answer as ContactData;
        const contentAnswers: Record<string, string> = {};
        for (let i = 0; i < questions.length - 1; i++) {
          const qId = questions[i].id;
          const qTitle = questions[i].title;
          contentAnswers[qTitle] =
            typeof newAnswers[qId] === "string" ? newAnswers[qId] : JSON.stringify(newAnswers[qId]);
        }

        await onSubmit({
          category,
          initialQuery,
          answers: contentAnswers,
          contact: contactData,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      transitionToStep(stepIndex - 1, "backward");
    }
  };

  if (!shouldRender || !category || !currentQuestion) return null;

  const progressPercent = Math.round(((stepIndex + 1) / questions.length) * 100);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-flow-title"
      style={{
        position: "fixed",
        inset: 0,
        width: "100dvw",
        height: "100dvh",
        zIndex: 100,
        /* Luminous rich green-to-mint gradient background with soft blur filter */
        background: "linear-gradient(135deg, rgba(244, 251, 246, 0.93) 0%, rgba(230, 247, 236, 0.88) 50%, rgba(216, 243, 226, 0.93) 100%)",
        backdropFilter: "blur(12px) saturate(160%)",
        WebkitBackdropFilter: "blur(12px) saturate(160%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflowY: "auto",
        padding: "0",
      }}
      onClick={(e) => {
        if (e.target === overlayRef.current) handleAnimatedClose();
      }}
    >
      {/* Glowing Ambient Color Orbs for Rich Blur Effect */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#16a34a]/30 via-[#22c55e]/25 to-[#4ade80]/20 rounded-full blur-[100px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-[#15803d]/25 via-[#22c55e]/20 to-[#86efac]/20 rounded-full blur-[100px]" />
      {/* Top Edge Laser Progress Line */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          zIndex: 110,
          background: "rgba(0, 0, 0, 0.06)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progressPercent}%`,
            background: "linear-gradient(90deg, #15803d, #22c55e)",
            boxShadow: "0 0 15px rgba(34, 197, 94, 0.4)",
            transition: "width 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>

      {/* Floating Top HUD Status Bar */}
      <div
        ref={headerRef}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 24px sm:24px 40px",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
          <span
            id="onboarding-flow-title"
            style={{
              padding: "7px 16px",
              borderRadius: "9999px",
              background: "rgba(22, 163, 74, 0.1)",
              border: "1px solid rgba(22, 163, 74, 0.25)",
              color: "#15803d",
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 2px 10px rgba(22, 163, 74, 0.08)",
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} className="animate-pulse" />
            <span>{`0${stepIndex + 1} / 0${questions.length} // ${category} ROADMAP`}</span>
          </span>

          {initialQuery && initialQuery !== category && (
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "13px",
                color: "#71717a",
                fontStyle: "italic",
                maxWidth: "320px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
            >
              &ldquo;{initialQuery}&rdquo;
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleAnimatedClose}
          title="Exit Scoping Flow (ESC)"
          style={{
            padding: "8px 16px",
            borderRadius: "9999px",
            border: "1px solid #e4e4e7",
            background: "#f4f4f5",
            color: "#27272a",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "12px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#e4e4e7";
            (e.currentTarget as HTMLButtonElement).style.color = "#09090b";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#d4d4d8";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#f4f4f5";
            (e.currentTarget as HTMLButtonElement).style.color = "#27272a";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#e4e4e7";
          }}
        >
          <span>ESC</span>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Floating Center Stage (Zero Box Boundaries!) */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "720px",
          margin: "0 auto",
          padding: "16px 20px sm:32px",
        }}
      >
        <QuestionStep
          ref={questionRef}
          question={currentQuestion}
          currentAnswer={answers[currentQuestion.id]}
          totalSteps={questions.length}
          onNext={handleNext}
          onBack={stepIndex > 0 ? handleBack : undefined}
          isSubmitting={isSubmitting}
        />
      </div>

      {/* Floating Bottom HUD Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 24px sm:24px 40px",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          flexShrink: 0,
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "12px",
          color: "#71717a",
        }}
      >
        <div>
          {stepIndex > 0 && (
            <button
              type="button"
              onClick={handleBack}
              disabled={isSubmitting}
              style={{
                color: "#52525b",
                fontWeight: 600,
                transition: "color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#15803d";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#52525b";
              }}
            >
              &larr; Return to Previous Question
            </button>
          )}
        </div>

        <div>
          <span>Press <strong style={{ color: "#18181b" }}>[ESC]</strong> or click anywhere outside to exit</span>
        </div>
      </div>
    </div>
  );
}
