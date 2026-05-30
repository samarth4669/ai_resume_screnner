// UploadResumesCard.jsx
// UploadResumesCard.jsx
import React, { useState } from "react";
import { FaCloudUploadAlt, FaFileAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UploadResumesCard({ setUploadCount, setUploadedFiles, uploadedFiles }) {

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const allowedExtensions = ["pdf", "doc", "docx"];
    const validFiles = [];
    const invalidFiles = [];

    files.forEach((file) => {
      const extension = file.name.split(".").pop().toLowerCase();
      if (allowedExtensions.includes(extension)) {
        validFiles.push(file);
      } else {
        invalidFiles.push(file.name);
      }
    });

    if (invalidFiles.length > 0) {
      toast.error(`Unsupported files: ${invalidFiles.join(", ")}`);
    }

    setResumeFiles(validFiles);
  };

  const setResumeFiles = (validFiles) => {
    setUploadedFiles((prev) => {
      const updatedFiles = [...prev, ...validFiles].slice(0, 100);
      setUploadCount(updatedFiles.length);
      return updatedFiles;
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-xs flex flex-col justify-between w-full font-sans">

      {/* Top Section: Title Banner */}
      <div>
        <h2 className="text-sm sm:text-base font-black text-[#0a181e] tracking-tight uppercase mb-3">
          1. Upload Candidate Resumes
        </h2>

        {/* Dropzone */}
        <label className="relative border-2 border-dashed border-gray-300 rounded-xl bg-[#e4eff2]/30 hover:bg-[#e4eff2]/50 p-5 sm:p-8 flex flex-col items-center justify-center cursor-pointer transition-all min-h-[160px] sm:min-h-[220px] group">
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Icon cluster */}
          <div className="relative flex items-center justify-center mb-3 sm:mb-4 text-[#3e767b]/40 w-20 sm:w-24 h-12 sm:h-14">
            <FaFileAlt className="text-2xl sm:text-3xl absolute -left-2 top-2 transform -rotate-12 opacity-60" />
            <FaFileAlt className="text-2xl sm:text-3xl absolute -right-2 top-2 transform rotate-12 opacity-60" />
            <div className="z-10 bg-[#e4eff2] p-2 sm:p-2.5 rounded-full shadow-xs border border-white group-hover:scale-105 transition-transform">
              <FaCloudUploadAlt className="text-[#3e767b] text-2xl sm:text-3xl" />
            </div>
          </div>

          <p className="text-center text-xs font-bold text-[#1a2e35] leading-normal max-w-xs">
            Drag & Drop PDF, DOC, DOCX files here <br />
            <span className="text-gray-500 font-medium">or Click to Select (Multiple files allowed)</span>
          </p>
        </label>

        {/* Supported Formats */}
        <div className="mt-2 sm:mt-2.5 text-[10px] text-gray-600 font-bold tracking-wide uppercase">
          Supported Formats: <span className="text-gray-500 font-semibold">PDF, DOC, DOCX</span>
        </div>
      </div>

      {/* Bottom Section: File Listing Table */}
      <div className="mt-4 sm:mt-5">
        <h3 className="text-[11px] font-black text-[#0a181e] tracking-wider uppercase mb-2">
          Uploaded Files
        </h3>

        {/* Table Header */}
        <div className="grid grid-cols-12 bg-[#3e767b] text-white text-[9px] font-extrabold uppercase tracking-widest px-2 sm:px-3 py-1.5 rounded-t-md">
          <div className="col-span-2 sm:col-span-3 border-r border-white/20">#</div>
          <div className="col-span-10 sm:col-span-9 pl-2 sm:pl-3">File Name</div>
        </div>

        {/* File Rows */}
        <div className="border border-t-0 border-gray-200 bg-gray-50/50 rounded-b-md text-center py-4 sm:py-5 min-h-[60px] flex items-center justify-center px-3 sm:px-4">
          {uploadedFiles.length === 0 ? (
            <p className="text-[11px] text-gray-500 font-medium italic">
              Uploaded resumes will appear here. Max 100 files.
            </p>
          ) : (
            <div className="w-full text-left space-y-1 max-h-[120px] overflow-y-auto">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 text-[11px] font-semibold text-gray-700 py-1 border-b border-gray-100 last:border-none"
                >
                  <div className="col-span-2 sm:col-span-3 text-gray-400">#{index + 1}</div>
                  <div className="col-span-10 sm:col-span-9 truncate text-[#2e6f74] font-bold pl-1">{file.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default UploadResumesCard;