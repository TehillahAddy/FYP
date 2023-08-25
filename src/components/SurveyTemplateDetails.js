import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SurveyTemplateDetails.css';
import { Link } from 'react-router-dom';

const SurveyTemplateDetails = () => {
  const { templateId } = useParams();

  // Sample template details data
  const templateDetails = {
    name: 'Customer Satisfaction Survey',
    description:
      'This template helps you gather feedback on customer satisfaction levels for your products and services.',
    imageUrl: 'https://picsum.photos/150', // Replace with your image import
    questions: [
      {
        question: 'How satisfied are you with our product quality?',
        answer: 'Very satisfied',
      },
      {
        question: 'Would you recommend our service to others?',
        answer: 'Definitely',
      },
      {
        question: 'What areas do you think need improvement?',
        answer: 'Delivery times',
      },
    ],
  };

  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  return (
    <div className="template-details-container">
      <div className="template-details">
        <div className="template-header">
          <img src={templateDetails.image} alt={templateDetails.name} className="template-image" />
          <div className="template-info">
            <h2 className="template-details-name">{templateDetails.name}</h2>
            <p className="template-details-description">{templateDetails.description}</p>
          </div>
        </div>

        <h3 className="template-details-heading">Questions</h3>
        <ul className="question-list">
          {templateDetails.questions.map((item, index) => (
            <li key={index} className={`question-item ${expandedQuestion === index ? 'expanded' : ''}`}>
              <div className="question-header" onClick={() => handleQuestionClick(index)}>
                {item.question}
              </div>
              {expandedQuestion === index && <div className="answer">{item.answer}</div>}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/survey-templates" className="back-button">
        Back
      </Link>
    </div>
  );
};

export default SurveyTemplateDetails;
