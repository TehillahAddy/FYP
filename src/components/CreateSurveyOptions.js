import React from 'react';
import { Link } from 'react-router-dom';
import './CreateSurveyOptions.css';
import { Icon } from '@iconify/react';

const CreateSurveyOptions = () => {
  return (
    <div className="create-survey-options">
        <h2>Create a new Survey!</h2>
      <div className="option">
      <Icon icon="fluent-emoji-flat:plus" style={{ fontSize: '4rem' }} />
        <h3 className="option-title">Start From Scratch</h3>
        <p className="option-description">Jump right in and build something beautiful.</p>
        <Link to="/newproject" className="option-button">
          Start
        </Link>
      </div>
      <div className="option">
      <Icon icon="arcticons:questionnaire-star" style={{ fontSize: '4rem' }}  />
        <h3 className="option-title">Use a Template</h3>
        <p className="option-description">Pick a premade survey and customize as you please.</p>
        <Link to="/survey-templates" className="option-button">
          Choose
        </Link>
      </div>
      <div className="option">
      <Icon icon="vscode-icons:file-type-ai" style={{ fontSize: '4rem' }}  />
        <h3 className="option-title">Create with AI</h3>
        <p className="option-description">Saves time and creates surveys faster. Let AI handle the first draft</p>
        <Link to="/create-with-ai" className="option-button">
          Create
        </Link>
      </div>
      <Link to="/home" className="back-button">
        Back
      </Link>
    </div>
  );
};

export default CreateSurveyOptions;
