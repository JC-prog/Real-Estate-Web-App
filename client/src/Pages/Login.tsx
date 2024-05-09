import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../Components/Logo";
import  "./Login.css"


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseReceived, setResponseReceived] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleApiResponse = () => {
    // Assuming you set responseReceived to true upon receiving the response
    setResponseReceived(true);

    // Redirect to a specific route upon receiving the response
    navigate('/');
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }
      
      console.log(response);
      // Call function to handle response and redirect
      handleApiResponse();

      // Handle success response here, such as redirecting to another page
    } catch (error) {
      console.error('Error:', error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div className='login-card-container'>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="logo-div">
            <Logo />
          </div>
          <h2>Login</h2>
          <p>Enter your credentials to access your account</p>
          <div>
            <label htmlFor="username">Username</label><br/>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label><br/>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className='button-div'>
            <button type="submit">Continue</button>
          </div>
        </form>
        <div className="new-user-div">
          <p>Dont have an account? <a href="/register">Create an account</a></p>
          <p>Forget your password? <a href="/register">Click</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
