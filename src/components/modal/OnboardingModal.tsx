"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = category ? QUESTIONS_BY_CATEGORY[category] : [];
  const currentQuestion = questions[stepIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      setStepIndex(0);
      setAnswers(initialQuery ? { q1: initialQuery } : {});
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen, initialQuery]);

  // Handle ESC press directly from native dialog close
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleNativeClose = () => {
      onClose();
    };

    dialog.addEventListener("close", handleNativeClose);
    return () => dialog.removeEventListener("close", handleNativeClose);
  }, [onClose]);

  const handleNext = async (answer: string | ContactData) => {
    if (!currentQuestion || !category) return;
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    if (stepIndex < questions.length - 1) {
      setStepIndex((prev) => prev + 1);
    } else {
      // Final step reached! Submit payload
      setIsSubmitting(true);
      try {
        const contactData = answer as ContactData;
        // Collect Q1..Q3 text/select answers
        const contentAnswers: Record<string, string> = {};
        for (let i = 0; i < questions.length - 1; i++) {
          const qId = questions[i].id;
          const qTitle = questions[i].title;
          contentAnswers[qTitle] = typeof newAnswers[qId] === "string" ? newAnswers[qId] : JSON.stringify(newAnswers[qId]);
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
      setStepIndex((prev) => prev - 1);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100dvw",
        height: "100dvh",
        maxWidth: "100dvw",
        maxHeight: "100dvh",
        margin: 0,
        padding: 0,
        border: "none",
        background: "transparent",
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      {category && currentQuestion && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
        {/* Glass Panel */}
        <div
        style={{
          position: "relative",
          width: "min(680px, 92vw)",
          maxHeight: "88vh",
          borderRadius: "24px",
          /* Solid dark with subtle warm tint — no see-through */
          background: "linear-gradient(160deg, #1e1535 0%, #140e28 50%, #0d0a1a 100%)",
          /* No visible border — blended shadow only for soft depth */
          boxShadow: `
            0 8px 40px rgba(0,0,0,0.5),
            0 32px 80px rgba(0,0,0,0.35),
            inset 0 1px 0 rgba(255,153,51,0.12),
            inset 0 -1px 0 rgba(19,136,8,0.08)
          `,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Subtle saffron-to-green sheen at the top */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "24px",
            background:
              "linear-gradient(160deg, rgba(255,153,51,0.08) 0%, transparent 30%, rgba(19,136,8,0.04) 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Scrollable content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "32px 36px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0",
            flex: 1,
          }}
        >
          {/* Header: Category Badge + Close */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "20px",
              marginBottom: "20px",
              borderBottom: "1px solid rgba(255,153,51,0.15)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(255,153,51,0.18)",
                  border: "1px solid rgba(255,153,51,0.30)",
                  color: "#ffb366",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {category} Scoping Flow
              </span>
              {initialQuery && initialQuery !== category && (
                <span
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.45)",
                    fontStyle: "italic",
                    maxWidth: "240px",
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
              onClick={() => dialogRef.current?.close()}
              title="Close modal (ESC)"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.55)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s, border-color 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.14)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.9)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.55)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Dynamic Question Step */}
          <div style={{ flex: 1 }}>
            <QuestionStep
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
        </div>
      )}
    </dialog>
  );
}
