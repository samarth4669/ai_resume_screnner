import DashboardHeader from "../components/DashboardHeader";
import JobDescriptionSelector from "../components/JobDescriptionSelector";
import AnalyzeButton from "../components/AnalyzeButton";
import CandidateResults from "../components/CandidateResults";

import { useEffect, useState } from "react";

function Dashboard() {
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  // NEW STATE
  const [showResults, setShowResults] = useState(false);

  // Dummy candidate data
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchJobDescriptions();
  }, []);

  const fetchJobDescriptions = async () => {
    try {
      const response = await fetch(
        "https://resume-screening-backend-production-6b7f.up.railway.app/job-descriptions"
      );

      const data = await response.json();

      if (data.success) {
        setJobDescriptions(data.job_descriptions);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // ANALYZE BUTTON CLICK
  const analyzeclick = async () => {
    console.log("Selected JD:", selectedId);

    try {
      // Example API call
      // Replace with your actual backend endpoint

      const response = await fetch(
        `https://resume-screening-backend-production-6b7f.up.railway.app/analyze/${selectedId}`
      );

      const data = await response.json();

      if (data.success) {
        // Set candidate results
        setCandidates(data.candidates);
        console.log(data)
        // SHOW RESULTS COMPONENT
        setShowResults(true);
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <DashboardHeader />

      {/* BEFORE ANALYSIS */}
      {!showResults && (
        <>
          <JobDescriptionSelector
            jobDescriptions={jobDescriptions}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
          />

          <AnalyzeButton analyzeclick={analyzeclick} />
        </>
      )}

      {/* AFTER ANALYSIS */}
      {showResults && (
        <CandidateResults candidates={candidates} />
      )}
    </div>
  );
}

export default Dashboard;