"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const NAV_LINKS = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const navRef = useRef<HTMLElement>(null);

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

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(254,252,249,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* Logo */}
        <a
          href={isHome ? "#hero" : "/"}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            color: "var(--foreground)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: "-0.02em",
            }}
          >
            India Web Designs
          </span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            const linkHref = isHome ? link.href : `/${link.href}`;
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

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--foreground)",
            padding: 6,
          }}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--surface-border)",
            padding: "16px 24px 24px",
          }}
        >
          {NAV_LINKS.map((link) => {
            const linkHref = isHome ? link.href : `/${link.href}`;
            return (
              <a
                key={link.href}
                href={linkHref}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--foreground)",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--surface-border)",
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={isHome ? "#hero" : "/"}
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              fontSize: 14,
              fontWeight: 700,
              color: "#fff",
              background: "var(--accent)",
              padding: "12px 0",
              textAlign: "center",
              textDecoration: "none",
              marginTop: 16,
            }}
          >
            Get Free Growth Roadmap
          </a>
        </div>
      )}
    </nav>
  );
}
