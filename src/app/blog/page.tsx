import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getAdminPostsAction } from "@/app/actions";
import type { Post } from "@/db/schema";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function PublicBlogIndexPage() {
  const posts: Post[] = await getAdminPostsAction(true);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white text-sm sm:text-base">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[var(--surface-border)] overflow-hidden isolate">
        <div className="absolute inset-0 bg-textured-dot-grid opacity-75 mask-radial-vignette pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
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
              Expert articles on custom Next.js web application architecture, WhatsApp 24/7 automation, local SEO tactics, and scaling online sales in India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Cards Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        {posts.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <p className="text-base font-mono text-[var(--muted)]">No blog articles published yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)]/60 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Cover Image */}
                  <div className="relative w-full h-48 sm:h-56 bg-stone-100 overflow-hidden">
                    <Image
                      src={post.coverImage || "/images/static_website.png"}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
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
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
                      {post.excerpt}
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
      </section>

      <Footer />
    </main>
  );
}
