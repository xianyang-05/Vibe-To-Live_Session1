// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoERkZ53HOfUtrTlyw3dmi-qo9SvAQUbE",
  authDomain: "vibetolive-5562b.firebaseapp.com",
  projectId: "vibetolive-5562b",
  storageBucket: "vibetolive-5562b.firebasestorage.app",
  messagingSenderId: "408825657044",
  appId: "1:408825657044:web:187b18a23068c00c5c2d41",
  measurementId: "G-Z2PRN17SVM"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile };
