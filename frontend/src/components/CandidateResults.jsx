// CandidateResults.jsx

import React, { useMemo, useState } from "react";
import {
  Search,
  Download,
  Eye,
  Trophy,
  TriangleAlert,
  CheckCircle2,
  ArrowUpDown,
  FileText,
} from "lucide-react";

const CandidateResults = ({ candidates = [] }) => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [previewResume, setPreviewResume] = useState(null);

  // ─────────────────────────────────────────────
  // FILTER + SORT
  // ─────────────────────────────────────────────
  const processedCandidates = useMemo(() => {
    let filtered = [...candidates];

    // Search
    filtered = filtered.filter((candidate) =>
      candidate.name.toLowerCase().includes(search.toLowerCase())
    );

    // Sort
    filtered.sort((a, b) =>
      sortOrder === "desc"
        ? b.matchScore - a.matchScore
        : a.matchScore - b.matchScore
    );

    // Rank
    return filtered.map((candidate, index) => ({
      ...candidate,
      rank: index + 1,
    }));
  }, [candidates, search, sortOrder]);

  // ─────────────────────────────────────────────
  // EXPORT CSV
  // ─────────────────────────────────────────────
  const exportCSV = () => {
    const headers = [
      "Rank",
      "Candidate Name",
      "Match Score",
      "Matching Skills",
      "Missing Skills",
    ];

    const rows = processedCandidates.map((candidate) => [
      candidate.rank,
      candidate.name,
      `${candidate.matchScore}%`,
      candidate.matchingSkills.join(", "),
      candidate.missingSkills.join(", "),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "candidate_results.csv";

    link.click();
  };

  // ─────────────────────────────────────────────
  // SCORE COLORS
  // ─────────────────────────────────────────────
  const getScoreColor = (score) => {
    if (score >= 85) return "bg-emerald-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <>
      {/* ───────────────────────────────────── */}
      {/* RESUME PREVIEW MODAL */}
      {/* ───────────────────────────────────── */}

      {previewResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a2e35]/40 backdrop-blur-sm px-4"
          onClick={() => setPreviewResume(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#c5dde6] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent */}
            <div className="h-1 bg-gradient-to-r from-[#2e7d82] via-[#7ecdd1] to-[#2e7d82]" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#c5dde6] bg-[#e4eff2]/40">
              <div className="flex items-center gap-3">
                <div className="bg-[#e4eff2] border border-[#c5dde6] p-2 rounded-xl">
                  <FileText className="h-4 w-4 text-[#2e7d82]" />
                </div>

                <div>
                  <h2 className="text-[#1a2e35] font-black text-sm uppercase tracking-wider">
                    Resume Preview
                  </h2>

                  <p className="text-[#2e7d82] text-xs font-semibold mt-1">
                    {previewResume.name}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setPreviewResume(null)}
                className="px-4 py-2 rounded-xl bg-[#2e7d82] hover:bg-[#245f63] text-white text-sm font-bold transition-all"
              >
                Close
              </button>
            </div>

            {/* Resume Content */}
            <div className="p-6 bg-white max-h-[70vh] overflow-y-auto">
              <div className="bg-[#e4eff2] border border-[#c5dde6] rounded-2xl p-5 whitespace-pre-line text-sm leading-relaxed text-[#1a2e35]/80">
                {previewResume.resumeText}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ───────────────────────────────────── */}
      {/* MAIN RESULTS CARD */}
      {/* ───────────────────────────────────── */}

      <div className="bg-[#e4eff2] px-8 py-5">
        <div className="bg-white border border-[#c5dde6] rounded-2xl shadow-sm overflow-hidden">

          {/* Top Accent */}
          <div className="h-1 bg-gradient-to-r from-[#2e7d82] via-[#7ecdd1] to-[#2e7d82]" />

          {/* HEADER */}
          <div className="flex flex-wrap items-center gap-4 px-8 py-5 border-b border-[#c5dde6] bg-[#e4eff2]/40">

            {/* Title */}
            <div>
              <h2 className="text-[#1a2e35] font-black text-sm uppercase tracking-[0.2em]">
                Candidate Analysis Results
              </h2>

              <p className="text-[#1a2e35]/50 text-[11px] font-semibold uppercase tracking-widest mt-1">
                Ranked AI Screening Results
              </p>
            </div>

            {/* Right Controls */}
            <div className="ml-auto flex items-center gap-3 flex-wrap">

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-[#2e7d82]" />

                <input
                  type="text"
                  placeholder="Search candidates..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2.5 rounded-xl border border-[#c5dde6] bg-white text-sm outline-none focus:border-[#2e7d82] w-64"
                />
              </div>

              {/* Sort */}
              <button
                onClick={() =>
                  setSortOrder(sortOrder === "desc" ? "asc" : "desc")
                }
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#c5dde6] bg-white hover:border-[#2e7d82] transition-all text-sm font-semibold text-[#1a2e35]"
              >
                <ArrowUpDown className="h-4 w-4 text-[#2e7d82]" />

                {sortOrder === "desc"
                  ? "Highest Score"
                  : "Lowest Score"}
              </button>

              {/* Export */}
              <button
                onClick={exportCSV}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2e7d82] hover:bg-[#245f63] text-white text-sm font-bold transition-all"
              >
                <Download className="h-4 w-4" />
                Export CSV
              </button>
            </div>
          </div>

          {/* TABLE HEADER */}
          <div className="grid grid-cols-[80px_220px_140px_200px_1fr_1fr] gap-4 px-8 py-3 border-b border-[#c5dde6] bg-[#e4eff2]/20">

            {[
              "Rank",
              "Candidate",
              "Resume",
              "Match Score",
              "Key Matching Skills",
              "Missing Skills",
            ].map((item) => (
              <span
                key={item}
                className="text-[10px] font-black text-[#1a2e35]/40 uppercase tracking-widest"
              >
                {item}
              </span>
            ))}
          </div>

          {/* TABLE BODY */}
          <div className="divide-y divide-[#c5dde6]/50 max-h-[650px] overflow-y-auto custom-scrollbar">

            {processedCandidates.length === 0 ? (
              <div className="text-center py-16 text-xs font-bold text-gray-400 tracking-wider uppercase">
                No candidate analysis results found.
              </div>
            ) : (
              processedCandidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="grid grid-cols-[80px_220px_140px_200px_1fr_1fr] gap-4 px-8 py-5 items-start hover:bg-[#e4eff2]/30 transition-all"
                >

                  {/* RANK */}
                  <div className="flex flex-col items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#e4eff2] border border-[#c5dde6] flex items-center justify-center">
                      <Trophy className="h-4 w-4 text-[#2e7d82]" />
                    </div>

                    <span className="mt-2 text-sm font-black text-[#1a2e35]">
                      #{candidate.rank}
                    </span>
                  </div>

                  {/* CANDIDATE */}
                  <div>
                    <p className="text-sm font-bold text-[#1a2e35]">
                      {candidate.name}
                    </p>

                    <p className="text-xs text-[#1a2e35]/50 mt-1">
                      {candidate.email}
                    </p>
                  </div>

                  {/* RESUME PREVIEW */}
                  <div>
                    <button
                      onClick={() => setPreviewResume(candidate)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#c5dde6] bg-[#e4eff2] hover:border-[#2e7d82] text-[#2e7d82] transition-all text-sm font-semibold"
                    >
                      <Eye className="h-4 w-4" />
                      Preview
                    </button>
                  </div>

                  {/* SCORE */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#1a2e35]/50 uppercase tracking-wider">
                        AI Match
                      </span>

                      <span className="text-sm font-black text-[#1a2e35]">
                        {candidate.matchScore}%
                      </span>
                    </div>

                    <div className="w-full h-3 bg-[#e4eff2] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${getScoreColor(
                          candidate.matchScore
                        )}`}
                        style={{
                          width: `${candidate.matchScore}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* MATCHING SKILLS */}
                  <div className="flex flex-wrap gap-2">
                    {candidate.matchingSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold"
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* MISSING SKILLS */}
                  <div className="flex flex-wrap gap-2">
                    {candidate.missingSkills.length === 0 ? (
                      <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
                        No Missing Skills
                      </span>
                    ) : (
                      candidate.missingSkills.map((skill, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold"
                        >
                          <TriangleAlert className="h-3 w-3" />
                          {skill}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Accent */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#2e7d82]/20 to-transparent" />
        </div>
      </div>
    </>
  );
};

export default CandidateResults;