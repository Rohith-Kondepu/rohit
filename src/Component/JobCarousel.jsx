import React, { useState } from "react";
import JobCard from "./JobCard.jsx";
import { ChevronRight } from "lucide-react";
import Target from "../assets/target.svg"
import Channel from "../assets/channel.svg"
import Volkswagen from "../assets/volkswagen.svg"

const jobs = [
  {
    id: 1,
    company: "Target",
    category: "Retail",
    type: "In Office",
    title: "Revenue Analyst",
    registered: 33237,
    daysLeft: 7,
    logo: Target,
  },
  {
    id: 2,
    company: "Volkswagen",
    category: "Cars",
    type: "In Office",
    title: "Revenue Analyst",
    registered: 33237,
    daysLeft: 7,
    logo: Volkswagen,
  },
  {
    id: 3,
    company: "Chanel",
    category: "Fashion",
    type: "In Office",
    title: "Revenue Analyst",
    registered: 33237,
    daysLeft: 7,
    logo: Channel,
  },
];

const JobCarousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative flex items-center justify-center mt-6">
      <div className="flex gap-4 overflow-hidden w-full max-w-4xl">
        {jobs
        .concat(jobs)
        .slice(index, index + 3).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <button
        onClick={() => setIndex((prev) => (prev + 1) % jobs.length)}
        className="absolute right-60 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default JobCarousel;
