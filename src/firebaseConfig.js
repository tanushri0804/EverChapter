import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "",
  authDomain: "everchapter-2804f.firebaseapp.com",
  projectId: "everchapter-2804f",
  storageBucket: "everchapter-2804f.firebasestorage.app",
  messagingSenderId: "550632994600",
  appId: "1:550632994600:web:0da0d0d4002e93f629c21d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); // 🔥 Firestore initialized

export { auth, googleProvider, db, doc, setDoc, getDoc };
