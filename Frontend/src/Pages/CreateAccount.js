import React, { useState } from 'react';
//import React from 'react'
import './createAccount.css';
import LoginPage from './LoginPage';
import axios from 'axios';
import close from './images/close.png';
import { Link } from 'react-router-dom';

export default function CreateAccount() {


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
}
