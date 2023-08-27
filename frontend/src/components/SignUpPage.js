import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making API requests
import './SignUp.css';
import { toast } from 'react-toastify';

const SignupPage = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isBusinessAccount, setIsBusinessAccount] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isAgreeToTerms, setIsAgreeToTerms] = useState(false);


  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isAgreeToTerms) {
      return toast.error('Please agree to the terms and conditions');
    }

    if (password !== confirmPassword) {
      return toast.error('Passwords do not match');
    } else if (password.length < 8) {
      return toast.error('Password must be at least 8 characters');
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/register', {

        username: userName,
        email: email,
        phoneNumber: phoneNumber,
        isBusiness: isBusinessAccount,
        firstName: firstName,
        lastName: lastName,
        password: password
      });

      if (response.status === 200) {
        toast.success('Successfully signed up');
        navigate('/login');
      } else {
        toast.error('Error signing up');
      }
    } catch (error) {
      toast.error('Error signing up');
    }
  };

  return (
    <form onSubmit={(e) => handleSignUp(e)}
    >
      <h1 className="logo">SurveyAce</h1>
      <div className="signup-page">
        <h2>Sign Up for SurveyAce.</h2>

        <div className="username-container">
          <input type="text" id="username" placeholder="Username:" required
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>

        <p className="terms-and-conditionss">
          Provide at least one contact detail.
        </p>

        <div className="sub-container">
          <div className="email-container">
            <input type="email" id="email" placeholder="Email:" required
              onChange={(event) => {
                setEmail(event.target.value);
              }} />
          </div>

          <div className="phone-container">
            <input type="tel" id="phone" placeholder="Phonenumber:" required
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }} />
          </div>
        </div>

        <div className="business-account-container">
          <input type="checkbox" id="business-account" required
            onChange={(event) => {
              setIsBusinessAccount(event.target.checked);
            }} />
          <label htmlFor="business-account">Business Account?</label>
        </div>

        <div className="name-container">
          <div className="first-name-container">
            <input type="text" id="first-name" placeholder="Firstname:" required
              onChange={(event) => {
                setFirstName(event.target.value);
              }} />
          </div>

          <div className="last-name-container">
            <input type="text" id="last-name" placeholder="Lastname:" required
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="password-container">
          <input type="password" id="password" placeholder="Password:" required
            onChange={(event) => {
              setPassword(event.target.value);
            }} />
        </div>

        <div className="confirm-password-container">
          <input type="password" id="confirm-password" placeholder="Confirm Password:" required
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </div>

        <p className="terms-and-conditions">
          Read our Terms and Conditions
        </p>

        <div className="business-account-container">
          <input type="checkbox" id="business-account"
            onChange={(event) => {
              setIsAgreeToTerms(event.target.checked);
            }} />
          <label htmlFor="business-account">I agree to the terms and conditions?</label>
        </div>


        <button id="submitBtn" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupPage;
