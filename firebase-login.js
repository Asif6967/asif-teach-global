console.log("🔥 Firebase login script loaded!");

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDC2FerEy98nKArSq7kQDGOTL7l8J7_To",
  authDomain: "asif-tech-global.firebaseapp.com",
  projectId: "asif-tech-global",
  storageBucket: "asif-tech-global.appspot.com",
  messagingSenderId: "517818851316",
  appId: "1:517818851316:web:3907f548fa9cd57bb463a1",
  measurementId: "G-4G7P9K65ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
console.log("✅ Firebase initialized successfully!");

// Button references
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const googleBtn = document.getElementById('googleBtn');

// Sign Up
signupBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("✅ Account created successfully!");
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
});

// Login
loginBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("🎉 Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
});

// Google Login
googleBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then(() => {
      alert("🌐 Logged in with Google!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
});
