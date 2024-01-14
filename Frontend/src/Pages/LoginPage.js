import React, { useState } from "react";
import axios from "axios";
import "./loginPage.css";
import { FaUser, FaLock } from "react-icons/fa";
//import React from 'react'
import "./loginPage.css";
import close from "./images/close.png";
import CreateAccount from "./CreateAccount";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      username,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        loginData
      );
      console.log(response);
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        navigate("/Dashboard");
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError("Incorrect username or Password. Please try again.");
      return;
    }
  };

  const handleInputChange = () => {
    setError(null);
  };

  return (
    <div className="login-page">
      <div className="loginpage-container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-element">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                handleInputChange();
              }}
              required
            />
          </div>
          <div className="input-element">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handleInputChange();
              }}
              required
            />
          </div>
          {error && <div className="login-error-message">{error}</div>}
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <strong>
                <Link to="/CreateAccount">Sign up</Link>
              </strong>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
