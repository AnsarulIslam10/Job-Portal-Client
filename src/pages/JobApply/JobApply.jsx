import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.files[0]; // Handling file upload
    const coverLetter = form.coverLetter.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
      coverLetter,
    };

    const formData = new FormData();
    formData.append("jobApplication", JSON.stringify(jobApplication));
    formData.append("resume", resume);

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Applied Successfully",
            icon: "success",
          });
          navigate("/myApplications");
        }
      });
  };

  return (
    <div className="flex my-32 justify-center">
      <div className="card bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Apply for Job
        </h1>

        <form onSubmit={submitJobApplication} className="space-y-6">
          {/* LinkedIn URL */}
          <div className="form-control">
            <label className="label text-gray-600 text-lg font-medium">
              LinkedIn URL
            </label>
            <div className="relative">
              <input
                type="url"
                name="linkedIn"
                placeholder="LinkedIn Profile URL"
                className="input input-bordered w-full pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 1 0-12 0 6 6 0 0 0 12 0zM8 8a6 6 0 1 1-12 0A6 6 0 0 1 8 8zM2 20s1 0 2-2h12c1 2 2 2 2 2h-16z"></path>
              </svg>
            </div>
          </div>

          {/* GitHub URL */}
          <div className="form-control">
            <label className="label text-gray-600 text-lg font-medium">
              Github URL
            </label>
            <div className="relative">
              <input
                type="url"
                name="github"
                placeholder="Github Profile URL"
                className="input input-bordered w-full pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 1 0-12 0 6 6 0 0 0 12 0zM8 8a6 6 0 1 1-12 0A6 6 0 0 1 8 8zM2 20s1 0 2-2h12c1 2 2 2 2 2h-16z"></path>
              </svg>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="form-control">
            <label className="label text-gray-600 text-lg font-medium">
              Resume URL
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Resume URL"
              className="input input-bordered w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Cover Letter */}
          <div className="form-control">
            <label className="label text-gray-600 text-lg font-medium">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              placeholder="Write a brief cover letter"
              className="textarea textarea-bordered w-full rounded-lg focus:ring-2 focus:ring-indigo-500"
              rows="6"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control">
            <button className="btn bg-gradient-to-r from-indigo-500 to-blue-500 text-white hover:bg-indigo-600 hover:to-blue-600 py-3 px-6 w-full font-semibold rounded-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out">
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
