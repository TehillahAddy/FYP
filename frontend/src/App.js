import React from 'react';
import './App.css';
import 'rsuite/dist/rsuite.min.css';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import NewProjectPage from './components/NewProjectPage';
import SurveyCreationPage from './components/SurveyCreationPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SurveyTemplateLibrary from './components/SurveyTemplateLibrary';
import SurveyTemplateDetails from './components/SurveyTemplateDetails';
import CreateSurveyOptions from './components/CreateSurveyOptions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/newproject" element={<NewProjectPage />} />
          <Route path="/survey-creation" element={<SurveyCreationPage />} />
          <Route path="/survey-templates" element={<SurveyTemplateLibrary />} />
          <Route path="/survey-templates/:templateId" element={<SurveyTemplateDetails />} />
          <Route path="/create-survey" element={<CreateSurveyOptions />} />

        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
