import React from "react";
import JobCarousel from "../Component/JobCarousel.jsx"

const Jobs = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Jobs</h1>
      <p className="text-gray-600 mb-10">Find the Jobs that fits your career aspirations.</p>
      <JobCarousel />
    </div>
  );
};

export default Jobs;