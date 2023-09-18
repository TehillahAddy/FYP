import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import './ResponseAnalysis.css'; 


const ResponseAnalysisPage = () => {
  // Sample survey response data
  const surveyResponses = {
    labels: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],
    datasets: [
      {
        label: 'Responses',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [5, 3, 4, 2, 6],
      },
    ],
  };

  // State to track selected question
  const [selectedQuestion, setSelectedQuestion] = useState(surveyResponses.labels[0]);

  // State to track responses for the selected question
  const [selectedQuestionResponses, setSelectedQuestionResponses] = useState([]);

  // Function to handle question selection
  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
  };

  // Update selected question responses when the selected question changes
  useEffect(() => {
    // Replace this with actual logic to fetch responses based on the selected question
    const fetchResponses = async () => {
      // Simulate fetching responses based on the selected question
      // Replace with API call or database query
      const responses = [5, 3, 4, 2, 6]; // Sample responses
      setSelectedQuestionResponses(responses);
    };

    fetchResponses();
  }, [selectedQuestion]);

  return (
    <div className="response-analysis-page">
      <h2>Response Analysis</h2>

      {/* Dropdown to select the question for analysis */}
      <select onChange={(e) => handleQuestionSelect(e.target.value)} value={selectedQuestion}>
        {surveyResponses.labels.map((question, index) => (
          <option key={index} value={question}>
            {question}
          </option>
        ))}
      </select>

      {/* Bar chart to visualize responses */}
      <Bar
        data={{
          labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
          datasets: [
            {
              label: 'Responses',
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(75,192,192,0.4)',
              hoverBorderColor: 'rgba(75,192,192,1)',
              data: selectedQuestionResponses,
            },
          ],
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              max: Math.max(...selectedQuestionResponses) + 1,
            },
          },
        }}
      />
    </div>
  );
};

export default ResponseAnalysisPage;
