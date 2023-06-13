import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="top-left-section">
        <div className="bold-text bold-text1">Design.</div>
        <div className="bold-text bold-text2">Deploy.</div>
        <div className="bold-text bold-text3">Insights!</div>
       
      </div>
      
      <div className="header">
        <h1>Welcome to SurveyAce</h1>
        <p>Collect and analyze data with ease!!</p>
      </div>
      <div className="cta-section">
        <h2>Start Creating Surveys Today</h2>
       <Link to="/signup" className="sign-in">Sign Up</Link>
      </div>
      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>Easy survey creation</li>
          <li>Customizable survey templates</li>
          <li>Real-time analytics</li>
          <li>Multi-channel distribution</li>
          <li>Secure data collection</li>
        </ul>
      </div>
      <div className="footer">
        <p>Already have an account?  <Link to="/loginform" className="sign-inn">Sign In</Link></p>
      </div>
    </div>
  );
};

export default LandingPage;
