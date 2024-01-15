import React, { useState } from "react";
//import React from 'react'
import "./createAccount.css";
import LoginPage from "./LoginPage";
import axios from "axios";
import close from "./images/close.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  const [termsChecked, setTermsChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const navigteBack = () => {
    navigate(-1);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      return;
    }

    if (confirmPassword != password) {
      setError("Password and confirm password should me the same");
      return;
    }

    const userData = {
      email,
      username,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/register",
        userData
      );
      console.log(response);
      if (response.status === 201) {
        console.log("Login successful:", response.data);
        navigate("/LoginPage");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="createAccount-page">
      <div className="createAccount-container">
        <form onSubmit={handleSubmit}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} alt="Close" />
          </button>
          <h1>Create your Account</h1>

          <div className="createAcc-input-box">
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              required
            />
            <label htmlFor="email">Enter your email address</label>
            {emailError && <span className="error-message">{emailError}</span>}
          </div>

          <div className="createAcc-input-box">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username">Enter a username</label>
          </div>

          <div className="createAcc-input-box">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Enter a Password</label>
          </div>

          <div className="createAcc-input-box">
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
              required
            />
            <label htmlFor="confirm-password">Confirm Password</label>
            <p className="error-message">{error}</p>
          </div>

          <label htmlFor="terms-policy" id="terms-policy-label">
            <input type="checkbox" id="terms-policy" required />
            Agree to our terms of service and privacy policy.
          </label>

          <button type="submit" className="create-account-button">
            Create Account
          </button>
          <p className="create-account-p1">
            Already have an account?{" "}
            <strong>
              <Link className="createaccount-link" to="/LoginPage">
                Login
              </Link>
            </strong>
          </p>
        </form>
      </div>
    </div>
  );
}
