import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here

    // After successful login, navigate to the homepage
    navigate('/home');
  };

  return (
    <div>
      <h1 className="logo">SurveyAce</h1>
      <div className="login-page">
        <h2>Login</h2>

        <div className="username-container">
          <input type="text" id="username" placeholder="Username:" />
        </div>

        <div className="password-container">
          <input type="password" id="password" placeholder="Password:" />
        </div>

        <div className="remember-me-container">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>

        <button type="submit" onClick={handleLogin}>Login</button>

        <p className="terms-and-conditions">
          Forgot Password?
        </p>

        <p className="terms-and-conditions">
          <a href="/signup">Sign Up for free</a>
        </p>
      </div>
      <div className="footer">
        Version 1.1
      </div>
    </div>
  );
};

export default LoginForm;
