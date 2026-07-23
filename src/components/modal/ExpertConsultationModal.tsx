"use client";

import React, { useState, useEffect } from "react";
import { submitLeadAction } from "@/app/actions";

interface ExpertConsultationModalProps {
  isOpen: boolean;
  serviceTitle: string;
  onClose: () => void;
}

export function ExpertConsultationModal({
  isOpen,
  serviceTitle,
  onClose,
}: ExpertConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Asynchronously submit lead record to background database
      submitLeadAction({
        category: "Website",
        initialQuery: `Talk to Expert request for ${serviceTitle}`,
        answers: {
          service: serviceTitle,
          type: "Expert Consultation Direct WhatsApp",
        },
        contact: {
          name: name.trim(),
          phone: phone.trim(),
          email: "",
        },
      }).catch((err) => console.error("Lead save error:", err));

      // 2. Format WhatsApp Message
      const message = `Hi India Web Designs,\n\nI would like to talk to an expert regarding *${serviceTitle}*.\n\n*Name:* ${name.trim()}\n*Phone Number:* ${phone.trim()}\n*Service Page:* ${serviceTitle}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;

      // 3. Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      // Reset and close
      setName("");
      setPhone("");
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[var(--surface)] border border-[var(--surface-border)] rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-7 relative font-display text-[var(--foreground)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--surface-hover)] border border-[var(--surface-border)] text-[var(--muted)] hover:text-[var(--foreground)] flex items-center justify-center transition-colors cursor-pointer text-lg font-bold"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header Icon & Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#25D366] block">
              Direct Expert Scoping
            </span>
            <h3 className="font-black text-xl text-[var(--foreground)] tracking-tight">
              Talk to Our Technical Expert
            </h3>
          </div>
        </div>

        <p className="text-xs text-[var(--muted)] mb-5 leading-relaxed">
          Fill in your name and phone number below to open a direct WhatsApp consultation for <strong className="text-[var(--foreground)]">{serviceTitle}</strong>.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Name Prefilled */}
          <div>
            <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
              Service Requested
            </label>
            <input
              type="text"
              readOnly
              value={serviceTitle}
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface-hover)] border border-[var(--surface-border)] text-xs font-bold text-[var(--accent)] cursor-not-allowed opacity-90"
            />
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rajesh Sharma"
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--surface-border)] focus:border-[#25D366] text-xs font-medium text-[var(--foreground)] outline-none transition-colors"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-xs font-bold text-[var(--foreground)] mb-1">
              Phone / WhatsApp Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98765 43210"
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--surface-border)] focus:border-[#25D366] text-xs font-medium text-[var(--foreground)] outline-none transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Connect on WhatsApp &rarr;</span>
            </button>
          </div>
        </form>

        <p className="text-[10px] text-[var(--muted)] text-center mt-4">
          🔒 100% Privacy Guaranteed. Zero spam.
        </p>
      </div>
    </div>
  );
}
