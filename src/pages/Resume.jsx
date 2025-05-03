import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        My Resume
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-xl">
        You can download my resume in PDF format below.
      </p>
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
      >
        <FaDownload className="mr-2" />
        Download Resume
      </a>
    </div>
  );
};

export default Resume;