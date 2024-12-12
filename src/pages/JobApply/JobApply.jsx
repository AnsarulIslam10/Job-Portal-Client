import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const {id} = useParams()
    const {user} = useAuth()
const navigate = useNavigate()
    const submitJobApplication = e =>{
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value
        const github = form.github.value
        const resume = form.resume.value
        // console.log({linkedIn, github, resume})

        const jobApplication = {
          job_id: id, 
          applicant_email: user.email,
          linkedIn,
          github,
          resume
        }

        fetch('http://localhost:5000/job-applications', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(jobApplication)
        })
        .then(res =>res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "Applied Successfully",
              icon: "success"
            });
            navigate('/myApplications')
          }
        })
    }
  return (
        <div className="card bg-base-100 mx-auto mt-32 w-full max-w-xl shadow-2xl">
          <form onSubmit={submitJobApplication} className="card-body">
          <h1 className="text-5xl text-center font-bold">Apply For Job</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn URL</span>
              </label>
              <input
                type="url"
                name="linkedIn"
                placeholder="LinkedIn URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Github URL</span>
              </label>
              <input
                type="url"
                name="github"
                placeholder="Github url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume URL</span>
              </label>
              <input
                type="url"
                name="resume"
                placeholder="Resume url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply</button>
            </div>
          </form>
        </div>
  );
};

export default JobApply;
