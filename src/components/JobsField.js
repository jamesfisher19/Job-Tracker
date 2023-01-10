import React, { useState, useEffect } from "react";
import './JobsField.css';

const Form = () => {
  const [jobs, setJobs] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    //Ensure form submissions aren't empty
    if (
      !formData.get("company") ||
      !formData.get("title") ||
      !formData.get("location") ||
      !formData.get("link") ||
      !formData.get("deadline")
    ) {
      console.error("All fields must be filled.");
      return;
    }

    const newJob = {
      applied: formData.get("applied"),
      company: formData.get("company"),
      title: formData.get("title"),
      location: formData.get("location"),
      link: formData.get("link"),
      deadline: formData.get("deadline"),
    };
    setJobs((jobs) => [...jobs, newJob]);
    form.reset();
  };
  useEffect(() => {
    console.log(jobs);
  }, [jobs]);

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            Company:
            <input type="text" name="company" />
        </label>
        <br />
        <label>
            Title:
            <input type="text" name="title" />
        </label>
        <br />
        <label>
            Location:
            <input type="text" name="location" />
        </label>
        <br />
        <label>
            Link:
            <input type="text" name="link" />
        </label>
        <br />
        <label>
            Deadline:
            <input type="text" name="deadline" />
        </label>
        <br />
        <label>
            Applied:
            <input type="checkbox" name="applied" value="true" />
        </label>
        <br />
        <input type="submit" value="New Job" />
        </form>  
        <div className="job-field">
            <ul>
            {jobs.map((job)=> (
                    <div key={job.company}>
                    <h3 className="company">{job.company}</h3>
                    <p className="title">Title: {job.title}</p>
                    <p className="location">Location: {job.location}</p>
                    <p className="link">Link: {job.link}</p>
                    <p className="deadline">Deadline: {job.deadline}</p>
                    <p className="applied">Applied: {job.applied ? 'Yes' : 'No'}</p>
                  </div>
                ))}                
            </ul>

        </div>      
    </div>

  );
};
export default Form;
