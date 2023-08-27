import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        username: username,
        password: password
      });

      if (response.status === 200) {
        toast.success('Successfully logged in');
        navigate('/home');
      } else {
        toast.error('Invalid username or password');
      }
    } catch (error) {
      console.log(error);
      toast.error('Invalid username or password');
    }

  };

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <h1 className="logo">SurveyAce</h1>
      <div className="login-page">
        <h2>Login</h2>

        <div className="username-container">
          <input type="text" placeholder="Username:" onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="password-container">
          <input type="password" placeholder="Password:" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit">Login</button>
        </div>

        <p className="terms-and-conditions">
          <a href="/signup">Sign Up for free</a>
        </p>
      </div>
      <div className="footer">
        Version 1.1
      </div>
    </form>
  );
};

export default LoginForm;
