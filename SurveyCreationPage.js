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
    // For simplicity, let's assume all questions are multiple-choice
    if (value === 'multiple-choice') {
      const question = {
        type: 'multiple-choice',
        text: '',
        options: ['', '', ''],
        // Add more properties as needed for other question types
      };
      addQuestion(question);
    }
  };

  const handleQuestionTextChange = (e) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].text = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (e, optionIndex) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddOption = () => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].options.push('');
    setQuestions(updatedQuestions);
  };

  const handleSaveSurvey = () => {
    // Logic to save the survey data (questions) to the database
    console.log(questions);
  };

  const handleDeleteOption = (optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleDeleteQuestion = () => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(currentQuestionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleSaveQuestion = (questionIndex, newText, newOptions) => {
    const updatedQuestions = [...questions];
    const updatedQuestion = { ...updatedQuestions[questionIndex] };
    updatedQuestion.text = newText;
    updatedQuestion.options = newOptions;
    updatedQuestions[questionIndex] = updatedQuestion;
    setQuestions(updatedQuestions);
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
            {/* Add other question types as options */}
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
                    onChange={(e) => handleOptionChange(e, optionIndex)}
                    placeholder={`Option ${optionIndex + 1}`}
                  />
                  <span role="img" aria-label="Delete" onClick={() => handleDeleteOption(optionIndex)}>
                    🗑️
                  </span>
                </div>
              ))}
            </ul>
            <button type="button"  onClick={handleAddOption} className="save-button"> 
              Add Option </button>
            <button
              type="button"
              onClick={() =>
                handleSaveQuestion(currentQuestionIndex, questions[currentQuestionIndex].text, questions[currentQuestionIndex].options)
              } className="save-button-containerr"
            >
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
