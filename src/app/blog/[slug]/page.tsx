import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getPostBySlugAction } from "@/app/actions";

export const revalidate = 60;

export default async function BlogPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlugAction(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white text-sm sm:text-base">
      <Navbar />

      {/* Header Banner */}
      <article className="flex-1">
        <header className="relative w-full py-16 sm:py-20 border-b border-[var(--surface-border)] overflow-hidden isolate">
          <div className="absolute inset-0 bg-textured-dot-grid opacity-75 mask-radial-vignette pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-[var(--muted)]">
              <Link href="/blog" className="text-[var(--accent)] hover:underline font-bold">
                &larr; All Articles
              </Link>
              <span>•</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/30 font-bold uppercase text-[10px]">
                {post.category}
              </span>
              <span>•</span>
              <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString()}</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[var(--foreground)] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-medium max-w-2xl mx-auto">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-center gap-3 pt-2 font-mono text-xs text-stone-500">
              <span>Authored by <strong className="text-[var(--foreground)]">{post.author}</strong></span>
            </div>
          </div>
        </header>

        {/* Cover Image & Article Body */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {post.coverImage && (
            <div className="relative w-full h-64 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-[var(--surface-border)]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Text Content */}
          <div className="prose prose-stone max-w-none text-base sm:text-lg leading-relaxed text-[var(--foreground)] space-y-6 font-sans">
            {post.content && (post.content.includes("<p>") || post.content.includes("<h3>") || post.content.includes("<div>")) ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              post.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="font-display font-bold text-2xl text-[var(--foreground)] pt-4">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={idx} className="font-display font-extrabold text-3xl text-[var(--foreground)] pt-6 pb-2 border-b border-stone-200">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={idx} className="text-stone-700 leading-relaxed font-normal">
                    {paragraph}
                  </p>
                );
              })
            )}
          </div>

          {/* Call to Action Box inside Article */}
          <div className="p-8 rounded-3xl bg-stone-900 text-white space-y-4 shadow-2xl border border-stone-800 text-center my-12">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#4ade80] font-bold block">
              READY TO ELEVATE YOUR DIGITAL ARCHITECTURE?
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Let&apos;s Build Your High-Converting Digital Platform.
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto leading-relaxed">
              Talk directly with senior full-stack architects at India Web Designs to scope your custom website, app, or software project.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-block px-8 py-3.5 rounded-full bg-[var(--accent)] hover:bg-[#15803d] text-white font-display font-bold text-sm tracking-wide transition-all shadow-lg cursor-pointer"
              >
                Schedule Technical Scoping Call &rarr;
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
