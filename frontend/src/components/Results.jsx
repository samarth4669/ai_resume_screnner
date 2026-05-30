// Results.jsx
import React from "react";
import { FaUserCircle, FaAddressCard, FaChartBar, FaHome, FaColumns } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Results({ candidates }) {
  const navigate = useNavigate();

  const topCandidates = [...candidates]
    .sort((a, b) => b.final_score - a.final_score)
    .slice(0, 3);

  return (
    <div className="w-full max-w-[1140px] mx-auto p-3 sm:p-4 font-sans select-none">

      {/* Main Container */}
      <div className="bg-[#f0f7f8] border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 shadow-xs flex flex-col">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 border-b border-gray-200 pb-4 mb-5 sm:mb-6">
          <h2 className="text-base sm:text-lg font-black text-[#0a181e] tracking-tight uppercase">
            Top 3 Candidate Summary
          </h2>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            Total Match Score
          </span>
        </div>

        {/* Candidate Rows */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
          {topCandidates.map((candidate) => (
            <div
              key={candidate.candidate_id}
              className="bg-white border border-gray-100 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 shadow-2xs hover:shadow-xs transition-all duration-200"
            >
              {/* Identity Info */}
              <div className="flex items-center gap-3 sm:gap-6 flex-1 w-full sm:min-w-[280px]">
                {/* Avatar */}
                <div className="shrink-0 bg-[#3e767b] text-white p-3 sm:p-3.5 rounded-xl shadow-inner flex items-center justify-center gap-1.5 sm:gap-2 w-16 sm:w-20 h-10 sm:h-12">
                  <FaAddressCard className="text-xs sm:text-sm opacity-80" />
                  <FaUserCircle className="text-sm sm:text-base" />
                </div>

                {/* ID */}
                <div className="text-sm sm:text-base font-black text-[#1a2e35] font-mono tracking-tight w-14 sm:w-20 shrink-0">
                  {candidate.candidate_id}
                </div>

                {/* Name */}
                <div className="text-sm sm:text-base font-extrabold text-[#0a181e] tracking-wide flex-1 truncate">
                  {candidate.candidate_name}
                </div>
              </div>

              {/* Score Ring — right-aligned on mobile too */}
              <div className="flex items-center justify-end w-full sm:w-auto sm:flex-1">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" stroke="#e4eff2" strokeWidth="3.5" fill="transparent" />
                    <circle
                      cx="18" cy="18" r="16"
                      stroke="#3e767b" strokeWidth="3.5"
                      strokeDasharray={`${candidate.final_score}, 100`}
                      strokeLinecap="round" fill="transparent"
                    />
                  </svg>
                  <span className="absolute text-[10px] sm:text-xs font-black text-[#0a181e] font-mono">
                    {candidate.final_score}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 border-t border-gray-200 pt-5 sm:pt-6">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#2e6f74] hover:bg-[#235559] active:scale-[0.98] text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <FaColumns className="text-sm opacity-90" />
            Go To Dashboard
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white hover:bg-gray-50 active:scale-[0.98] text-[#3e767b] border-2 border-[#3e767b] rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
          >
            <FaHome className="text-sm opacity-90" />
            Return Home
          </button>
        </div>

      </div>
    </div>
  );
}

export default Results;