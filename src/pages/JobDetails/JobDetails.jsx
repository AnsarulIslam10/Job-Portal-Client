import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title, company, deadline}= useLoaderData()
    return (
        <div>
            <h2>Job details for {title}</h2>
            <p>apply for {company}</p>
            <p>deadline {deadline}</p>
            <button>Apply Now</button>
        </div>
    );
};

export default JobDetails;