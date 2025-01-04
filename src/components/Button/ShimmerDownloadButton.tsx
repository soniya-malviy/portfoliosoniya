// src/components/Button/ShimmerDownloadButton.tsx

import React from "react";

// ShimmerDownloadButton Component
export function ShimmerDownloadButton() {
  // Function to handle download (for example, download a resume)
  const handleDownload = () => {
    // Path to your resume file
    const resumeUrl = "/assets/resume/resume.pdf"; // Ensure the path is correct

    // Create an invisible link element to trigger the download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Soniya_Malviya_Resume.pdf"; // Filename to be saved
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"    >
     
    </button>
  );
}
