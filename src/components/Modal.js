import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Modal.css';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const SignInModal = ({ onClose }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const auth = getAuth();

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            navigate('/tracker');
          })
          .catch((error) => {
            alert(error.message);
          });
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            navigate('/tracker');
          })
          .catch((error) => {
            alert(error.message);
          });
    };

    return (
        <div className="modal-background">
            <div className="modal-content">
            <form onSubmit={isSigningUp ? handleSignUp : handleSignIn}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                {isSigningUp ? (
                  <>
                    <button type="submit">Sign Up</button>
                    <button onClick={() => setIsSigningUp(false)} type="button">Already have an account?</button>
                  </>
                ) : (
                  <>
                    <button type="submit">Sign In</button>
                    <button onClick={() => setIsSigningUp(true)} type="button">Don't have an account?</button>
                  </>
                )}
                <button onClick={onClose} type="button">Cancel</button>
            </form>
            </div>
        </div>
    );
};

export default SignInModal;