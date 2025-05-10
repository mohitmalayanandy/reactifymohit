import React from 'react';
import { Download } from 'lucide-react';
import { useState } from 'react';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Sample PDF data - in a real application, this would be your actual PDF file
  const samplePdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulating a download process
    setTimeout(() => {
      // In a real application with an actual file available, 
      // this would be replaced with window.location.href = "/resume.pdf";
      window.open(samplePdfUrl, '_blank');
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black px-6 py-12">
      <div className="max-w-2xl w-full dark:bg-gray-800 bg-transparent shadow-lg rounded-lg p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          My Resume
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-xl mx-auto">
          You can download my resume in PDF format below.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`inline-flex items-center justify-center ${
              isDownloading ? 'bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-semibold py-3 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          >
            {isDownloading ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Processing...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;