"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { adminLogoutAction } from "@/app/actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // If on login page, render child directly without sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await adminLogoutAction();
    router.push("/admin/login");
  };

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: "📊" },
    { label: "Contact Enquiries", href: "/admin/enquiries", icon: "✉️" },
    { label: "Scoping Leads", href: "/admin/leads", icon: "⚡" },
    { label: "Blog & Content CMS", href: "/admin/blog", icon: "📝" },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-[#4ade80] selection:text-black">
      {/* Top Admin Bar */}
      <header className="h-16 border-b border-stone-800 bg-stone-900/90 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="font-display font-black text-lg text-white tracking-tight">
              India Web Designs <span className="text-[#4ade80] font-mono text-xs uppercase px-2 py-0.5 rounded bg-[#4ade80]/10 border border-[#4ade80]/30 ml-1">ADMIN</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono text-xs font-bold transition-colors"
          >
            <span>🌐 View Public Site</span>
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="px-3.5 py-1.5 rounded-lg bg-red-950/80 hover:bg-red-900 border border-red-800 text-red-300 font-mono text-xs font-bold transition-colors cursor-pointer"
          >
            {isLoggingOut ? "Signing out..." : "Sign Out 🔒"}
          </button>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Navigation Sidebar */}
        <aside className="w-full lg:w-64 bg-stone-900/40 border-b lg:border-b-0 lg:border-r border-stone-800/80 p-4 shrink-0">
          <nav className="flex lg:flex-col gap-1.5 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-display text-xs font-bold transition-all shrink-0 ${
                    isActive
                      ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/20"
                      : "text-stone-400 hover:text-white hover:bg-stone-800/60"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Admin Content Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
