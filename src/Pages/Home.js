import React, { useState } from 'react';
import Header from '../components/Heading';
import '../styles/Filters.css';
import SignInModal from '../components/Modal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="Home">
        <Header/>
        <button className="sign-in" onClick={() => setShowModal(true)}>Sign In</button>
        {showModal && <SignInModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Home;