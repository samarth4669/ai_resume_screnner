// Body.jsx
import { FaTrophy, FaFileAlt, FaBriefcase, FaUpload, FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
 import { useNavigate } from "react-router-dom";

function Body() {
    const navigate = useNavigate();

  return (
    <div className="bg-[#e4eff2] font-sans">
 
      {/* --- MAIN CONTENT CONTAINER --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
 
          {/* LEFT COLUMN: Why AI Resume Screener (5 Cols) */}
          {/* On mobile: shown second (order-2), on lg: shown first */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-sm font-black text-[#1a2e35] uppercase tracking-wider mb-4 sm:mb-6">
                Why AI Resume Screener?
              </h2>
 
              {/* Feature Cards — 1 col on mobile, 3 on md+ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Card 1 */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex sm:flex-col items-center sm:items-center text-left sm:text-center gap-3 sm:gap-0 shadow-sm">
                  <div className="shrink-0 p-2 bg-[#f0f7f8] rounded-full sm:mb-3">
                    <FaTrophy className="text-[#3a7277] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xs text-[#1a2e35] mb-1">Candidate Ranking</h3>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      Identify top candidates instantly with objective AI-generated match scores.
                    </p>
                  </div>
                </div>
 
                {/* Card 2 */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex sm:flex-col items-center sm:items-center text-left sm:text-center gap-3 sm:gap-0 shadow-sm">
                  <div className="shrink-0 p-2 bg-[#f0f7f8] rounded-full sm:mb-3">
                    <FaFileAlt className="text-[#3a7277] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xs text-[#1a2e35] mb-1">Resume Parsing</h3>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      Extract key skills, education, and experience from PDF, DOC, and DOCX files automatically.
                    </p>
                  </div>
                </div>
 
                {/* Card 3 */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex sm:flex-col items-center sm:items-center text-left sm:text-center gap-3 sm:gap-0 shadow-sm">
                  <div className="shrink-0 p-2 bg-[#f0f7f8] rounded-full sm:mb-3">
                    <FaBriefcase className="text-[#3a7277] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xs text-[#1a2e35] mb-1">JD Matching</h3>
                    <p className="text-[11px] text-gray-500 leading-normal">
                      Compare resumes against detailed Job Descriptions using multi-factor analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Workflow Banner */}
            <div className="bg-[#f0f6f8] border border-gray-200/60 rounded-xl p-4 flex items-center justify-around flex-wrap gap-2">
              <div className="flex flex-col items-center">
                <FaUpload className="text-[#3a7277] text-2xl mb-1" />
                <span className="text-[10px] font-black text-[#1a2e35] uppercase tracking-widest">Upload</span>
              </div>
              <FaArrowRightLong className="text-gray-400 text-sm" />
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 border-2 border-dashed border-[#3a7277] rounded-full flex items-center justify-center animate-spin mb-1">
                  <div className="w-2 h-2 bg-[#3a7277] rounded-full"></div>
                </div>
                <span className="text-[10px] font-black text-[#1a2e35] uppercase tracking-widest">Analyze</span>
              </div>
              <FaArrowRightLong className="text-gray-400 text-sm" />
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5 items-end h-6 mb-1">
                  <div className="w-1 h-2 bg-[#3a7277]"></div>
                  <div className="w-1 h-4 bg-[#3a7277]"></div>
                  <div className="w-1 h-5 bg-[#3a7277]"></div>
                </div>
                <span className="text-[10px] font-black text-[#1a2e35] uppercase tracking-widest">Rank</span>
              </div>
            </div>
          </div>
 
          {/* RIGHT COLUMN: Features at a Glance (7 Cols) */}
          {/* On mobile: shown first (order-1), on lg: shown second */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col gap-4">
            <div>
              <h2 className="text-sm font-black text-[#1a2e35] uppercase tracking-wider mb-4">
                Features at a Glance
              </h2>
 
              {/* Mock Dashboard — stacks to 1 col on mobile */}
              <div className="bg-[#e2edf1] border border-[#cbdce2] rounded-xl p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] text-gray-700">
 
                {/* Box 1 */}
                <div className="bg-white/80 p-2 rounded border border-gray-200/60 flex flex-col justify-between">
                  <div>
                    <span className="font-extrabold uppercase text-[9px] block mb-1">1. Upload Resumes</span>
                    <div className="border border-dashed border-gray-300 rounded p-2 text-center text-gray-400 bg-white/50 my-1">
                      Drag & Drop files
                    </div>
                  </div>
                  <span className="text-[8px] text-gray-400 truncate block">📄 JaneDoe_Resume.pdf</span>
                </div>
 
                {/* Box 2 */}
                <div className="bg-white/80 p-2 rounded border border-gray-200/60">
                  <span className="font-extrabold uppercase text-[9px] block mb-1">2. Enter Job Description</span>
                  <div className="flex gap-1 mb-1 text-[8px]">
                    <label className="flex items-center gap-0.5"><input type="radio" defaultChecked readOnly /> Paste</label>
                    <label className="flex items-center gap-0.5"><input type="radio" readOnly /> Upload</label>
                  </div>
                  <div className="bg-white border border-gray-200 text-gray-400 p-1 rounded text-[8px] h-10">
                    Enter Requirements...
                  </div>
                </div>
 
                {/* Box 3 */}
                <div className="bg-[#2e6f74] text-white p-2 rounded flex flex-col justify-between">
                  <span className="font-extrabold uppercase text-[9px] block border-b border-white/20 pb-1">Results Dashboard</span>
                  <div className="space-y-0.5 my-1 text-[8px]">
                    <div className="flex justify-between bg-white/10 px-1 rounded"><span>Alice Green</span><span className="font-bold">92%</span></div>
                    <div className="flex justify-between bg-white/10 px-1 rounded"><span>Alvas Alice</span><span className="font-bold">92%</span></div>
                    <div className="flex justify-between bg-white/10 px-1 rounded"><span>John Smith</span><span className="font-bold">90%</span></div>
                  </div>
                </div>
              </div>
            </div>
 
            {/* CTA Button */}
            <button className="w-full bg-[#2e6f74] hover:bg-[#235559] active:scale-[0.98] text-white font-bold uppercase tracking-widest text-xs py-3.5 rounded-lg flex items-center justify-center gap-2 shadow transition-all" onClick={()=>navigate("/dashboard")}>
              View Detailed Dashboard <FaChevronRight className="text-[10px]" />
            </button>
          </div>
 
        </div>
      </main>
 
    </div>
  );
}
 
export default Body;
 