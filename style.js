console.log("🔥 Firebase login script loaded!");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDC2FerEy98nKArSq7kQDGOTL7l8J7_To",
  authDomain: "asif-tech-global.firebaseapp.com",
  projectId: "asif-tech-global",
  storageBucket: "asif-tech-global.appspot.com",
  messagingSenderId: "517818851316",
  appId: "1:517818851316:web:3907f548fa9cd57bb463a1",
  measurementId: "G-4G7P9K65ZC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
console.log("✅ Firebase initialized successfully!");

// Signup
document.getElementById("signupBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("⚠️ Please enter email and password");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("✅ Account created successfully!"))
    .catch((error) => alert("❌ " + error.message));
});

// Login
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("🎉 Login successful!");
      window.location.href = "index.html";
    })
    .catch((error) => alert("❌ " + error.message));
});

// Google Login
document.getElementById("googleBtn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(() => {
      alert("🌐 Logged in with Google!");
      window.location.href = "index.html";
    })
    .catch((error) => alert("❌ " + error.message));
});
