import React, { useState } from 'react';
import axios from 'axios';
import './loginPage.css';
import { FaUser, FaLock } from "react-icons/fa";
//import React from 'react'
import './loginPage.css';
import close from './images/close.png';
import CreateAccount from './CreateAccount';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/LoginPage', {username, password})
        .then(result => {console.log(result)
        navigate('http://localhost:3000/')
        })

        const loginData = {
            username,
            password,
        };

        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
                // Navigate to dashboard or set authentication state
            } else {
                console.error('Login failed:', data.message);
                // Display error message to the user
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-page">
            <div className="loginpage-container">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-element">
                        <FaUser className='icon' />
                        <input
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-element">
                        <FaLock className='icon' />
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit' className='login-button'>Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <strong><Link to="/CreateAccount">Sign up</Link></strong></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
