"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAdminPostsAction, deletePostAction, savePostAction } from "@/app/actions";
import type { Post } from "@/db/schema";

export default function AdminBlogManagerPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    setLoading(true);
    try {
      const data = await getAdminPostsAction(false);
      setPosts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const handleTogglePublish = async (post: Post) => {
    const updatedStatus = !post.published;
    await savePostAction(
      {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        coverImage: post.coverImage,
        author: post.author,
        category: post.category,
        published: updatedStatus,
      },
      post.id
    );
    setPosts((prev) =>
      prev.map((p) => (p.id === post.id ? { ...p, published: updatedStatus } : p))
    );
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this blog article?")) return;
    await deletePostAction(id);
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
        <div>
          <span className="text-xs font-mono text-[#4ade80] font-bold uppercase tracking-wider block mb-1">
            Blogging &amp; Content Publishing CMS
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
            Blog Articles ({posts.length})
          </h1>
        </div>

        <Link
          href="/admin/blog/new"
          className="px-4 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[#15803d] text-white font-display text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
        >
          <span>+ Create New Article</span>
        </Link>
      </div>

      {/* Main Blog Table */}
      <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800">
        {loading ? (
          <div className="py-12 text-center text-xs font-mono text-stone-500">Loading blog articles from Neon DB...</div>
        ) : posts.length === 0 ? (
          <div className="py-12 text-center text-xs text-stone-500 font-mono space-y-3">
            <p>No blog articles published yet.</p>
            <Link
              href="/admin/blog/new"
              className="inline-block px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-xs font-mono font-bold"
            >
              + Create First Post
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400 uppercase text-[10px]">
                  <th className="pb-3">Title</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Author</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-stone-800/40 transition-colors">
                    <td className="py-3.5 max-w-sm">
                      <div className="font-bold text-white truncate">{post.title}</div>
                      <div className="text-[10px] text-stone-500 truncate">/blog/{post.slug}</div>
                    </td>
                    <td className="py-3.5 text-[#4ade80]">{post.category}</td>
                    <td className="py-3.5 text-stone-300">{post.author}</td>
                    <td className="py-3.5">
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(post)}
                        className={`px-2.5 py-1 rounded text-[10px] uppercase font-bold transition-all cursor-pointer ${
                          post.published
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30"
                            : "bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30"
                        }`}
                      >
                        {post.published ? "✓ PUBLISHED" : "DRAFT"}
                      </button>
                    </td>
                    <td className="py-3.5 text-stone-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 text-right space-x-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono text-[11px] font-bold transition-colors"
                      >
                        View 👁️
                      </Link>
                      <Link
                        href={`/admin/blog/edit/${post.id}`}
                        className="px-2.5 py-1 rounded-lg bg-blue-950 hover:bg-blue-900 border border-blue-800 text-blue-300 font-mono text-[11px] font-bold transition-colors"
                      >
                        Edit ✏️
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(post.id)}
                        className="px-2.5 py-1 rounded-lg bg-red-950 hover:bg-red-900 border border-red-800 text-red-300 font-mono text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        Delete 🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
