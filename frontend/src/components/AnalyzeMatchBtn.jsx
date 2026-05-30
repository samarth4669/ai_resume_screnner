// AnalyzeMatchBtn.jsx
// AnalyzeMatchBtn.jsx
import React from "react";

const spinnerStyles = `
  @keyframes button-spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-btn-spin {
    animation: button-spin-slow 2.5s linear infinite;
  }
`;

function AnalyzeMatchBtn({ onClick, disabled = false }) {
  return (
    <>
      <style>{spinnerStyles}</style>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="w-full sm:flex-1 min-h-[60px] sm:min-h-[70px] bg-[#2e6f74] hover:bg-[#235559] disabled:bg-[#4a7c81]/80 text-white rounded-xl shadow-md px-4 sm:px-6 py-3 flex items-center justify-center gap-3 sm:gap-4 transition-all group select-none cursor-pointer disabled:cursor-not-allowed active:scale-[0.98]"
      >
        {/* Spinner */}
        {!disabled && (
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 border-2 border-dashed border-white/40 rounded-full"></div>
            <div className="absolute inset-0 border-2 border-dashed border-white border-t-transparent border-r-transparent rounded-full animate-btn-spin"></div>
          </div>
        )}

        {/* Text */}
        <div className="text-left flex flex-col justify-center">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest leading-none mb-1">
            3. Analyze & Match
          </span>
          <span className="text-[10px] text-white/70 font-bold tracking-wide">
            {disabled ? "Upload resumes and provide JD" : "Ready for AI analysis"}
          </span>
        </div>
      </button>
    </>
  );
}

export default AnalyzeMatchBtn;