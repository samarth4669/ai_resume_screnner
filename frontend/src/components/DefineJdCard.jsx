// DefineJdCard.jsx
// DefineJdCard.jsx
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaCloudUploadAlt, FaFileInvoice } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

function DefineJdCard({ setIsJdProvided, setJdFile, setJdText, jdText, jdFile }) {
  const [activeTab, setActiveTab] = useState("paste");

  function settextpart(e) {
    setJdText(e.target.value);
    setIsJdProvided(e.target.value.trim().length > 0);
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const extension = file.name.split(".").pop().toLowerCase();
      if (!["pdf", "doc", "docx"].includes(extension)) {
        toast.error("Only PDF, DOC, and DOCX files are allowed");
        setJdFile(null);
        return;
      }
      setIsJdProvided(true);
      setJdFile(file);
    }
  };

  function tabsetting(value) {
    if (value === "upload") setJdText("");
    else setJdFile(null);
    setIsJdProvided(false);
    setActiveTab(value);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col justify-between w-full font-sans">

      {/* Title */}
      <div>
        <h2 className="text-sm sm:text-base font-black text-[#0a181e] tracking-tight uppercase mb-3">
          2. Define Job Description (JD)
        </h2>

        {/* Toggle Tabs */}
        <div className="flex border border-[#3e767b] rounded-lg overflow-hidden mb-4 text-xs font-bold select-none">
          <button
            type="button"
            className={`flex-1 py-2 uppercase tracking-wide transition-all ${
              activeTab === "paste"
                ? "bg-[#3e767b] text-white"
                : "bg-white text-[#3e767b] hover:bg-[#e4eff2]/30"
            }`}
            onClick={() => tabsetting("paste")}
          >
            Paste Text
          </button>
          <button
            type="button"
            className={`flex-1 py-2 uppercase tracking-wide transition-all ${
              activeTab === "upload"
                ? "bg-[#3e767b] text-white"
                : "bg-white text-[#3e767b] hover:bg-[#e4eff2]/30"
            }`}
            onClick={() => tabsetting("upload")}
          >
            Upload Doc
          </button>
        </div>

        {/* Paste Tab */}
        {activeTab === "paste" ? (
          <div>
            <textarea
              className="w-full h-[180px] sm:h-[220px] p-3 sm:p-4 border border-gray-300 rounded-xl bg-white text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3e767b] resize-none leading-relaxed"
              placeholder="Enter job description or key requirements here..."
              value={jdText}
              onChange={settextpart}
            />
            <p className="mt-2 text-[10px] text-gray-500 font-bold tracking-wide">
              Focus areas:{" "}
              <span className="text-gray-400 font-medium">
                Skills, Experience, Education, Keyword Similarity
              </span>
            </p>
          </div>
        ) : (
          <div>
            <label className="relative border-2 border-dashed border-gray-300 rounded-xl bg-[#e4eff2]/30 hover:bg-[#e4eff2]/50 p-5 sm:p-8 flex flex-col items-center justify-center cursor-pointer transition-all min-h-[160px] sm:min-h-[220px] group">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="relative flex items-center justify-center mb-3 sm:mb-4 text-[#3e767b]/40 w-16 h-14">
                <FaFileInvoice className="text-3xl sm:text-4xl group-hover:scale-105 transition-transform text-[#3e767b]" />
                <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full border border-gray-200 shadow-2xs">
                  <FaCloudUploadAlt className="text-[#3e767b] text-sm" />
                </div>
              </div>
              <p className="text-center text-xs font-bold text-[#1a2e35] leading-normal max-w-xs">
                {jdFile ? (
                  <span className="text-[#2e6f74] font-black truncate max-w-[200px] block mx-auto">
                    📄 {jdFile.name}
                  </span>
                ) : (
                  <>
                    Drag & Drop JD file here <br />
                    <span className="text-gray-500 font-medium">or Click to Upload Document</span>
                  </>
                )}
              </p>
            </label>
            <p className="mt-2 text-[10px] text-gray-500 font-bold tracking-wide">
              Supported Formats:{" "}
              <span className="text-gray-400 font-medium">PDF, DOC, DOCX</span>
            </p>
          </div>
        )}
      </div>

      {/* Bottom Status Panel */}
      <div className="mt-4 sm:mt-5 pt-3 border-t border-gray-100">
        <h3 className="text-[11px] font-black text-[#0a181e] tracking-wider uppercase mb-2">
          Upload JD File
        </h3>
        <div className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 sm:py-3.5 px-3 sm:px-4 flex items-center justify-center text-center">
          <p className="text-[11px] text-gray-500 font-medium italic">
            {jdFile
              ? `Ready for parsing: (${(jdFile.size / 1024).toFixed(1)} KB)`
              : activeTab === "paste" && jdText.trim().length > 0
              ? `Manual text active (${jdText.trim().length} characters)`
              : "No job specification text or file detected."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DefineJdCard;