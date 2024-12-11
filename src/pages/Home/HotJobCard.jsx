import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
    jobType,
    applicationDeadline,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-md border py-3 px-2">
      <div className="flex gap-2">
        <figure>
          <img className="w-14" src={company_logo} alt={company} />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <CiLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="badge badge-secondary">NEW</div>
        <div className="flex justify-between text-gray-500">
          <div>
            <p className="flex items-center gap-1">
              <FaBriefcase />
              {jobType}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1">
              <FaClock />
              {applicationDeadline}
            </p>
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="flex gap-2 flex-wrap items-center">
          {requirements.map((skill, idx) => (
            <p key={idx} className="cursor-pointer text-xs rounded-md py-1 px-2 hover:text-blue-400 text-center bg-green-50 text-green-600 border-green-300 border">
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end mt-4 items-center">
          <p className="flex items-center text-gray-600">
            <TbCoinTaka />
            {salaryRange.min} - <TbCoinTaka />
            {salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`} className="btn btn-sm bg-blue-100 text-gray-600 mt-2">Apply Now</Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
