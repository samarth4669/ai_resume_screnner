// AnalysisInProgress.jsx
import React from "react";

// Inline keyframe injection for the custom concentric smooth rotation effects
const pulseAndRotateStyles = `
  @keyframes spin-clockwise {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes spin-counter-clockwise {
    0% { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
  }
  .animate-spin-normal {
    animation: spin-clockwise 2s linear infinite;
  }
  .animate-spin-reverse {
    animation: spin-counter-clockwise 2.5s linear infinite;
  }
  .animate-spin-slow {
    animation: spin-clockwise 4s linear infinite;
  }
`;

function AnalysisInProgress() {
    
  return (
    <>
      <style>{pulseAndRotateStyles}</style>
      <div className="w-full min-h-[400px] flex items-center justify-center p-6 bg-[#e4eff2]/40 select-none">
        
        {/* Main Floating Glassmorphic Container Panel */}
        <div className="w-full max-w-xl bg-white/80 backdrop-blur-md border border-white rounded-2xl p-10 shadow-[0_20px_50px_rgba(31,58,64,0.15)] flex flex-col items-center justify-center text-center transition-all duration-300">
          
          {/* --- TRIPLE-RING CONCENTRIC LOADING GRAPHIC --- */}
          <div className="relative w-36 h-36 flex items-center justify-center mb-8">
            
            {/* Outer Ring Track (Thickest) */}
            <svg className="absolute w-full h-full animate-spin-normal" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke="#3e767b"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="180 80"
                fill="transparent"
                className="opacity-90 drop-shadow-[0_0_6px_rgba(62,118,123,0.4)]"
              />
            </svg>

            {/* Middle Ring Track (Reverse Axis) */}
            <svg className="absolute w-[80%] h-[80%] animate-spin-reverse" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="#2e6f74"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="120 100"
                fill="transparent"
                className="opacity-70 drop-shadow-[0_0_4px_rgba(46,111,116,0.3)]"
              />
            </svg>

            {/* Innermost Ring Track (Slow Axis Anchor) */}
            <svg className="absolute w-[58%] h-[58%] animate-spin-slow" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#1a2e35"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="60 140"
                fill="transparent"
                className="opacity-50"
              />
            </svg>

            {/* Core Center Pulse Orb Point */}
            <div className="w-4 h-4 rounded-full bg-[#3e767b]/20 border border-[#3e767b]/40 animate-pulse" />
          </div>

          {/* --- CONTENT SEGMENT TEXT STACK --- */}
          <h2 className="text-xl font-black text-[#0a181e] tracking-widest uppercase mb-2">
            Analysis in Progress...
          </h2>
          
          <p className="text-xs font-bold text-gray-500 tracking-wide capitalize max-w-sm leading-relaxed">
            generating detailed candidate analysis and rankings... <span className="lowercase">please wait.</span>
          </p>

        </div>
      </div>
    </>
  );
}

export default AnalysisInProgress;