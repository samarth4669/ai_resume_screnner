import React from "react";
import { FileSearch } from "lucide-react";

const AnalyzeButton = ({ analyzeclick }) => {
  return (
    <div className="bg-[#e4eff2] px-8 py-4">
      <div className="bg-white border border-[#c5dde6] rounded-2xl shadow-sm overflow-hidden">

        {/* Top accent */}
        <div className="h-1 bg-gradient-to-r from-[#2e7d82] via-[#7ecdd1] to-[#2e7d82]" />

        <div className="flex items-center justify-between px-8 py-5">

          {/* Left: Label */}
          <div className="flex items-center gap-3">
            <div className="bg-[#e4eff2] border border-[#c5dde6] p-2.5 rounded-xl">
              <FileSearch className="w-5 h-5 text-[#2e7d82]" />
            </div>
            <div>
              <p className="text-[#1a2e35] font-black text-sm uppercase tracking-[0.2em]">
                Ready to Analyze
              </p>
              <p className="text-[#2e7d82]/60 text-[10px] font-semibold uppercase tracking-widest mt-0.5">
                Select a JD above then click analyze
              </p>
            </div>
          </div>

          {/* Right: Button */}
          <button
            onClick={analyzeclick}
            className="relative group flex items-center gap-3 px-8 py-3.5 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md active:scale-95"
          >
            {/* Button bg */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2e7d82] to-[#3a9aa0] group-hover:from-[#245f63] group-hover:to-[#2e7d82] transition-all duration-300" />
            {/* Shine */}
            <div className="absolute top-0 left-0 right-0 h-px bg-white/30" />

            <FileSearch className="relative w-4 h-4 text-white" />
            <span className="relative text-white font-black text-xs uppercase tracking-widest">
              Analyze Selected JD
            </span>
          </button>

        </div>

        {/* Bottom accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2e7d82]/20 to-transparent" />

      </div>
    </div>
  );
};

export default AnalyzeButton;