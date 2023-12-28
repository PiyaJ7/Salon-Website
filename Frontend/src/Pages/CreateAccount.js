import React, { useState } from 'react';
import React from 'react'
import './createAccount.css';
import LoginPage from './LoginPage';
import close from './images/close.png';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
<<<<<<< HEAD


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const goThere = useNavigate();

  async function signup(e) {
    e.preventDefault();

    const user = {
      name,
      email,
      password


    }

    try {
      const result = (await axios.post("/api/users/register", user)).data;
      setMessage(true);

      setName("");
      setEmail("");
      setPassword("");

      window.location.reload();


    } catch (error) {
      console.log(error);
      setError(true)
    }



  }


  return (
    <div className="back-body">


      <div className="registration-form">
        <form action='POST'>
          <div className="subhead">
            <h2>Create an Account</h2></div>
          <div className="form-icon">
            <span><i className="icon icon-user"></i></span>
          </div>
          <div className="form-group">
            <input type="name" className="form-control item" onChange={(e) => { setName(e.target.value) }} placeholder='User Name' id='' />
            {error && name.length <= 0 ?
              <label className="error">User Name cannot be empty !!</label> : ""}
          </div>


          <div className="form-group">
            <input type="email" className="form-control item" onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' id='' />
            {error && email.length <= 0 ?
              <label className="error">Email cannot be empty !!</label> : ""}
          </div>


          <div className="form-group">
            <input type="password" className="form-control item" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' id='' />
            {error && password.length <= 0 ?
              <label className="error">Password cannot be empty !!</label> : ""}
            <p className="error">{message}</p>
          </div>



          <div className="form-group">
            <center>
              <button type="submit" onClick={signup} className="btn btn-block create-account">Create Account</button>
            </center>
          </div>

          <div className="text">
            <h5>or</h5>
            <p>Already have an account? </p>

            <Link to="/" style={{ textDecoration: 'none' }}><h5>Login</h5></Link>

          </div>



        </form>

      </div>



    </div>
  )
=======
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
>>>>>>> 560f2e0af58d99c22d4cf8041ba5936b9a53feee
}
