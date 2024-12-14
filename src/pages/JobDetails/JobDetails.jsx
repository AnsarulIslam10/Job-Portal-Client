import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase, FaDollarSign, FaCalendarAlt } from "react-icons/fa";

const JobDetails = () => {
  const {
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
    status,
    title,
    deadline,
    _id,
  } = useLoaderData();

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 border border-gray-200 transform transition-transform duration-300 hover:shadow-2xl">
        {/* Job Header */}
        <div className="flex items-center space-x-6 mb-8">
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-20 h-20 object-cover rounded-full border-4 border-gradient-to-r from-blue-500 to-teal-400 shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-500 transition">{title}</h2>
            <p className="text-xl text-gray-600">{company}</p>
          </div>
        </div>

        {/* Job Details */}
        <div className="space-y-6 mb-8">
          <p className="flex items-center text-gray-700">
            <FaMapMarkerAlt className="mr-2 text-blue-500" /> <span className="font-medium">Location:</span> {location}
          </p>
          <p className="flex items-center text-gray-700">
            <FaBriefcase className="mr-2 text-blue-500" /> <span className="font-medium">Job Type:</span> {jobType}
          </p>
          <p className="flex items-center text-gray-700">
            <FaDollarSign className="mr-2 text-blue-500" /> <span className="font-medium">Salary Range:</span>{" "}
            {salaryRange?.min && salaryRange?.max
              ? `${salaryRange.min} - ${salaryRange.max}`
              : "Not specified"}
          </p>
          <p className="flex items-center text-gray-700">
            <FaCalendarAlt className="mr-2 text-blue-500" /> <span className="font-medium">Application Deadline:</span> {deadline}
          </p>
        </div>

        {/* Job Description */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Job Description</h3>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Responsibilities */}
        {responsibilities?.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Requirements */}
        {requirements?.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* HR Contact */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact HR</h3>
          <p className="text-gray-700">
            <span className="font-medium">Name:</span> {hr_name}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Email:</span>{" "}
            <a
              href={`mailto:${hr_email}`}
              className="text-blue-500 hover:underline transition-all"
            >
              {hr_email}
            </a>
          </p>
        </div>

        {/* Apply Button */}
        <div className="mt-12">
          <Link
            to={`/jobApply/${_id}`}
            className="block text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white text-lg font-semibold py-4 rounded-md shadow-md hover:bg-gradient-to-l hover:from-teal-500 hover:to-blue-600 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
