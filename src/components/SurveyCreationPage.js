import React, { useState } from 'react';
import './SurveyCreation.css';

const SurveyCreationPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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

  return (
    <div>
      <h1>Create Survey</h1>
      <form>
        <div>
          <label htmlFor="questionType">Select Question Type:</label>
          <select id="questionType" onChange={handleQuestionTypeChange} value={questionType}>
            <option value="" disabled>Select Question Type</option>
            <option value="multiple-choice">Multiple Choice</option>
            <option value="plain-text">Plain Text</option>
            <option value="decimal">Decimal</option>
            <option value="likert-scale">Likert Scale</option>
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

        <button type="button" onClick={handleSaveSurvey} className="save-button-container">
          Save Survey
        </button>
      </form>
    </div>
  );
};

export default SurveyCreationPage;
