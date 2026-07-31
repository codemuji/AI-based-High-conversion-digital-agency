import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getAdminPostsAction } from "@/app/actions";
import type { Post } from "@/db/schema";

export const revalidate = 60; // Revalidate every 60 seconds

const POSTS_PER_PAGE = 12;

export default async function PublicBlogIndexPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; q?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const query = (params.q || "").trim().toLowerCase();
  const rawPage = parseInt(params.page || "1", 10);

  const allPosts: Post[] = await getAdminPostsAction(true);

  // Filter posts if search query present
  const filteredPosts = query
    ? allPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          (p.category && p.category.toLowerCase().includes(query))
      )
    : allPosts;

  const totalPosts = filteredPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, isNaN(rawPage) ? 1 : rawPage), totalPages);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Generate pagination page numbers window
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 2;
    const range: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    let l: number | null = null;
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          pages.push(l + 1);
        } else if (i - l !== 1) {
          pages.push("...");
        }
      }
      pages.push(i);
      l = i;
    }
    return pages;
  };

  const createPageUrl = (page: number, q?: string) => {
    const urlParams = new URLSearchParams();
    if (page > 1) urlParams.set("page", page.toString());
    if (q) urlParams.set("q", q);
    const queryString = urlParams.toString();
    return `/blog${queryString ? `?${queryString}` : ""}`;
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white text-sm sm:text-base">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[var(--surface-border)] overflow-hidden isolate">
        <div className="absolute inset-0 bg-textured-dot-grid opacity-75 mask-radial-vignette pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-stone-200/90 shadow-2xs text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] mx-auto">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>INSIGHTS &amp; ARCHITECTURE JOURNAL</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[var(--foreground)] tracking-tight leading-[1.05]">
            Digital Growth, SEO &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
              Engineering Insights.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
            Explore {allPosts.length} articles on web application architecture, WhatsApp automation, local SEO tactics, and scaling online sales in India.
          </p>

          {/* Search bar form */}
          <form method="GET" action="/blog" className="max-w-md mx-auto pt-2 flex items-center gap-2">
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search articles by keyword or title..."
              className="flex-1 px-4 py-2.5 rounded-full bg-white border border-stone-300 text-sm focus:outline-none focus:border-[var(--accent)] shadow-xs"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-stone-900 text-white font-mono text-xs font-bold hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
            >
              Search
            </button>
            {query && (
              <Link
                href="/blog"
                className="px-3 py-2.5 text-xs text-[var(--muted)] hover:text-stone-900 font-mono"
              >
                Clear
              </Link>
            )}
          </form>
        </div>
      </section>

      {/* Main Blog Cards Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 space-y-10">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-200/60 pb-4 font-mono text-xs text-[var(--muted)]">
          <div>
            Showing <strong className="text-[var(--foreground)]">{totalPosts === 0 ? 0 : startIndex + 1}</strong>–
            <strong className="text-[var(--foreground)]">{Math.min(startIndex + POSTS_PER_PAGE, totalPosts)}</strong> of{" "}
            <strong className="text-[var(--foreground)]">{totalPosts}</strong> articles
            {query && (
              <span>
                {" "}
                matching &ldquo;<strong className="text-[var(--accent)]">{query}</strong>&rdquo;
              </span>
            )}
          </div>
          <div>
            Page <strong className="text-[var(--foreground)]">{currentPage}</strong> of{" "}
            <strong className="text-[var(--foreground)]">{totalPages}</strong>
          </div>
        </div>

        {paginatedPosts.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <p className="text-base font-mono text-[var(--muted)]">
              No blog articles found{query ? ` matching "${query}"` : ""}.
            </p>
            {query && (
              <Link
                href="/blog"
                className="inline-block px-4 py-2 rounded-full bg-[var(--accent)] text-white text-xs font-bold"
              >
                View All Articles
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)]/60 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Professional Placeholder Header */}
                  <div className="relative w-full h-48 sm:h-52 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 p-6 flex flex-col justify-between overflow-hidden group-hover:from-stone-900 group-hover:via-emerald-950/40 group-hover:to-stone-900 transition-colors duration-500 border-b border-stone-800/50">
                    {/* Decorative Grid & Accent Glow */}
                    <div className="absolute inset-0 bg-textured-dot-grid opacity-20 pointer-events-none" />
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[var(--accent)]/10 blur-2xl group-hover:bg-[var(--accent)]/20 transition-all duration-500 pointer-events-none" />

                    {/* Top Row: Category Badge & Journal Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                        {post.category || "Web Design"}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-stone-800/80 border border-stone-700/80 flex items-center justify-center text-stone-400 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors shadow-2xs">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                        </svg>
                      </span>
                    </div>

                    {/* Bottom Row: Brand SLA Label */}
                    <div className="relative z-10">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-bold block">
                        INDIA WEB DESIGNS • JOURNAL
                      </span>
                    </div>
                  </div>

                  {/* Article Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--muted)]">
                      <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>

                    <h2 className="font-display font-extrabold text-xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
                      {(post.excerpt || "").replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ")}
                    </p>
                  </div>
                </div>

                {/* Read Button */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    <span>Read Full Article &rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-8 font-mono text-xs">
            {/* Previous Page Link */}
            {currentPage > 1 ? (
              <Link
                href={createPageUrl(currentPage - 1, query)}
                className="px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-100 font-bold transition-colors"
              >
                &larr; Prev
              </Link>
            ) : (
              <span className="px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-300 font-bold cursor-not-allowed">
                &larr; Prev
              </span>
            )}

            {/* Page Number Buttons */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((p, idx) => {
                if (typeof p === "string") {
                  return (
                    <span key={idx} className="px-2 py-1 text-stone-400">
                      ...
                    </span>
                  );
                }
                const isCurrent = p === currentPage;
                return isCurrent ? (
                  <span
                    key={p}
                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-stone-900 text-white font-bold shadow-xs"
                  >
                    {p}
                  </span>
                ) : (
                  <Link
                    key={p}
                    href={createPageUrl(p, query)}
                    className="w-9 h-9 flex items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-700 hover:bg-stone-100 font-bold transition-colors"
                  >
                    {p}
                  </Link>
                );
              })}
            </div>

            {/* Next Page Link */}
            {currentPage < totalPages ? (
              <Link
                href={createPageUrl(currentPage + 1, query)}
                className="px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-700 hover:bg-stone-100 font-bold transition-colors"
              >
                Next &rarr;
              </Link>
            ) : (
              <span className="px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-300 font-bold cursor-not-allowed">
                Next &rarr;
              </span>
            )}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

