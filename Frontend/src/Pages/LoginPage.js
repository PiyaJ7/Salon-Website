import React from 'react'
import './loginPage.css';
import close from './images/close.png';
import { FaUser, FaLock } from "react-icons/fa";
import CreateAccount from './CreateAccount';
import { Link } from 'react-router-dom';

export default function LoginPage() {

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
}


