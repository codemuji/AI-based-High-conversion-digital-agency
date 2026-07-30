"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAdminEnquiriesAction, getAdminLeadsAction, getAdminPostsAction } from "@/app/actions";
import type { Enquiry, Lead, Post } from "@/db/schema";

export default function AdminDashboardPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [enqData, leadData, postData] = await Promise.all([
          getAdminEnquiriesAction(),
          getAdminLeadsAction(),
          getAdminPostsAction(),
        ]);
        setEnquiries(enqData);
        setLeads(leadData);
        setPosts(postData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const newEnquiriesCount = enquiries.filter((e) => e.status === "new").length;
  const publishedPostsCount = posts.filter((p) => p.published).length;

  return (
    <div className="space-y-8">
      {/* Top Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
        <div>
          <span className="text-xs font-mono text-[#4ade80] font-bold uppercase tracking-wider block mb-1">
            System Status: Connected to Neon DB
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
            Admin Overview &amp; Control Panel
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog/new"
            className="px-4 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[#15803d] text-white font-display text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <span>+ Write New Blog Post</span>
          </Link>
        </div>
      </div>

      {/* Analytics Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-stone-400">Total Contact Enquiries</span>
            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm">✉️</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display font-black text-3xl text-white">{enquiries.length}</span>
            {newEnquiriesCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                {newEnquiriesCount} New
              </span>
            )}
          </div>
          <Link href="/admin/enquiries" className="text-xs text-[#4ade80] font-mono hover:underline block pt-1">
            Manage Enquiries &rarr;
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-stone-400">Onboarding Intake Leads</span>
            <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-sm">⚡</span>
          </div>
          <div className="font-display font-black text-3xl text-white">{leads.length}</div>
          <Link href="/admin/leads" className="text-xs text-[#4ade80] font-mono hover:underline block pt-1">
            View Scoping Leads &rarr;
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-stone-400">Published Blog Articles</span>
            <span className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-sm">📝</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display font-black text-3xl text-white">{publishedPostsCount}</span>
            <span className="text-xs text-stone-500">/ {posts.length} total</span>
          </div>
          <Link href="/admin/blog" className="text-xs text-[#4ade80] font-mono hover:underline block pt-1">
            Manage Blog CMS &rarr;
          </Link>
        </div>
      </div>

      {/* Recent Contact Enquiries Quick Table */}
      <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
        <div className="flex items-center justify-between border-b border-stone-800 pb-3">
          <h2 className="font-display font-bold text-lg text-white">Recent Contact Form Inquiries</h2>
          <Link href="/admin/enquiries" className="text-xs font-mono text-[#4ade80] hover:underline">
            View All &rarr;
          </Link>
        </div>

        {loading ? (
          <div className="py-8 text-center text-xs font-mono text-stone-500">Loading DB records...</div>
        ) : enquiries.length === 0 ? (
          <div className="py-8 text-center text-xs text-stone-500 font-mono">No contact enquiries received yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400 uppercase text-[10px]">
                  <th className="pb-2">ID</th>
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Phone</th>
                  <th className="pb-2">Service</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60">
                {enquiries.slice(0, 5).map((enq) => (
                  <tr key={enq.id} className="hover:bg-stone-800/40 transition-colors">
                    <td className="py-3 text-stone-400">#{enq.id}</td>
                    <td className="py-3 font-bold text-white">{enq.name}</td>
                    <td className="py-3 text-stone-300">{enq.phone}</td>
                    <td className="py-3 text-[#4ade80]">{enq.service}</td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                        enq.status === "new" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-stone-800 text-stone-400"
                      }`}>
                        {enq.status}
                      </span>
                    </td>
                    <td className="py-3 text-right text-stone-500">
                      {new Date(enq.createdAt).toLocaleDateString()}
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
