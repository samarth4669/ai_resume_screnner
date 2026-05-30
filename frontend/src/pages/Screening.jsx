import Screenheader from "../components/Screenheader";
import UploadResumesCard from "../components/UploadResumesCard";
import DefineJdCard from "../components/DefineJdCard";
import AnalyzeMatchBtn from "../components/AnalyzeMatchBtn";
import UploadStatusCard from "../components/UploadStatusCard";
import Results from "../components/Results";
import { useState } from "react";
import AnalysisInProgress from "../components/AnalysisInProgress";

function Screening() {
  const [isJdProvided, setIsJdProvided] = useState(false);
  const [uploadCount, setUploadCount] = useState(0);
  const [jdText, setJdText] = useState("");
  const [jdFile, setJdFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState("before");
  const [processed, setProcessed] = useState([]);

  const analyzeResumes = async () => {
    try {
      setIsAnalyzing("now");
      const formData = new FormData();
      if (jdText) formData.append("jd_text", jdText);
      if (jdFile) formData.append("jd_file", jdFile);
      uploadedFiles.forEach((file) => formData.append("resume_files", file));

      const response = await fetch("https://resume-screening-backend-production-6b7f.up.railway.app/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setProcessed(data["processed_candidates"]);
      setIsAnalyzing("then");
    } catch (error) {
      setIsAnalyzing("before");
      console.error(error);
    }
  };

  if (isAnalyzing === "now") {
    return (
      <div className="bg-[#e4eff2] font-sans min-h-screen">
        <Screenheader currentstep="analyzing" />
        <AnalysisInProgress />
      </div>
    );
  }

  if (isAnalyzing === "then") {
    return (
      <div className="bg-[#e4eff2] font-sans min-h-screen">
        <Screenheader currentstep="results" />
        <Results candidates={processed} />
      </div>
    );
  }

  return (
    <div className="bg-[#e4eff2] font-sans min-h-screen">
      <Screenheader currentstep="upload" />

      {/* Upload + JD cards */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <UploadResumesCard
          setUploadCount={setUploadCount}
          setUploadedFiles={setUploadedFiles}
          uploadedFiles={uploadedFiles}
        />
        <DefineJdCard
          setIsJdProvided={setIsJdProvided}
          setJdFile={setJdFile}
          setJdText={setJdText}
          jdText={jdText}
          jdFile={jdFile}
        />
      </div>

      {/* Bottom action row */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:pb-12">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:max-w-2xl sm:mx-auto">
          <AnalyzeMatchBtn
            onClick={analyzeResumes}
            disabled={!(uploadCount > 0 && isJdProvided)}
          />
          <UploadStatusCard
            uploadCount={uploadCount}
            isJdProvided={isJdProvided}
          />
        </div>
      </div>
    </div>
  );
}

export default Screening;