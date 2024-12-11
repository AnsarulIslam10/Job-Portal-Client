import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id, title, company, deadline}= useLoaderData()
    return (
        <div>
            <h2>Job details for {title}</h2>
            <p>apply for {company}</p>
            <p>deadline {deadline}</p>
            <Link to={`/jobApply/${_id}`} className='btn'>Apply Now</Link>
        </div>
    );
};

export default JobDetails;