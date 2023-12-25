import React from 'react'
import './createAccount.css';
import close from './images/close.png';

export default function CreateAccount() {
  return (
    <div className="createAccount-page">
        <div className="createAccount-bg">
            <div className="createAccount-container">
                <button className='close-button'><img className='close-icon' src={close}/></button>
                <h1>Create your Account</h1>
                <form action="/action_page.php">
                    <label for="email">Enter your email address</label><br/>
                    <input type="text" id="email" name="email"/><br/><br/>
                    <label for="username">Enter a username</label><br/>
                    <input type="text" id="username" name="username"/><br/><br/>
                    <label for="password">Enter a Password</label><br/>
                    <input type="text" id="password" name="password" placeholder='xxxxxxxxxxx'/><br/><br/>
                    <label for="confirm-password">Confirm Password</label><br/>
                    <input type="text" id="confirm-password" name="confirm-password" placeholder='xxxxxxxxxxx'/><br/><br/>
                    <input type="checkbox" id='terms-policy'/>
                    <label for="terms-policy" id='terms-policy-label'>Agree to our terms of service and privacy policy.</label>
                    <button className='create-account-button'>Create Account</button>
                </form>
                <p className='create-account-p1'>Already have an account? <strong>Login</strong></p>
            </div>
        </div>
    </div>
  )
}
