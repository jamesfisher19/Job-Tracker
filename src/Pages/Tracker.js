import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import {FilterHeader, Checkboxes} from '../components/Filters';
import Header from '../components/Heading';
import '../styles/Filters.css';
import Form from '../components/JobsField.js';

const Tracker = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.error("Logout Error:", error);
    });
  };

  return (
    <div style={{ background: "#D7E9F8", height: "100vh", width: "100%" }}>
      <div className="App">
        <Header />
        <button onClick={handleLogout} style={{ position: 'absolute', right: 20, top: 20 }}>Logout</button> {/* Add a logout button */}
        <FilterHeader />
        <Checkboxes />
        <Form />
      </div>
    </div>
  );
}

export default Tracker;
