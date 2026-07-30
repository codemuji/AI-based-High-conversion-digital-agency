"use client";

import React, { useEffect, useState } from "react";
import { getAdminEnquiriesAction, updateEnquiryStatusAction } from "@/app/actions";
import type { Enquiry } from "@/db/schema";

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  useEffect(() => {
    loadEnquiries();
  }, []);

  async function loadEnquiries() {
    setLoading(true);
    try {
      const data = await getAdminEnquiriesAction();
      setEnquiries(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const handleStatusChange = async (id: number, newStatus: string) => {
    await updateEnquiryStatusAction(id, newStatus);
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
    );
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const filteredEnquiries = enquiries.filter((e) => {
    if (filterStatus === "all") return true;
    return e.status === filterStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
        <div>
          <span className="text-xs font-mono text-[#4ade80] font-bold uppercase tracking-wider block mb-1">
            Neon DB Integration
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
            Contact Form Enquiries ({enquiries.length})
          </h1>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-900 border border-stone-800">
          {["all", "new", "contacted", "closed"].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-colors cursor-pointer ${
                filterStatus === status
                  ? "bg-[var(--accent)] text-white"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Main Table Container */}
      <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800">
        {loading ? (
          <div className="py-12 text-center text-xs font-mono text-stone-500">Loading enquiries from Neon DB...</div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="py-12 text-center text-xs text-stone-500 font-mono">No enquiries found for status: {filterStatus}.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400 uppercase text-[10px]">
                  <th className="pb-3">ID</th>
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Phone</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Service</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60">
                {filteredEnquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-stone-800/40 transition-colors">
                    <td className="py-3.5 text-stone-400">#{enq.id}</td>
                    <td className="py-3.5 font-bold text-white">{enq.name}</td>
                    <td className="py-3.5 text-stone-300">
                      <a href={`tel:${enq.phone}`} className="hover:text-[#4ade80] underline">
                        {enq.phone}
                      </a>
                    </td>
                    <td className="py-3.5 text-stone-400">{enq.email}</td>
                    <td className="py-3.5 text-[#4ade80] font-semibold">{enq.service}</td>
                    <td className="py-3.5">
                      <select
                        value={enq.status}
                        onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                        className={`px-2 py-1 rounded text-[10px] uppercase font-bold bg-stone-950 border border-stone-800 cursor-pointer ${
                          enq.status === "new" ? "text-emerald-400 border-emerald-500/40" : "text-stone-300"
                        }`}
                      >
                        <option value="new">NEW</option>
                        <option value="contacted">CONTACTED</option>
                        <option value="closed">CLOSED</option>
                      </select>
                    </td>
                    <td className="py-3.5 text-stone-500">
                      {new Date(enq.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedEnquiry(enq)}
                        className="px-3 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        Inspect Details &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Enquiry Detail Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#4ade80] font-bold">
                  Enquiry #{selectedEnquiry.id}
                </span>
                <h3 className="font-display font-bold text-xl text-white">{selectedEnquiry.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 font-mono text-xs text-stone-300">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-950 border border-stone-800">
                <div>
                  <span className="text-[10px] text-stone-500 uppercase block">Phone / WhatsApp</span>
                  <a href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="font-bold text-[#4ade80] underline">
                    {selectedEnquiry.phone} 💬
                  </a>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 uppercase block">Email Address</span>
                  <span className="font-bold text-white">{selectedEnquiry.email}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 uppercase block">Requested Service</span>
                  <span className="font-bold text-emerald-400">{selectedEnquiry.service}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 uppercase block">Submission Date</span>
                  <span className="font-bold text-stone-300">{new Date(selectedEnquiry.createdAt).toLocaleString()}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-stone-500 uppercase block mb-1.5 font-bold">Inquiry Message Brief</span>
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 text-stone-200 whitespace-pre-wrap leading-relaxed">
                  {selectedEnquiry.message}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-stone-400">Status:</span>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) => handleStatusChange(selectedEnquiry.id, e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 font-mono text-xs text-[#4ade80] font-bold cursor-pointer"
                >
                  <option value="new">NEW</option>
                  <option value="contacted">CONTACTED</option>
                  <option value="closed">CLOSED</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
