// SurveyTemplateLibrary.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SurveyTemplateLibrary.css'; // Add your styles here

const SurveyTemplateLibrary = () => {
  // Sample list of survey templates
  const surveyTemplates = [
    { id: 1, title: 'Customer Satisfaction Survey', industry: 'Retail' },
    { id: 2, title: 'Employee Engagement Survey', industry: 'Human Resources' },
    { id: 3, title: 'Product Feedback Survey', industry: 'Product Management' },
    { id: 4, title: 'Market Research Survey', industry: 'Market Research' },
    { id: 5, title: 'User Experience (UX) Survey', industry: 'Design' },
    { id: 6, title: 'Health and Wellness Survey', industry: 'Healthcare' },
    { id: 7, title: 'Event Feedback Survey', industry: 'Events' },
    { id: 8, title: 'Education Quality Survey', industry: 'Education' },
    { id: 9, title: 'Technology Adoption Survey', industry: 'Technology' },
    { id: 10, title: 'Customer Feedback Survey', industry: 'Customer Service' },
    { id: 11, title: 'Employee Training Needs Assessment', industry: 'Training' },
  { id: 12, title: 'Community Engagement Survey', industry: 'Community Development' },

    // Add more templates here
  ];

  return (
    <div className="survey-template-library">
      <h1>Survey Template Library</h1>
      <div className="template-list">
        {surveyTemplates.map((template) => (
          <div key={template.id} className="template-card">
            <h3>{template.title}</h3>
            <p>Industry: {template.industry}</p>
            <Link to={`/survey-templates/${template.id}`} className="template-details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Link to="/home" className="back-button">
        Back
      </Link>
    </div>
  );
};

export default SurveyTemplateLibrary;
