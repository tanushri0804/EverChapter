import React, { useState } from "react";
import { auth, db, doc, setDoc } from "../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Import home icon
import "./AuthPage.css";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const authInstance = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleAuth = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name?.value;

    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
        await setDoc(doc(db, "users", userCredential.user.uid), { name, email });
        alert("Signup Successful!");
      } else {
        await signInWithEmailAndPassword(authInstance, email, password);
        alert("Login Successful!");
      }
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(authInstance, googleProvider);
      alert("Google Sign-In Successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-modal">
      {/* Navigation Bar */}
      <nav className="auth-navbar">
        <h1 className="auth-logo">EverChapter</h1>
        <FaHome className="home-icon" onClick={() => navigate("/")} />
      </nav>

      <div className="auth-box">
        {/* Left Side - Welcome Text Instead of Image */}
        <div className="auth-welcome">
          <h1>Welcome to EverChapter</h1>
          <p>Your personal library, anywhere, anytime.</p>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form">
          <h2>{isSignup ? "Create an Account" : "Login "}</h2>
          <form onSubmit={handleAuth}>
            {isSignup && <input type="text" name="name" placeholder="Full Name" required />}
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <p className="forgot-password">Forgot Password?</p>
            <button type="submit">{isSignup ? "Sign Up" : "Log In"}</button>
          </form>

          <div className="divider">Or Continue With</div>
          <button className="google-btn" onClick={handleGoogleSignIn}>
            Sign In with Google
          </button>

          <p onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
