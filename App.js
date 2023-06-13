import LoginForm from './components/LoginForm';
import React from 'react'
import './App.css';
// impport default style 
import 'rsuite/dist/rsuite.min.css'
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <div className='App'>
        <Routes>
        <Route path="/" element={<Navigate to="/LandingPage" />} />
        <Route path="/landingpage" element={<LandingPage />} />
          <Route path='/loginform' element={<LoginForm/>}></Route>
          <Route path='/signup' element={<SignUpPage/>}></Route>
        </Routes>
      </div>
    </Router>
    </div>

  );
}

export default App;
