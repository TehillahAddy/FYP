import React, { useState } from 'react';
import './CreateWithAI.css';
import { Link } from 'react-router-dom';

const CreateWithAI = () => {
    const [generatedQuestions, setGeneratedQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateQuestions = async () => {
        // Set loading state while waiting for AI response
        setIsLoading(true);

        try {
            // Simulate a delay to mimic AI response time
            setTimeout(() => {
                const mockQuestions = [
                    'How satisfied are you with our product quality?',
                    'Would you recommend our service to others?',
                    'What areas do you think need improvement?',
                ];
                setGeneratedQuestions(mockQuestions);
                setIsLoading(false);
            }, 2000);
        } catch (error) {
            console.error('Error generating AI questions:', error);
        }
    };

    return (


        <div className="create-with-ai-container">
           
           <div className="top-left-corner">
                <h1>SurveyAce</h1>
            </div>


            <div className="create-with-ai">
                <h2>Create with AI</h2>
                <p>Saves time and creates surveys faster.</p>
                <button onClick={handleGenerateQuestions} disabled={isLoading}>
                    {isLoading ? 'Generating...' : 'Generate AI Questions'}
                </button>
                {generatedQuestions.length > 0 && (
                    <div className="generated-questions">
                        <h3>Generated Questions:</h3>
                        <ul>
                            {generatedQuestions.map((question, index) => (
                                <li key={index}>{question}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <Link to="/create-survey" className="back-button">
                Back
            </Link>


        </div>
    );
};

export default CreateWithAI;
