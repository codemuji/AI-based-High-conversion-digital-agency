"use client";

import React, { useState } from "react";
import type { Category } from "@/lib/intent-engine";
import { submitLeadAction } from "@/app/actions";

interface ContactSectionProps {
  onStartOnboarding?: (category?: Category, query?: string) => void;
}

export function ContactSection({ onStartOnboarding }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState<Category>("Website");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter both your name and phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await submitLeadAction({
        category,
        initialQuery: note.trim() || `Quick Contact Intake from ${name}`,
        answers: { note: note.trim(), source: "ContactSection Form" },
        contact: {
          name: name.trim(),
          phone: phone.trim(),
          email: "",
        },
      });
      if (res.success) {
        setSubmitted(true);
        setName("");
        setPhone("");
        setNote("");
      } else {
        alert(res.error || "Failed to submit. Please try via WhatsApp directly.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please click the WhatsApp button to chat instantly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0c0a09] text-stone-100 border-t border-stone-800/80 relative overflow-hidden selection:bg-[#4ade80] selection:text-black">
      {/* Architectural Background Highlights */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-48 left-1/3 w-[500px] h-[500px] bg-[#4ade80]/10 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Split Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-stone-800 pb-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#4ade80] block mb-2.5">
              {"// DIRECT ENGINEERING HOTLINE & INTAKE"}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
              Let&apos;s engineer your <br className="hidden sm:inline" />
              market advantage today.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-stone-400 max-w-md md:text-right leading-relaxed">
            Skip endless sales pitches. Talk directly to senior technology architects or submit your brief below for an encrypted, priority response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Box: Terminal Contact Channels (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-9 rounded-3xl bg-[#141210] border border-stone-800/90 relative overflow-hidden shadow-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4ade80] block mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                <span>DIRECT ACCESS CHANNELS</span>
              </span>

              <div className="space-y-4">
                {/* WhatsApp Block */}
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20scope%20a%20project%20with%20India%20Web%20Designs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-[#22c55e] transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#22c55e]/15 text-[#22c55e] flex items-center justify-center shrink-0 border border-[#22c55e]/30 group-hover:scale-105 transition-transform text-lg">
                    💬
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-stone-400 block">
                      Instant WhatsApp Chat
                    </span>
                    <strong className="text-base font-bold text-white group-hover:text-[#22c55e] transition-colors">
                      +91 98765 43210
                    </strong>
                    <span className="text-[11px] text-stone-500 block mt-0.5">
                      Average response: under 5 mins
                    </span>
                  </div>
                </a>

                {/* Engineering Phone Line */}
                <a
                  href="tel:+919876543210"
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-[#4ade80] transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#4ade80]/15 text-[#4ade80] flex items-center justify-center shrink-0 border border-[#4ade80]/30 group-hover:scale-105 transition-transform text-lg">
                    ⚡
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-stone-400 block">
                      Engineering Phone Hotline
                    </span>
                    <strong className="text-base font-bold text-white group-hover:text-[#4ade80] transition-colors">
                      +91 98765 43210
                    </strong>
                    <span className="text-[11px] text-stone-500 block mt-0.5">
                      Mon – Sat | 9:00 AM – 8:00 PM IST
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@codemuji.com"
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-[#4ade80] transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#4ade80]/15 text-[#4ade80] flex items-center justify-center shrink-0 border border-[#4ade80]/30 group-hover:scale-105 transition-transform text-lg">
                    ✉️
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-stone-400 block">
                      Technical Specifications &amp; RFPs
                    </span>
                    <strong className="text-base font-bold text-white group-hover:text-[#4ade80] transition-colors">
                      hello@codemuji.com
                    </strong>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-800 text-center sm:text-left">
                <span className="text-xs font-mono text-stone-400 block mb-3.5">
                  Prefer an interactive guided diagnosis?
                </span>
                <button
                  type="button"
                  onClick={() => onStartOnboarding?.("Website", "General Project Inquiry")}
                  className="w-full py-3.5 px-4 rounded-xl bg-stone-900 hover:bg-[#4ade80]/15 border border-stone-800 hover:border-[#4ade80] text-xs font-mono font-bold uppercase tracking-wider text-[#4ade80] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Launch 4-Question Scoping Modal ⚡</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Box: Terminal Intake Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#141210] border border-stone-800/90 text-stone-100 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-8 border-b border-stone-800 pb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#eab308]" />
                  <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
                  <span className="ml-2 font-mono text-xs text-stone-400 font-semibold uppercase tracking-wider">
                    {"terminal // quick-intake-brief.ts"}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#4ade80] bg-[#4ade80]/10 px-2.5 py-1 rounded border border-[#4ade80]/20 font-bold">
                  ENCRYPTED &amp; DIRECT
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#22c55e]/20 text-[#22c55e] text-2xl flex items-center justify-center mx-auto border border-[#22c55e]/40">
                    ✓
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    Technical Brief Received!
                  </h3>
                  <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed font-mono">
                    Our senior architectural team has received your project parameters. We will review your requirements and reach out via WhatsApp/Phone within minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-3 rounded-xl bg-stone-900 border border-stone-700 font-mono text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs uppercase text-stone-300 mb-2 font-bold">
                        Your Name <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rajesh Sharma"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 font-mono text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase text-stone-300 mb-2 font-bold">
                        WhatsApp / Phone <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 font-mono text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase text-stone-300 mb-2 font-bold">
                      Target Project Architecture
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as Category)}
                      className="w-full px-4 py-3.5 rounded-xl bg-stone-900/90 border border-stone-800 text-white font-mono text-sm focus:outline-none focus:border-[#4ade80] transition-colors cursor-pointer"
                    >
                      <option value="Website">01 // High-Conversion Website / Portal</option>
                      <option value="App">02 // Native iOS &amp; Android Mobile App</option>
                      <option value="Custom Software">03 // Custom Software, CRM or LMS Portal</option>
                      <option value="AI Automation">04 // AI Automation &amp; Workflow Engine</option>
                      <option value="Digital Marketing">05 // Digital Marketing &amp; Brand Growth</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase text-stone-300 mb-2 font-bold">
                      Project Parameters / Current Challenges
                    </label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Share your business goals, required features, timeline, or current website/software bottlenecks..."
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-xl bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 font-mono text-sm focus:outline-none focus:border-[#4ade80] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#4ade80] hover:bg-[#22c55e] disabled:opacity-50 text-black font-mono font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#4ade80]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmission in Progress...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Technical Brief to Architects ⚡</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-center text-stone-500">
                    🔒 By submitting, you agree to our privacy policy. No spam guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
