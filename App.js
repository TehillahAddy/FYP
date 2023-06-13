import React from 'react';
import './App.css';
import 'rsuite/dist/rsuite.min.css';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Route path="/" element={<Navigate to="/landingpage" />} />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
