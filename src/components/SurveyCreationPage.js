import React, { useState } from 'react';
import './SurveyCreation.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faBell, faFolder, faUsers, faBuilding, faMobileAlt, faFile, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import avatar from '/Users/tehillahaddy/rsuite/src/images/avatar-profile-icon_188544-4755.jpg.webp';


const SurveyCreationPage = () => {

  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
      setShowSettings(!showSettings);
  };


  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex,] = useState(0);
  const [questionType, setQuestionType] = useState('');

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const handleQuestionTypeChange = (e) => {
    const { value } = e.target;
    setQuestionType(value);

    // Logic to handle question type change and create question object
    if (value === 'multiple-choice') {
      const question = {
        type: 'multiple-choice',
        text: '',
        options: ['', '', ''],
      };
      addQuestion(question);
    } else if (value === 'plain-text') {
      const question = {
        type: 'plain-text',
        text: '',
        options: [], // For plain-text, we don't need options, so it can be an empty array.
      };
      addQuestion(question);
    } else if (value === 'decimal') {
      const question = {
        type: 'decimal',
        text: 'Sample decimal question text',
        options: [], // Decimals don't have options, so we set it to an empty array
      };
      addQuestion(question);
    } else if (value === 'likert-scale') {
      // Handle Likert Scale question type
      const question = {
        type: 'likert-scale',
        statement: 'Sample statement text',
        options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
        // Add more properties as needed for Likert Scale questions
      };
      addQuestion(question);
    } else if (value === 'yes-no') {
      const question = {
        type: 'yes-no', // Set the question type to 'yes-no'
        text: 'Yes/No Question', // You can set the default question text
        options: ['Yes', 'No'], // Set the options for Yes/No
      };
      addQuestion(question);
    }
  };

  const handleQuestionTextChange = (e) => {
    const { value } = e.target;
    const updatedQuestions = questions.map((question, index) =>
      index === currentQuestionIndex ? { ...question, text: value } : question
    );
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const updatedOptions = [...questions[questionIndex].options];
    updatedOptions[optionIndex] = e.target.value;

    const updatedQuestion = {
      ...questions[questionIndex],
      options: updatedOptions,
    };

    setQuestions((prevQuestions) =>
      prevQuestions.map((question, index) => (index === questionIndex ? updatedQuestion : question))
    );
  };

  const handleAddOption = () => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].options.push('');
    setQuestions(updatedQuestions);
  };

  const handleDeleteOption = (optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleSaveQuestion = () => {
    const updatedQuestions = [...questions];
    const currentQuestion = updatedQuestions[currentQuestionIndex];

    if (questionType === 'likert-scale' && !currentQuestion.statement) {
      alert('Please enter a statement for the Likert Scale question.');
      return;
    }

    if (currentQuestion.text || currentQuestion.options.some((option) => option.trim() !== '')) {
      setQuestions(updatedQuestions);
    } else {
      alert('Please fill in the question text and at least one option.');
    }
  };

  const handleStatementChange = (e) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].statement = value;
    setQuestions(updatedQuestions);
  };

  const handleSaveSurvey = () => {
    // Logic to save the survey data (questions) to the database
    console.log(questions);
  };

  const handleYesNoOptionChange = (optionIndex, newValue) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].options[optionIndex] = newValue;
    setQuestions(updatedQuestions);
  };

  return (
    <div className='SCP'>

      <div className="Share">
        <h1>Share</h1>
        <FontAwesomeIcon icon={faShare} className="share-icon" />
        <FontAwesomeIcon icon={faBell} className="notification-icon" />
      </div>
      <div className="user-profile">
        <img src={avatar} alt="Profile" className="profile-picture" />
        <span className="username">John Doe</span>
      </div>

      {/* Settings Icon */}
      <div className="settings-icon" onClick={toggleSettings}>
        <FontAwesomeIcon icon={faCog} className="settings-icon" />
      </div>

      {/* Settings Menu */}
      {showSettings && (
        <div className="settings-menu">
          <ul>
            <li><button>Profile</button></li>
            <li><button>Account Settings</button></li>
            <li><button>Privacy</button></li>
            <li><button>Notifications</button></li>
            <li><button>Help</button></li>
          </ul>
        </div>
      )}

      <div className="top-left-corner">
        <h1>Create Survey</h1>
      </div>
      <form>
        <div className='SQT'>
          <label htmlFor="questionType">Select Question Type:</label>
          <select id="questionType" onChange={handleQuestionTypeChange} value={questionType}>
            <option value="" disabled>Select Question Type</option>
            <option value="multiple-choice">Multiple Choice</option>
            <option value="plain-text">Plain Text</option>
            <option value="decimal">Decimal</option>
            <option value="likert-scale">Likert Scale</option>
            <option value="yes-no">Yes/No</option> {/* Add the Yes/No option */}
          </select>
        </div>

        {/* Conditionally render the question container based on the selected question type */}
        {questionType === 'multiple-choice' && (
          <div className="question-container show">
            {/* Render each question based on its type */}
            {/* For simplicity, let's assume all questions are multiple-choice */}
            <input
              type="text"
              value={questions[currentQuestionIndex].text}
              onChange={handleQuestionTextChange}
              placeholder="Enter your multiple-choice question here..."
            />
            <ul>
              {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                <div key={optionIndex} className="option-container">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(e, currentQuestionIndex, optionIndex)}
                    placeholder={`Option ${optionIndex + 1}`}
                  />
                  <span role="img" aria-label="Delete" onClick={() => handleDeleteOption(optionIndex)}>
                    🗑️
                  </span>
                </div>
              ))}
            </ul>
            <button type="button" onClick={handleAddOption} className="save-buttonn">
              Add Option
            </button>
            <button type="button" onClick={handleSaveQuestion} className="save-button-containerr">
              Save Question
            </button>
          </div>
        )}

        {questionType === 'plain-text' && (
          <div className="question-container show">
            <input
              type="text"
              value={questions[currentQuestionIndex].text}
              onChange={handleQuestionTextChange}
              placeholder="Enter your Plain Text question here..."
            />
            <button type="button" onClick={handleSaveQuestion} className="save-button containerr">
              Save Question
            </button>
          </div>
        )}

        {questionType === 'decimal' && (
          <div className="question-container show">
            {/* Render the question text input for the decimal type */}
            <input
              type="text"
              value={questions[currentQuestionIndex].text}
              onChange={handleQuestionTextChange}
              placeholder="Enter your Decimal question here..."
            />
            <button type="button" onClick={handleSaveQuestion} className="save-button containerr">
              Save Question
            </button>
          </div>
        )}

        {questionType === 'likert-scale' && (
          <div className="question-container show">
            {/* Render Likert Scale question */}
            <input
              type="text"
              value={questions[currentQuestionIndex].statement}
              onChange={handleStatementChange}
              placeholder="Enter your Likert Scale statement here..."
            />
            <ul>
              {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(e, currentQuestionIndex, optionIndex)}
                    placeholder={`Option ${optionIndex + 1}`}
                  />
                </li>
              ))}
            </ul>
            {/* Add button to save Likert Scale question */}
            <button type="button" onClick={handleSaveQuestion} className="save-button-containerr">
              Save Question
            </button>
          </div>
        )}

        {questionType === 'yes-no' && (
          <div className="question-container show">
            {/* Render Yes/No question */}
            <input
              type="text"
              value={questions[currentQuestionIndex].text}
              onChange={handleQuestionTextChange}
              placeholder="Enter your Yes/No question here..."
              className="question-input"
            />
            <div className="yes-no-options">
              <label>
                <input
                  type="radio"
                  value="Yes"
                  checked={questions[currentQuestionIndex].options[0] === 'Yes'}
                  onChange={(e) => handleYesNoOptionChange(e, currentQuestionIndex, 0)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="No"
                  checked={questions[currentQuestionIndex].options[0] === 'No'}
                  onChange={(e) => handleYesNoOptionChange(e, currentQuestionIndex, 0)}
                />
                No
              </label>
            </div>
            {/* Add button to save Yes/No question */}
            <button type="button" onClick={handleSaveQuestion} className="save-button-containe">
              Save Question
            </button>
          </div>
        )}

        <div className="left-sectionn">

          <Link to="/home">
            <div className="menu-item">
              <FontAwesomeIcon icon={faFolder} className="menu-icon" />
              <span className='menu-text'>Projects</span>
            </div>
          </Link>

          <Link to="/newproject">
            <div className="menu-item">
              <FontAwesomeIcon icon={faFile} className="menu-icon" />
              <span className='menu-text'>New Project</span>
            </div>
          </Link>
          <Link to="/survey-templates">
            <div className="menu-item">
              <FontAwesomeIcon icon={faUsers} className="menu-icon" />
              <span className='menu-text'>Sample Templates</span>
            </div>
          </Link>
          <Link to="/organisations">
            <div className="menu-item">
              <FontAwesomeIcon icon={faBuilding} className="menu-icon" />
              <span className='menu-text'>Organisations</span>
            </div>
          </Link>
          <Link to="/ussd">
            <div className="menu-item">
              <FontAwesomeIcon icon={faMobileAlt} className="menu-icon" />
              <span className='menu-text'>USSD</span>
            </div>
          </Link>
          <Link to="/responses">
            <div className="menu-item">
              <FontAwesomeIcon icon={faFile} className="menu-icon" />
              <span className='menu-text'>Resource Files</span>
            </div>
          </Link>
          <Link to="/">
            <div className="menu-item logout">
              <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon logout-icon" />
              <span className="menu-text">Logout</span>
            </div>
          </Link>
        </div>




        <button type="button" onClick={handleSaveSurvey} className="save-button-container">
          Save Survey
        </button>
      </form>

      <div className="horizontal-line"></div>
      <div className="horizontal-linee"></div>
      <div className="vertical-line-sideways"></div>
      <div className="vertical-line-sideway"></div>
    </div>


  );
};

export default SurveyCreationPage;
