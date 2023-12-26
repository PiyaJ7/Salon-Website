import React from 'react'
import './createAccount.css';
import LoginPage from './LoginPage';
import close from './images/close.png';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
  return (
        <div className="createAccount-page">
            <div className="createAccount-container">                
                <form action="">
                  <button className='close-button'><img className='close-icon' src={close}/></button>
                  <h1>Create your Account</h1>

                  <div className="input-box">                    
                    <input type="text" id="email" name="email" required/>
                    <label for="email">Enter your email address</label>
                  </div>

                  <div className="input-box">
                    <input type="text" id="username" name="username" required/>
                    <label for="username">Enter a username</label>                  
                  </div>

                  <div className="input-box">
                    <input type="password" id="password" name="password" required/>
                    <label for="password">Enter a Password</label>
                  </div>

                  <div className="input-box">
                    <input type="password" id="confirm-password" name="confirm-password" required/>
                    <label for="confirm-password">Confirm Password</label>
                  </div>
                  
                  <label for="terms-policy" id='terms-policy-label'><input type="checkbox" id='terms-policy'/> Agree to our terms of service and privacy policy.</label>
                  <button type='submit' className='create-account-button'>Create Account</button>
                  <p className='create-account-p1'>Already have an account? <strong><Link to="/">Login</Link></strong></p>
                </form>                
            </div>
        </div>
  )
}
