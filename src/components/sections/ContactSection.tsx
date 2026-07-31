"use client";

import React, { useState } from "react";
import type { Category } from "@/lib/intent-engine";
import { submitContactEnquiryAction } from "@/app/actions";

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

  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter both your name and phone number.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await submitContactEnquiryAction({
        name: name.trim(),
        email: email.trim() || "no-email-provided@domain.com",
        phone: phone.trim(),
        service: category,
        message: note.trim() || "Quick Contact Form Brief",
      });
      if (res.success) {
        setSubmitted(true);
        setName("");
        setPhone("");
        setEmail("");
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
    <section id="contact" className="py-12 sm:py-16 bg-[#0c0a09] text-stone-100 border-t border-stone-800/80 relative overflow-hidden selection:bg-[#4ade80] selection:text-black font-sans text-sm">
      {/* Background Highlights */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-48 left-1/3 w-[500px] h-[500px] bg-[#4ade80]/10 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Split Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-stone-800 pb-6">
          <div>
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#4ade80] block mb-1.5">
              Direct Hotline &amp; Intake
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Let&apos;s engineer your <br className="hidden sm:inline" />
              market advantage today.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-400 max-w-md md:text-right leading-relaxed">
            Skip endless sales pitches. Talk directly to senior technology architects or submit your brief below for an encrypted, priority response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Box: Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#141210] border border-stone-800/90 relative overflow-hidden shadow-xl">
              <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#4ade80] block mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                <span>Direct Access Channels</span>
              </span>

              <div className="space-y-3">
                {/* WhatsApp Block */}
                <a
                  href="https://wa.me/917002160093?text=Hi%2C%20I%20want%20to%20scope%20a%20project%20with%20India%20Web%20Designs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-[#22c55e] transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#22c55e]/15 text-[#22c55e] flex items-center justify-center shrink-0 border border-[#22c55e]/30 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-display font-semibold text-stone-400 block">
                      Instant WhatsApp Chat
                    </span>
                    <strong className="text-sm font-bold text-white group-hover:text-[#22c55e] transition-colors">
                      +91 70021 60093
                    </strong>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      Average response: under 5 mins
                    </span>
                  </div>
                </a>

                {/* Phone Line */}
                <a
                  href="tel:+917002160093"
                  className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-[#4ade80] transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#4ade80]/15 text-[#4ade80] flex items-center justify-center shrink-0 border border-[#4ade80]/30 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-display font-semibold text-stone-400 block">
                      Engineering Phone Hotline
                    </span>
                    <strong className="text-sm font-bold text-white group-hover:text-[#4ade80] transition-colors">
                      +91 70021 60093
                    </strong>
                    <span className="text-[10px] text-stone-500 block mt-0.5">
                      Mon – Sat | 9:00 AM – 8:00 PM IST
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@indiawebdesigns.in"
                  className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-[#4ade80] transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#4ade80]/15 text-[#4ade80] flex items-center justify-center shrink-0 border border-[#4ade80]/30 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-display font-semibold text-stone-400 block">
                      Specifications &amp; RFPs
                    </span>
                    <strong className="text-sm font-bold text-white group-hover:text-[#4ade80] transition-colors">
                      info@indiawebdesigns.in
                    </strong>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 text-center sm:text-left">
                <span className="text-[11px] font-display text-stone-400 block mb-2.5">
                  Prefer an interactive guided diagnosis?
                </span>
                <button
                  type="button"
                  onClick={() => onStartOnboarding?.("Website", "General Project Inquiry")}
                  className="w-full py-2.5 px-3.5 rounded-lg bg-stone-900 hover:bg-[#4ade80]/15 border border-stone-800 hover:border-[#4ade80] text-[11px] font-display font-bold uppercase tracking-wider text-[#4ade80] transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Launch 4-Question Scoping Modal ⚡</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Box: Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141210] border border-stone-800/90 text-stone-100 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between gap-3 mb-6 border-b border-stone-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                  <span className="ml-1.5 font-display text-[11px] text-stone-400 font-bold uppercase tracking-wider">
                    Quick Intake Brief
                  </span>
                </div>
                <span className="text-[10px] font-display text-[#4ade80] bg-[#4ade80]/10 px-2 py-0.5 rounded border border-[#4ade80]/20 font-bold">
                  Encrypted &amp; Direct
                </span>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#22c55e]/20 text-[#22c55e] text-xl flex items-center justify-center mx-auto border border-[#22c55e]/40">
                    ✓
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Brief Received!
                  </h3>
                  <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed font-display">
                    Our senior architectural team has received your project parameters. We will review your requirements and reach out via WhatsApp/Phone within minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-lg bg-stone-900 border border-stone-700 font-display text-[11px] font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display text-[11px] uppercase text-stone-300 mb-1.5 font-bold">
                        Your Name <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rajesh Sharma"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 font-display text-xs focus:outline-none focus:border-[#4ade80] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-display text-[11px] uppercase text-stone-300 mb-1.5 font-bold">
                        WhatsApp / Phone <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 font-display text-xs focus:outline-none focus:border-[#4ade80] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-display text-[11px] uppercase text-stone-300 mb-1.5 font-bold">
                      Target Project Architecture
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as Category)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-900/90 border border-stone-800 text-white font-display text-xs focus:outline-none focus:border-[#4ade80] transition-colors cursor-pointer"
                    >
                      <option value="Website">High-Conversion Website / Portal</option>
                      <option value="App">Native iOS &amp; Android Mobile App</option>
                      <option value="Custom Software">Custom Software, CRM or LMS Portal</option>
                      <option value="AI Automation">AI Automation &amp; Workflow Engine</option>
                      <option value="Digital Marketing">Digital Marketing &amp; Brand Growth</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-display text-[11px] uppercase text-stone-300 mb-1.5 font-bold">
                      Project Parameters / Current Challenges
                    </label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Share your business goals, required features, timeline, or current bottlenecks..."
                      rows={3}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-900/90 border border-stone-800 text-white placeholder:text-stone-600 font-display text-xs focus:outline-none focus:border-[#4ade80] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 rounded-lg bg-[#4ade80] hover:bg-[#22c55e] disabled:opacity-50 text-black font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#4ade80]/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmission in Progress...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Technical Brief ⚡</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] font-display text-center text-stone-500">
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
