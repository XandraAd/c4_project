/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Formsbg from '../assets/images/formbg.png'

import './Forms.css';

const Login = () => {
  const navigate = useNavigate();

  // State to manage form fields and errors
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: ''
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission (user login)
  const handleLogin = (e) => {
    e.preventDefault();

    // Validation logic
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user.email.trim() || !emailRegex.test(user.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: 'Please enter a valid email address.'
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: ''
      }));
    }

    if (user.password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: 'Password must be at least 6 characters long.'
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: ''
      }));
    }

    // If all fields are valid, perform login logic
    if (isValid) {
      // Simulating login logic - you can replace this with your authentication mechanism
      // For instance, checking credentials against a database or authentication service
      // For now, let's just save to local storage and redirect to home
      localStorage.setItem('userData', JSON.stringify(user));
      localStorage.setItem('loggedIn', 'true');
      navigate('/');
    }
  };

  return (
    <>
    <div className='loginForm'>
    <div className='formsData'>
      <h2 className='dataHeader'>Login</h2>
      <h6>Get started with Shortly</h6>
      <form onSubmit={handleLogin}>
        <div>
          <label className='loginLabel'>
            Email
            <input
              className='loginInput'
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            {errors.emailError && <span className="error">{errors.emailError}</span>}
          </label>
        </div>
        <div>
          <label className='loginLabel'>
            Password
            <input
            className='loginInput'
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            {errors.passwordError && <span className="error">{errors.passwordError}</span>}
          </label>
        </div>

        <p className='forgotPass'><Link to='/passRecovery'>forgot password ?</Link> </p>
        <div>
          <button type="submit" className='loginBtn'>Login</button>
        </div>
        <p className='registerPrompt'>Don’t have an account yet?<Link  to='/signup'> Sign Up</Link> </p>
      </form>
    </div>
    <div>
      <img src={Formsbg} alt="" />
    </div></div>
    </>
   
  );
};

export default Login;
