import React, { useState, useEffect } from "react";
import '../styles/JobsField.css';
import { firestore } from "../Firebase/sdks";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { collection, query, doc, getDocs, addDoc, deleteDoc } from "firebase/firestore";

const Form = () => {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
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
      applied: formData.get("applied") === "true",
      company: formData.get("company"),
      title: formData.get("title"),
      location: formData.get("location"),
      link: formData.get("link"),
      deadline: formData.get("deadline"),
    };

    if (user) {
      try {
        const docRef = await addDoc(collection(firestore, `users/${user.uid}/jobs`), newJob);
        console.log("Document written with ID: ", docRef.id);
        setJobs((jobs) => [...jobs, { ...newJob, id: docRef.id }]);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      console.error("No user logged in");
    }

    form.reset();
  };

  useEffect(() => {
    console.log(jobs);
  }, [jobs]);

  useEffect(() => {
    const fetchJobs = async () => {
      if (user) {
        const q = query(collection(firestore, `users/${user.uid}/jobs`));
        const querySnapshot = await getDocs(q);
        const fetchedJobs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setJobs(fetchedJobs);
      }
    };
    
  
    fetchJobs();
  }, [user]);

  const handleDelete = async (jobId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this job?");
    
    if (isConfirmed && user) {
      try {
        await deleteDoc(doc(firestore, `users/${user.uid}/jobs`, jobId));
        setJobs(jobs.filter(job => job.id !== jobId));
        console.log("Job deleted");
      } catch (e) {
        console.error("Error deleting job: ", e);
      }
    } else {
      if (!user) {
        console.error("User not authenticated");
      }
    }
  };
  


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
        <input type="submit" value="Add New Job" />
        </form>  
        <div className="job-field">
          <ul>
            {jobs.map((job) => (
              <div key={job.id}>
                <h3 className="company">{job.company}</h3>
                <p className="title">Title: {job.title}</p>
                <p className="location">Location: {job.location}</p>
                <p className="link">Link: {job.link}</p>
                <p className="deadline">Deadline: {job.deadline}</p>
                <p className="applied">Applied: {job.applied ? 'Yes' : 'No'}</p>
                <button onClick={() => handleDelete(job.id)}>Delete Job</button>
              </div>
            ))}
          </ul>
        </div>    
    </div>

  );
};
export default Form;
