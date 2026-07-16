import React from "react";

export function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--surface-border)] py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-3 h-3 rounded-full bg-[var(--accent)]" />
            <span className="font-display font-bold text-lg text-[var(--foreground)] tracking-tight">
              India Web Designs
            </span>
          </div>
          <p className="text-xs text-[var(--muted)] mt-1">
            Helping Indian Businesses Grow &amp; Scale Online &bull; Powered by Codemuji Digital Services
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[var(--muted)]">
          <a href="#hero" className="hover:text-[var(--foreground)] transition-colors">
            Get Growth Roadmap
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
            WhatsApp Support
          </a>
          <span>·</span>
          <span>&copy; {new Date().getFullYear()} India Web Designs. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
