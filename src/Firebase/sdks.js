// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFRs5voS22mR4QZDFOsAu9cRgJ7uVB6QY",
  authDomain: "job-tracker-2b9b9.firebaseapp.com",
  projectId: "job-tracker-2b9b9",
  storageBucket: "job-tracker-2b9b9.appspot.com",
  messagingSenderId: "612924724565",
  appId: "1:612924724565:web:7a81151a36e918d16f0bdc",
  measurementId: "G-B4WD5PL8L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore()

export {analytics, firestore};