import React from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here

    // After successful login, navigate to the homepage
    navigate('/home');
  };

  return (
    <div>
      <h1 className="logo">SurveyAce</h1>
      <div className="signup-page">
        <h2>Sign Up for SurveyAce.</h2>

        <div className="username-container">
          <input type="text" id="username" placeholder="Username:" />
        </div>

        <p className="terms-and-conditionss">
          Provide at least one contact detail.
        </p>

        <div className="sub-container">
          <div className="email-container">
            <input type="email" id="email" placeholder="Email:" />
          </div>

          <div className="phone-container">
            <input type="tel" id="phone" placeholder="Phonenumber:" />
          </div>
        </div>

        <div className="business-account-container">
          <input type="checkbox" id="business-account" />
          <label htmlFor="business-account">Business Account?</label>
        </div>

        <div className="name-container">
          <div className="first-name-container">
            <input type="text" id="first-name" placeholder="Firstname:" />
          </div>

          <div className="last-name-container">
            <input type="text" id="last-name" placeholder="Lastname:" />
          </div>
        </div>

        <div className="password-container">
          <input type="password" id="password" placeholder="Password:" />
        </div>

        <div className="confirm-password-container">
          <input type="password" id="confirm-password" placeholder="Confirm Password:" />
        </div>

        <p className="terms-and-conditions">
          Read our Terms and Conditions
        </p>

        <div className="business-account-container">
          <input type="checkbox" id="business-account" />
          <label htmlFor="business-account">I agree to the terms and conditions?</label>
        </div>


        <button type="submit" onClick={handleLogin}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignupPage;
