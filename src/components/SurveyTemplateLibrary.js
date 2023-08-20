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
    </div>
  );
};

export default SurveyTemplateLibrary;
