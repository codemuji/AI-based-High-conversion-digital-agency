"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import type { Category } from "@/lib/intent-engine";
import { SERVICES_DROPDOWN_GROUPS } from "@/lib/services-dropdown-data";
import { ServicesDropdown } from "./ServicesDropdown";

const NAV_LINKS = [
  { label: "Services", href: "#services", id: "services", isPage: false },
  { label: "Process", href: "/process", id: "process", isPage: true },
  { label: "Work", href: "/work", id: "work", isPage: true },
  { label: "About", href: "/about", id: "about", isPage: true },
];

export interface NavbarProps {
  onStartOnboarding?: (category: Category, initialQuery: string) => void;
}

export function Navbar({ onStartOnboarding }: NavbarProps) {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const navRef = useRef<HTMLElement>(null);

  // Services Dropdown States & Safe Hover Bridge
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pillar 5: Active Section Scroll Spy via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["hero", "services", "process", "work", "about"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: "-80px 0px -40% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Pillar 5: Synchronized GSAP Top Navbar Entrance
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          navRef.current,
          { autoAlpha: 0, y: -24 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", clearProps: "transform,opacity,visibility" }
        );
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  // Lock body scroll when mobile menu is open & close on route change or Escape
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Safe Diagonal Hover Bridge handlers
  const handleServicesEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 220); // 220ms safe diagonal hover tolerance
  };

  const handleSelectService = (category: Category, query: string) => {
    setDropdownOpen(false);
    setMobileOpen(false);
    if (onStartOnboarding) {
      onStartOnboarding(category, query);
    } else {
      // Fallback navigation if on another page without modal
      window.location.assign(`/?category=${encodeURIComponent(category)}&query=${encodeURIComponent(query)}#hero`);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.3s, box-shadow 0.3s",
          background: scrolled || dropdownOpen || mobileOpen ? "rgba(254,252,249,0.98)" : "transparent",
          backdropFilter: scrolled || dropdownOpen || mobileOpen ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled || dropdownOpen || mobileOpen ? "blur(14px)" : "none",
          boxShadow: scrolled || dropdownOpen || mobileOpen ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div
          className="max-w-[1120px] mx-auto flex items-center justify-between h-16 px-4 sm:px-6"
        >
          {/* Logo */}
          <a
            href={isHome ? "#hero" : "/"}
            className="flex items-center gap-2 text-decoration-none text-[var(--foreground)]"
          >
            <span
              className="w-2 h-2 rounded-full bg-[var(--accent)] inline-block animate-pulse"
            />
            <span
              className="font-display font-extrabold text-base sm:text-lg tracking-tight whitespace-nowrap"
            >
              India Web Designs
            </span>
          </a>

          {/* Desktop Links */}
          <div
            className="hidden md:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id || (link.id === "services" && dropdownOpen) || pathname === link.href;
              const linkHref = link.isPage ? link.href : (isHome ? link.href : `/${link.href}`);

              if (link.id === "services") {
                return (
                  <div
                    key={link.href}
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                    className="relative flex items-center py-5 cursor-pointer"
                  >
                    <a
                      href={linkHref}
                      onClick={(e) => {
                        e.preventDefault();
                        setDropdownOpen(!dropdownOpen);
                      }}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      style={{
                        fontSize: 13,
                        fontWeight: isActive ? 700 : 600,
                        color: isActive ? "var(--accent)" : "var(--muted)",
                        textDecoration: "none",
                        letterSpacing: "0.01em",
                        transition: "color 0.2s, font-weight 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180 text-[var(--accent)]" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {isActive && (
                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent)] animate-pulse" />
                      )}
                    </a>
                  </div>
                );
              }

              if (link.isPage) {
                return (
                  <Link
                    key={link.href}
                    href={linkHref}
                    style={{
                      fontSize: 13,
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? "var(--accent)" : "var(--muted)",
                      textDecoration: "none",
                      letterSpacing: "0.01em",
                      transition: "color 0.2s, font-weight 0.2s",
                      position: "relative",
                      paddingBottom: 2,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = "var(--foreground)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = "var(--muted)";
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent)] animate-pulse" />
                    )}
                  </Link>
                );
              }

              return (
                <a
                  key={link.href}
                  href={linkHref}
                  style={{
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? "var(--accent)" : "var(--muted)",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    transition: "color 0.2s, font-weight 0.2s",
                    position: "relative",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--foreground)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--muted)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent)] animate-pulse" />
                  )}
                </a>
              );
            })}
            <a
              href={isHome ? "#hero" : "/"}
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
                background: "var(--accent)",
                padding: "8px 20px",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--accent)")
              }
            >
              Get Free Growth Roadmap
            </a>
          </div>

          {/* Mobile Hamburger Button (44x44 minimum touch target) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg text-[var(--foreground)] hover:bg-[var(--surface-hover)] active:bg-stone-200 dark:active:bg-stone-800 transition-colors cursor-pointer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        {mobileOpen && (
          <div
            className="fixed inset-0 top-[64px] bg-black/40 backdrop-blur-xs z-40 md:hidden animate-fadeIn"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div
            className="relative z-50 md:hidden max-h-[calc(100vh-64px)] overflow-y-auto border-t border-[var(--surface-border)] shadow-xl"
            style={{
              background: "var(--surface)",
              padding: "16px 20px 28px",
            }}
          >
            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const linkHref = isHome ? link.href : `/${link.href}`;

                if (link.id === "services") {
                  return (
                    <div key={link.href} className="border-b border-[var(--surface-border)] py-2">
                      <button
                        type="button"
                        onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                        className="w-full flex items-center justify-between py-2.5 px-2 rounded-lg text-left select-none hover:bg-[var(--surface-hover)] transition-colors cursor-pointer"
                      >
                        <span className="text-[15px] font-semibold text-[var(--foreground)] flex items-center gap-2">
                          <span>{link.label}</span>
                          <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-[var(--accent-subtle)] px-2 py-0.5 rounded-full">
                            30+ Services
                          </span>
                        </span>
                        <svg
                          className={`w-4 h-4 text-[var(--muted)] transition-transform duration-200 ${
                            mobileServicesExpanded ? "rotate-180 text-[var(--accent)]" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Mobile Accordion Services List */}
                      {mobileServicesExpanded && (
                        <div className="mt-2 pl-2 space-y-4 pt-2 border-t border-[var(--surface-border)] animate-fadeIn">
                          {SERVICES_DROPDOWN_GROUPS.map((group) => (
                            <div key={group.id} className="space-y-1.5">
                              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[var(--muted)] block px-2">
                                {`${group.columnNumber} // ${group.name}`}
                              </span>
                              <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-[var(--accent)]/30">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.id}
                                    href={`/${item.id}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="w-full text-left py-2 px-3 rounded-lg text-xs font-medium text-[var(--foreground)] hover:text-[var(--accent)] hover:bg-[var(--surface-hover)] active:bg-[var(--accent-subtle)] flex items-center justify-between transition-colors"
                                  >
                                    <span>{item.title}</span>
                                    <span className="text-[11px] font-bold text-[var(--accent)]">&rarr;</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.isPage) {
                  return (
                    <Link
                      key={link.href}
                      href={linkHref}
                      onClick={() => setMobileOpen(false)}
                      className="block text-[15px] font-semibold text-[var(--foreground)] hover:text-[var(--accent)] py-3 px-2 border-b border-[var(--surface-border)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.href}
                    href={linkHref}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[15px] font-semibold text-[var(--foreground)] hover:text-[var(--accent)] py-3 px-2 border-b border-[var(--surface-border)] transition-colors"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="pt-4">
              <a
                href={isHome ? "#hero" : "/"}
                onClick={() => setMobileOpen(false)}
                className="block w-full py-3.5 px-4 text-center rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] active:scale-[0.98] text-white font-bold text-sm tracking-wide shadow-md transition-all cursor-pointer"
              >
                Get Free Growth Roadmap &rarr;
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Services Dropdown */}
      <ServicesDropdown
        isOpen={dropdownOpen}
        onClose={() => setDropdownOpen(false)}
        onSelectService={handleSelectService}
        onMouseEnter={handleServicesEnter}
        onMouseLeave={handleServicesLeave}
      />
    </>
  );
}

