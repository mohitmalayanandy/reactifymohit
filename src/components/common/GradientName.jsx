import React from "react";

const GradientName = ({ className = "" }) => {
  return (
    <span className={`bg-clip-text cursor-none text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 ${className}`}>
      Mohit Malaya Nandy
    </span>
  );
};

export default GradientName;