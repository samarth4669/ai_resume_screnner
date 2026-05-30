// UploadStatusCard.jsx
// UploadStatusCard.jsx
import React from "react";

function UploadStatusCard({ uploadCount = 0, isJdProvided = false }) {
  return (
    <div className="w-full sm:w-[220px] min-h-[60px] sm:min-h-[70px] bg-white border border-gray-200 rounded-xl p-3 shadow-xs flex flex-row sm:flex-col justify-between sm:justify-center gap-3 sm:gap-0 font-sans text-xs text-[#0a181e] select-none">

      {/* Uploads count */}
      <div className="flex items-center gap-1 font-bold sm:mb-1.5">
        <span className="tracking-tight">Current Uploads:</span>
        <span className="text-[#2e6f74] font-black text-sm">{uploadCount}</span>
      </div>

      {/* JD Status */}
      <div className="flex items-center gap-1 font-bold">
        <span className="tracking-tight">JD Status:</span>
        <span
          className={`font-black uppercase tracking-wide px-1.5 py-0.5 rounded text-[10px] ${
            isJdProvided
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-600"
          }`}
        >
          {isJdProvided ? "Ready" : "Missing"}
        </span>
      </div>

    </div>
  );
}

export default UploadStatusCard;