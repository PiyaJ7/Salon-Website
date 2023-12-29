import React, { useState } from 'react';
import './loginPage.css';
import { FaUser, FaLock } from "react-icons/fa";
//import React from 'react'
import './loginPage.css';
import close from './images/close.png';
import CreateAccount from './CreateAccount';
import { Link } from 'react-router-dom';

export default function LoginPage() {
<<<<<<< HEAD

    const history = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formError, setFormError] = useState('');

    const validateName = () => {
        if (name.trim() === '') {
            setNameError('Please enter a name');
        } else {
            setNameError('');
        }
    };

    const validateEmail = () => {
        const re = /\S+@\S+\.\S+/;
        if (email.trim() === '') {
            setEmailError('Please enter an email');
        } else if (!re.test(email)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = () => {
        if (password.trim() === '') {
            setPasswordError('Please enter a password');
        } else {
            setPasswordError('');
        }
    };



    async function handleLogin(e) {
        e.preventDefault();

        validateName();
        validateEmail();
        validatePassword();

        if (!nameError && !emailError && !passwordError) {
            try {
                const { data, status } = await axios.post('/api/users/login', {
                    email,
                    password,
                });

                if (status === 200) {

                    localStorage.setItem("currentUser", JSON.stringify(data));
                    history({ state: { id: name } });
                    window.location.href = "/home";

                } else {
                    setFormError('Invalid Credentials.');
                }
            } catch (error) {
                console.log(error);
                setFormError('Invalid Credentials.');
            }
        } else {
            setFormError('Please fill the required fields before submitting.');
        }
    }



    return (
        <div className="back-body">
            <div className="registration-form">
                <form action='POST'>
                    <div className="subhead">
                        <br />
                        <h2>Admins Login</h2>
                    </div>
                    <div className="form-icon">
                        <span><i className="icon icon-user"></i></span>
                    </div>
                    <div className="form-group">

                        <input
                            type="name"
                            className={`form-control item ${nameError ? 'is-invalid' : ''}`}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                validateName();
                            }}
                            placeholder="User Name"
                            id=""
                        />
                        {nameError && <div className="invalid-feedback">{nameError}</div>}
                        {formError && <div className="alert alert-danger">{formError}</div>}

                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            className={`form-control item ${emailError ? 'is-invalid' : ''}`}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                validateEmail();
                            }}
                            placeholder='Email'
                            id='' />
                        {emailError && <div className="invalid-feedback">{emailError}</div>}
                        {formError && <div className="alert alert-danger">{formError}</div>}

                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className={`form-control item ${passwordError ? 'is-invalid' : ''}`}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validatePassword();
                            }}
                            placeholder='Password'
                            id='' />
                        {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                        {formError && <div className="alert alert-danger">{formError}</div>}

                    </div>

                    <center>
                        <div className="form-group">
                            <button type="submit" onClick={handleLogin} className="btn btn-block create-account float-Right ">Login</button>
                        </div>
                    </center>
                    <div className="text">
                        <h5>or</h5>
                        <p>Don't have an account? </p>
                        <a href="#"></a>
                        <Link to="/signup" style={{ textDecoration: "none" }}><h5>Sign Up</h5></Link>
                    </div>

                </form>
            </div>
        </div>
    )
=======
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

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
>>>>>>> 560f2e0af58d99c22d4cf8041ba5936b9a53feee
}
