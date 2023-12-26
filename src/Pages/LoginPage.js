import React from 'react'
import './loginPage.css';
import close from './images/close.png';
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="login-page">
        <div className="loginpage-container">
            <form action=''>
                <button className='close-button'><img className='close-icon' src={close}/></button>
                <h1>Login</h1>
                <div className="input-element">
                    <FaUser className='icon' />
                    <input type="text" placeholder='Username' required/>
                </div>
                <div className="input-element">
                    <FaLock className='icon'/>
                    <input type="password" placeholder='Password' required/>
                </div>
                <button type='submit' className='login-button'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <strong>Sign up</strong></p>
                </div>
            </form>
        </div>
    </div>
  )
}


