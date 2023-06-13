import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import surveyImage from '/Users/tehillahaddy/rsuite/src/images/survey1.jpeg';
import surveyImage1 from '/Users/tehillahaddy/rsuite/src/images/survey2.jpeg';
import surveyImage2 from '/Users/tehillahaddy/rsuite/src/images/survey3.jpeg';
import surveyImage3 from '/Users/tehillahaddy/rsuite/src/images/survey4.webp';
import surveyImage4 from '/Users/tehillahaddy/rsuite/src/images/survey5.webp'; 

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
        <h2>Start Creating Surveys Today.</h2>
        <Link to="/signup" className="sign-in">Sign Up</Link>
      </div>
      
      <div className="features-section">
        <div className="feature">
        <img src={surveyImage} alt="Feature 1" /> {/* Use the imported image */}
          <h3>Easy survey creation.</h3>
          <p>Create surveys effortlessly using our intuitive and user-friendly interface.</p>
        </div>
        <div className="feature">
          <img src={surveyImage1} alt="Feature 2" />
          <h3>Customizable survey templates.</h3>
          <p>Tailor surveys to your specific needs with a wide range of customization options.</p>
        </div>
        <div className="feature">
          <img src={surveyImage2} alt="Feature 3" />
          <h3>Real-time analytics.</h3>
          <p>Get in-depth analytics and visualize survey results in real-time.</p>
        </div>
        <div className="feature">
          <img src={surveyImage3} alt="Feature 4" />
          <h3>Multi-channel distribution.</h3>
          <p>Distribute surveys through multiple channels to reach your target audience.</p>
        </div>
        <div className="feature">
          <img src={surveyImage4} alt="Feature 5" />
          <h3>Secure data collection.</h3>
          <p>Ensure the security and confidentiality of your survey data.</p>
        </div>
      </div>
      
      <div className="footer">
        <p>Already have an account? <Link to="/loginform" className="sign-inn">Sign In</Link></p>
      </div>
    </div>
    
  );
};

export default LandingPage;
