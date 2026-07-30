"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { verifyAdminPasswordAction } from "@/app/actions";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const res = await verifyAdminPasswordAction(password);
      if (res.success) {
        router.push("/admin");
      } else {
        setError(res.error || "Incorrect admin password.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during authentication.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center p-4 selection:bg-[#4ade80] selection:text-black">
      <div className="w-full max-w-md p-8 rounded-3xl bg-stone-900 border border-stone-800 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <span className="w-3 h-3 rounded-full bg-[#4ade80] inline-block animate-pulse mb-1" />
          <h1 className="font-display font-black text-2xl text-white">
            India Web Designs
          </h1>
          <p className="text-xs font-mono uppercase text-[#4ade80] font-bold tracking-wider">
            ADMIN PANEL ACCESS
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 pt-2">
          <div>
            <label className="block font-mono text-xs uppercase text-stone-300 mb-1.5 font-bold">
              Admin Secret Key
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password (default: admin123)"
              required
              className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white font-mono text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
            />
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs font-mono">
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-[var(--accent)] hover:bg-[#15803d] disabled:opacity-50 text-white font-display font-bold text-sm tracking-wide transition-all shadow-lg cursor-pointer"
          >
            {isSubmitting ? "Authenticating..." : "Unlock Admin Dashboard 🔓"}
          </button>
        </form>
      </div>
    </div>
  );
}
