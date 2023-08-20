import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making API requests
import './SignUp.css';

const SignupPage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: '',
    isBusinessAccount: false,
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setUserData((prevData) => ({ ...prevData, [id]: newValue }));
  };

  const handleSignUp = async () => {
    if (!userData.agreeToTerms) {
      // Notify the user about agreeing to terms
      return;
    }

    try {
      const response = await axios.post('/http://localhost:3000/api/signup', userData);
      if (response.status === 201) {
        // User successfully signed up, navigate to login page
        navigate('/login');
      } else {
        // Handle other response status codes if needed
      }
    } catch (error) {
      // Handle signup error, display error message to the user
      console.error('Error signing up:', error);
    }
  };

  const handleLogin = () => {
    // Perform login logic here

    // After successful login, navigate to the homepage
    navigate('/loginform');
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
