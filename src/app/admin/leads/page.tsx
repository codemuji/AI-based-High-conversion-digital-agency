"use client";

import React, { useEffect, useState } from "react";
import { getAdminLeadsAction } from "@/app/actions";
import type { Lead } from "@/db/schema";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    async function loadLeads() {
      setLoading(true);
      try {
        const data = await getAdminLeadsAction();
        setLeads(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadLeads();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
        <div>
          <span className="text-xs font-mono text-[#4ade80] font-bold uppercase tracking-wider block mb-1">
            4-Question Interactive Scoping Engine
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
            Onboarding Intake Leads ({leads.length})
          </h1>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800">
        {loading ? (
          <div className="py-12 text-center text-xs font-mono text-stone-500">Loading leads from Neon DB...</div>
        ) : leads.length === 0 ? (
          <div className="py-12 text-center text-xs text-stone-500 font-mono">No scoping leads recorded yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400 uppercase text-[10px]">
                  <th className="pb-3">ID</th>
                  <th className="pb-3">Contact Name</th>
                  <th className="pb-3">Phone</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Initial Goal Query</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-stone-800/40 transition-colors">
                    <td className="py-3.5 text-stone-400">#{lead.id}</td>
                    <td className="py-3.5 font-bold text-white">{lead.contactName}</td>
                    <td className="py-3.5 text-stone-300">
                      {lead.contactPhone ? (
                        <a href={`tel:${lead.contactPhone}`} className="hover:text-[#4ade80] underline">
                          {lead.contactPhone}
                        </a>
                      ) : (
                        <span className="text-stone-500">N/A</span>
                      )}
                    </td>
                    <td className="py-3.5 text-[#4ade80] font-semibold">{lead.category}</td>
                    <td className="py-3.5 text-stone-300 max-w-xs truncate">{lead.initialQuery}</td>
                    <td className="py-3.5 text-stone-500">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedLead(lead)}
                        className="px-3 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        Inspect QA &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Lead Breakdown Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#4ade80] font-bold">
                  Lead #{selectedLead.id} // {selectedLead.category}
                </span>
                <h3 className="font-display font-bold text-xl text-white">{selectedLead.contactName}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 font-mono text-xs text-stone-300">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-950 border border-stone-800">
                <div>
                  <span className="text-[10px] text-stone-500 uppercase block">Phone / WhatsApp</span>
                  <span className="font-bold text-[#4ade80]">{selectedLead.contactPhone || "Not provided"}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 uppercase block">Email</span>
                  <span className="font-bold text-white">{selectedLead.contactEmail || "Not provided"}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] text-stone-500 uppercase block">Initial Query</span>
                  <span className="font-bold text-stone-200">{selectedLead.initialQuery}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-stone-500 uppercase block mb-1.5 font-bold">Questionnaire Answers Breakdown</span>
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 text-stone-200 space-y-2">
                  <pre className="text-xs text-[#4ade80] whitespace-pre-wrap font-mono">
                    {JSON.stringify(selectedLead.answers, null, 2)}
                  </pre>
                </div>
              </div>

              {Boolean(selectedLead.aiProfile) && (
                <div>
                  <span className="text-[10px] text-stone-500 uppercase block mb-1.5 font-bold">AI Architectural Triage Profile</span>
                  <div className="p-4 rounded-2xl bg-stone-950 border border-emerald-500/30 text-emerald-300 space-y-2">
                    <pre className="text-xs whitespace-pre-wrap font-mono">
                      {JSON.stringify(selectedLead.aiProfile, null, 2)}
                    </pre>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
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
