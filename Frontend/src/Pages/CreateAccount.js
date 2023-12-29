import React, { useState } from 'react';
//import React from 'react'
import './createAccount.css';
import LoginPage from './LoginPage';
import close from './images/close.png';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const userData = {
      email,
      username,
      password,
    };

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful:', data);
      } else {
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="createAccount-page">
      <div className="createAccount-container">
        <form onSubmit={handleSubmit}>
          <button className='close-button'><img className='close-icon' src={close} alt="Close" /></button>
          <h1>Create your Account</h1>

          <div className="input-box">
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Enter your email address</label>
          </div>

          <div className="input-box">
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

          <div className="input-box">
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

          <div className="input-box">
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label htmlFor="confirm-password">Confirm Password</label>
          </div>

          <label htmlFor="terms-policy" id='terms-policy-label'>
            <input type="checkbox" id='terms-policy' required />
            Agree to our terms of service and privacy policy.
          </label>

          <button type='submit' className='create-account-button'>Create Account</button>
          <p className='create-account-p1'>Already have an account? <strong><Link to="/">Login</Link></strong></p>
        </form>
      </div>
    </div>
  );
}
