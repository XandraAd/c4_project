/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import './Forms.css';
import Formsbg from '../assets/images/formbg.png'

const SignUpForm = () => {
  const navigate = useNavigate();

  // State to manage form fields and errors
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  });




  // Function to handle form field changes
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission
  const handleSignup = (e) => {
    e.preventDefault();

    // Validation logic
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user.firstName.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstNameError: 'First Name is required.'
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstNameError: ''
      }));
    }

    if (!user.lastName.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastNameError: 'Last Name is required.'
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastNameError: ''
      }));
    }

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

    if (user.confirmPassword !== user.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPasswordError: 'Password must match.'
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPasswordError: ''
      }));
    }

    // If all fields are valid, save user data to local storage
    if (isValid) {
      localStorage.setItem('userData', JSON.stringify(user));
      localStorage.setItem('loggedIn', 'true');
      navigate('/');
    }
  };

  return (
    <>
    <div className='signupForm'>
   
    <div className='formsData'>
      <h2 className='formsheader'>Sign Up</h2>
      <h6>Get started with Shortly</h6>
      <form onSubmit={handleSignup}>
        <div className='firstLast'>
          <div>
            <label className='signupLabel'>
              First Name
              <input
              className='signUpInput'
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
              {errors.firstNameError && <span className="error">{errors.firstNameError}</span>}
            </label>
          </div>
          <div>
            <label  className='signupLabel'>
              Last Name
              <input
              className='signUpInput'
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
              {errors.lastNameError && <span className="error">{errors.lastNameError}</span>}
            </label>
          </div>
        </div>

        <div>
          <label  className='signupLabel'>
            Email
            <input
            className='signUpInputEmail'
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            {errors.emailError && <span className="error">{errors.emailError}</span>}
          </label>
        </div>
        <div>
          <label  className='signupLabel'>
            Password
            <input
              className='signUpInputPassword'
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            {errors.passwordError && <span className="error">{errors.passwordError}</span>}
          </label>
        </div>
        <div>
          <label className='signupLabel'>
            Confirm Password
            <input
            className='signUpInputConfirmPassword'
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPasswordError && <span className="error">{errors.confirmPasswordError}</span>}
          </label>
        </div>
        <div className='signupPrompt'>
          <button type="submit" className='signupBtn'>Sign Up</button>
        </div>
        <p className='signupPrompt'>Already have an account?<Link  to='/login'> Sign in</Link></p>
        <div>
        <span className="material-symbols-outlined passrecsign">
keyboard_backspace
</span>
        <p className='backPrompt'><Link  to='/'>Back</Link></p>
        </div>
   
      </form>
    </div>
    <div>
      <img src={Formsbg} alt="" />
    </div>
    </div>
    </>
   
  );
};

export default SignUpForm;



