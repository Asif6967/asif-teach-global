 // Firebase 9 (Modular SDK) for browser-based static websites

// Import Firebase modules directly from CDN (no npm needed)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// ✅ Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDC2FerEy98nKArSq7kQDGOTL7l8J7_To",
  authDomain: "asif-tech-global.firebaseapp.com",
  projectId: "asif-tech-global",
  storageBucket: "asif-tech-global.firebasestorage.app",
  messagingSenderId: "517818851316",
  appId: "1:517818851316:web:3907f548fa9cd57bb463a1",
  measurementId: "G-4G7P9K65ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ SIGN UP FUNCTION
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Account created successfully ✅"))
    .catch((error) => alert(error.message));
};

// ✅ LOGIN FUNCTION
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful ✅");
      window.location.href = "dashboard.html";
    })
    .catch((error) => alert(error.message));
};

// ✅ GOOGLE LOGIN FUNCTION
window.googleLogin = function () {
  signInWithPopup(auth, provider)
    .then(() => {
      alert("Google Login Successful 🚀");
      window.location.href = "dashboard.html";
    })
    .catch((error) => alert(error.message));
};

// ✅ LOGOUT FUNCTION
window.logout = function () {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully 👋");
      window.location.href = "login.html";
    })
    .catch((error) => alert(error.message));
};

// ✅ AUTH STATE TRACKER
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email);
  } else {
    console.log("User logged out");
  }
});
