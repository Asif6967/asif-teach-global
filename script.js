 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut 
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDDC2FerEy98nKArSq7kQDGOTL7l8J7_To",
  authDomain: "asif-tech-global.firebaseapp.com",
  projectId: "asif-tech-global",
  storageBucket: "asif-tech-global.firebasestorage.app",
  messagingSenderId: "517818851316",
  appId: "1:517818851316:web:3907f548fa9cd57bb463a1"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.signup = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("✅ Account Created Successfully!"))
    .catch(err => alert(err.message));
};

window.login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("🚀 Login Successful!");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert("⚠️ " + err.message));
};

window.googleLogin = () => {
  signInWithPopup(auth, provider)
    .then(() => {
      alert("🌟 Google Login Successful!");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert("⚠️ " + err.message));
};

window.logout = () => {
  signOut(auth)
    .then(() => window.location.href = "login.html");
};
