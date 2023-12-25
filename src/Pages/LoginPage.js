import React from 'react'
import './loginPage.css';
import login from './images/login icon.png';
import password from './images/password icon.png';

export default function LoginPage() {
  return (
    <div className="login-page">
        <div className="login-bg">
            <div className="login-page-container">
                <div className="login-image-div">
                    <img className='login-icon' src={login}/>
                </div>
                <div className="login-details">
                    <p className='login-p1'>Log in</p>
                    <div className="username">
                        <img className='username-icon' src={login}/>
                        <input className='username-input' type="text" placeholder='User name' />
                    </div>
                    <div className="password">
                        <img className='password-icon' src={password}/>
                        <input className='password-input' type="text" placeholder='Password' />
                    </div>
                    <button className='login-button'>Login</button>
                    <p className='login-p2'>Don't have an account? <strong>Sign up</strong> </p>
                </div>
            </div>
        </div>
    </div>
  )
}


