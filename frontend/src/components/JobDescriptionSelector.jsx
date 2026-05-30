// src/components/JobDescriptionSelector.jsx
import React, { useState } from "react";
import { Eye, X, FileText, AlignLeft } from "lucide-react";

const JDIconAsset = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M17 17H7V15H17V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z" fill="#2e7d82" />
    <path fillRule="evenodd" clipRule="evenodd"
      d="M3 21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V21ZM5 5H19V21H5V5Z"
      fill="#2e7d82" />
  </svg>
);

// ── JD Preview Modal ──────────────────────────────────────────
const JDPreviewModal = ({ jd, onClose }) => {
  if (!jd) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a2e35]/40 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#c5dde6] overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="h-1 bg-gradient-to-r from-[#2e7d82] via-[#7ecdd1] to-[#2e7d82]" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#c5dde6] bg-[#e4eff2]/50">
          <div className="flex items-center gap-3 min-w-0">
            <div className="bg-[#e4eff2] border border-[#c5dde6] p-2 rounded-xl shrink-0">
              <AlignLeft className="w-4 h-4 text-[#2e7d82]" />
            </div>
            <div className="min-w-0">
              <p className="text-[#1a2e35] font-black text-sm uppercase tracking-wide truncate">
                {jd.title}
              </p>
              <p className="text-[#2e7d82] text-[10px] font-semibold uppercase tracking-widest mt-0.5">
                Job Description Details
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-[#e4eff2] hover:bg-[#d4e6eb] border border-[#c5dde6] p-2 rounded-xl transition-all shrink-0"
          >
            <X className="w-4 h-4 text-[#1a2e35]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-5 bg-white">
          <div className="bg-[#e4eff2] border border-[#c5dde6] rounded-xl p-4 max-h-[60vh] overflow-y-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[#2e7d82] text-[10px] font-black uppercase tracking-widest">
                Raw JD Text Content
              </span>
            </div>
            <p className="text-[#1a2e35]/80 text-sm leading-relaxed whitespace-pre-line">
              {jd.jd_text || "No description text content available for this record."}
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2e7d82]/20 to-transparent" />
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────
const JobDescriptionSelector = ({ jobDescriptions = [],setSelectedId,selectedId, onSelect }) => {
  const [previewJd, setPreviewJd] = useState(null);

  // Sync state to automatically select the first entry when live data resolves
  React.useEffect(() => {
    if (jobDescriptions.length > 0 && !selectedId) {
      setSelectedId(jobDescriptions[0].id);
      if (onSelect) onSelect(jobDescriptions[0]);
    }
  }, [jobDescriptions, selectedId, onSelect]);

  const handleSelect = (jd) => {
    setSelectedId(jd.id);
    if (onSelect) onSelect(jd);
  };

  return (
    <>
      <JDPreviewModal jd={previewJd} onClose={() => setPreviewJd(null)} />

      <div className="bg-[#e4eff2] px-8 py-4">
        <div className="bg-white border border-[#c5dde6] rounded-2xl shadow-sm overflow-hidden">
          
          {/* Top accent line */}
          <div className="h-1 bg-gradient-to-r from-[#2e7d82] via-[#7ecdd1] to-[#2e7d82]" />

          {/* Card Header */}
          <div className="flex items-center gap-4 px-8 py-5 border-b border-[#c5dde6] bg-[#e4eff2]/40">
            <div className="bg-[#e4eff2] border border-[#c5dde6] p-2.5 rounded-xl">
              <JDIconAsset />
            </div>
            <h2 className="text-[#1a2e35] font-black text-sm uppercase tracking-[0.2em]">
              Job Description Selector
            </h2>
            <div className="ml-auto flex items-center gap-2 bg-[#e4eff2] border border-[#c5dde6] rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[#2e7d82] text-[11px] font-semibold tracking-wider uppercase">
                {jobDescriptions.length} Available JDs
              </span>
            </div>
          </div>

          {/* Dynamic Table Column Headings */}
          <div className="grid grid-cols-[60px_80px_1fr_100px] px-8 py-3 border-b border-[#c5dde6] bg-[#e4eff2]/20">
            {["Select", "JD ID", "Job Specification Title", "Action"].map((h, i) => (
              <span 
                key={h} 
                className={`text-[10px] font-black text-[#1a2e35]/40 uppercase tracking-widest ${
                  i === 3 ? "text-center" : ""
                }`}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Rows Data Body View */}
          <div className="divide-y divide-[#c5dde6]/50 px-4 pb-4 max-h-[450px] overflow-y-auto custom-scrollbar">
            {jobDescriptions.length === 0 ? (
              <div className="text-center py-12 text-xs font-bold text-gray-400 tracking-wider uppercase">
                No job descriptions found in pipeline database connection.
              </div>
            ) : (
              jobDescriptions.map((jd) => {
                const isSelected = selectedId === jd.id;
                return (
                  <div
                    key={jd.id}
                    onClick={() => handleSelect(jd)}
                    className={`grid grid-cols-[60px_80px_1fr_100px] items-center px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-150 mt-1
                      ${isSelected
                        ? "bg-[#e4eff2] border border-[#c5dde6] shadow-2xs"
                        : "hover:bg-[#e4eff2]/30 border border-transparent"
                      }`}
                  >
                    {/* Custom Styled Radio Node Anchor */}
                    <div className="relative flex items-center justify-center justify-self-start pl-2">
                      {isSelected && (
                        <div className="absolute left-0 w-1 h-6 bg-[#2e7d82] rounded-full" />
                      )}
                      <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center transition-all duration-150
                        ${isSelected ? "border-[#2e7d82] bg-white" : "border-gray-300 bg-white"}`}>
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-[#2e7d82]" />
                        )}
                      </div>
                    </div>

                    {/* Backend Database Key ID */}
                    <span className={`text-xs font-black font-mono ${isSelected ? "text-[#2e7d82]" : "text-[#1a2e35]/40"}`}>
                      #{String(jd.id).padStart(3, '0')}
                    </span>

                    {/* Core Title Description Header string text */}
                    <span className={`text-sm font-semibold pr-4 truncate ${isSelected ? "text-[#1a2e35] font-bold" : "text-[#1a2e35]/70"}`}>
                      {jd.title || "Untitled Role Specification"}
                    </span>

                    {/* Interactive Modal Action View Trigger */}
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setPreviewJd(jd); 
                        }}
                        className={`p-2 rounded-xl border transition-all duration-150 shadow-3xs cursor-pointer
                          ${isSelected
                            ? "bg-[#2e7d82] border-[#2e7d82] hover:bg-[#245f63] text-white"
                            : "bg-[#e4eff2] border-[#c5dde6] hover:border-[#2e7d82] text-[#2e7d82]"
                          }`}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom styling element gradient dropoff layout */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#2e7d82]/20 to-transparent" />
        </div>
      </div>
    </>
  );
};

export default JobDescriptionSelector;