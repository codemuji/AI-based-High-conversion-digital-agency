"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { savePostAction } from "@/app/actions";

export default function CreateBlogPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Web Design");
  const [author, setAuthor] = useState("India Web Designs Team");
  const [coverImage, setCoverImage] = useState("/images/static_website.png");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slug || slug === title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "")
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!title.trim() || !slug.trim() || !excerpt.trim() || !content.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await savePostAction({
        title: title.trim(),
        slug: slug.trim(),
        category,
        author: author.trim() || "India Web Designs Team",
        coverImage: coverImage.trim() || null,
        excerpt: excerpt.trim(),
        content: content.trim(),
        published,
      });

      if (res.success) {
        router.push("/admin/blog");
      } else {
        setError(res.error || "Failed to save blog post.");
      }
    } catch (err) {
      console.error(err);
      setError("Internal error saving post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between border-b border-stone-800 pb-4">
        <div>
          <span className="text-xs font-mono text-[#4ade80] font-bold uppercase tracking-wider block mb-1">
            Blog Content Editor
          </span>
          <h1 className="font-display font-black text-2xl text-white">
            Create New Blog Article
          </h1>
        </div>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono text-xs font-bold transition-colors cursor-pointer"
        >
          &larr; Cancel &amp; Back
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 space-y-5">
        {error && (
          <div className="p-3 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs font-mono">
            ⚠️ {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-xs uppercase text-stone-300 mb-1.5 font-bold">
              Article Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="e.g. 5 Reasons Next.js Outperforms WordPress in 2026"
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white font-display text-sm focus:outline-none focus:border-[#4ade80] transition-colors"
            />
          </div>

          <div>
            <label className="block font-mono text-xs uppercase text-stone-300 mb-1.5 font-bold">
              URL Slug <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="e.g. 5-reasons-nextjs-outperforms-wordpress"
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 font-mono text-xs focus:outline-none focus:border-[#4ade80] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block font-mono text-xs uppercase text-stone-300 mb-1.5 font-bold">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white font-mono text-xs focus:outline-none focus:border-[#4ade80] transition-colors cursor-pointer"
            >
              <option value="Web Design">Web Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Mobile Apps">Mobile Apps</option>
              <option value="Web Portals">Web Portals</option>
              <option value="Softwares">Softwares</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
          </div>

          <div>
            <label className="block font-mono text-xs uppercase text-stone-300 mb-1.5 font-bold">
              Author
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="India Web Designs Team"
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white font-mono text-xs focus:outline-none focus:border-[#4ade80] transition-colors"
            />
          </div>

          <div>
            <label className="block font-mono text-xs uppercase text-stone-300 mb-1.5 font-bold">
              Cover Image Path
            </label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="/images/static_website.png"
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 font-mono text-xs focus:outline-none focus:border-[#4ade80] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block font-mono text-xs uppercase text-stone-300 mb-1.5 font-bold">
            Short Summary / Excerpt <span className="text-red-500">*</span>
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="A compelling 1-2 sentence overview for Google snippets and blog listing cards..."
            rows={2}
            required
            className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white font-display text-xs focus:outline-none focus:border-[#4ade80] transition-colors"
          />
        </div>

        <div>
          <label className="block font-mono text-xs uppercase text-stone-300 mb-1.5 font-bold">
            Full Markdown / Article Content <span className="text-red-500">*</span>
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write full article in Markdown format (use ## Headings, **bold**, lists, etc.)..."
            rows={12}
            required
            className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white font-mono text-xs focus:outline-none focus:border-[#4ade80] transition-colors"
          />
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-stone-800">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-4 h-4 rounded bg-stone-950 border-stone-800 text-[#4ade80] focus:ring-0 cursor-pointer"
            />
            <span className="font-mono text-xs font-bold text-white">Publish Immediately to Live Site</span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 rounded-xl bg-[var(--accent)] hover:bg-[#15803d] disabled:opacity-50 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            {isSubmitting ? "Publishing Article..." : "Save & Publish Article 🚀"}
          </button>
        </div>
      </form>
    </div>
  );
}
