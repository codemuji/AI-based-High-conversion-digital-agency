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
        y: -20,
        opacity: 0,
        duration: 0.22,
        ease: "power2.in",
      }).to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.28,
          ease: "power2.inOut",
        },
        "-=0.1"
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
      // Check for prefers-reduced-motion
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(overlayRef.current, { opacity: 0 });
        gsap.set(headerRef.current, { y: -25, opacity: 0 });
        gsap.set(questionRef.current, { y: 35, opacity: 0 });

        const tl = gsap.timeline();
        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        })
          .to(
            headerRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              ease: "power3.out",
            },
            "-=0.15"
          )
          .to(
            questionRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.3"
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

    const exitX = direction === "forward" ? -50 : 50;
    const enterX = direction === "forward" ? 50 : -50;

    gsap.to(questionRef.current, {
      x: exitX,
      scale: 0.98,
      filter: "blur(8px)",
      opacity: 0,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        if (questionRef.current) {
          gsap.set(questionRef.current, { x: enterX, scale: 0.98, filter: "blur(8px)", opacity: 0 });
        }
        setStepIndex(newIndex);
        if (questionRef.current) {
          gsap.fromTo(
            questionRef.current,
            { x: enterX, scale: 0.98, filter: "blur(8px)", opacity: 0 },
            { x: 0, scale: 1, filter: "blur(0px)", opacity: 1, duration: 0.4, ease: "power3.out", clearProps: "filter,transform" }
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
      // Final step reached! Submit payload
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
        /* Deep rich dark gradient across the full viewport */
        background: "linear-gradient(160deg, #1c1917 0%, #141210 50%, #0c0a09 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "auto",
        padding: "24px 16px",
      }}
      onClick={(e) => {
        if (e.target === overlayRef.current) handleAnimatedClose();
      }}
    >
      {/* Radial vignette fade at the edges for immersive feel */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 50% 50%, transparent 35%, rgba(0, 0, 0, 0.75) 100%)",
          zIndex: 0,
        }}
      />

      {/* Subtle ambient warm glow in background */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "-15%",
          right: "-10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(22,163,74,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: "-15%",
          left: "-10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(19,136,8,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "min(720px, 94vw)",
          minHeight: "min(560px, 86vh)",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Header Section */}
        <div
          ref={headerRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "24px",
            marginBottom: "32px",
            borderBottom: "1px solid rgba(22,163,74,0.18)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span
              id="onboarding-flow-title"
              style={{
                padding: "6px 14px",
                borderRadius: "9999px",
                background: "rgba(22,163,74,0.18)",
                border: "1px solid rgba(22,163,74,0.32)",
                color: "#4ade80",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {category} Growth Roadmap
            </span>
            {initialQuery && initialQuery !== category && (
              <span
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.55)",
                  fontStyle: "italic",
                  maxWidth: "280px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                &ldquo;{initialQuery}&rdquo;
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAnimatedClose}
            title="Close scoping flow (ESC)"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.65)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.16)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.95)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.28)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.07)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.65)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
            }}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Dynamic Question Step */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
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
      </div>
    </div>
  );
}
