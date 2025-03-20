import React from "react";
import JobCarousel from "../Component/JobCarousel.jsx"

const Jobs = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold">Jobs</h1>
      <p className="text-gray-600">Find the Jobs that fits your career aspirations.</p>
      <JobCarousel />
    </div>
  );
};

export default Jobs;