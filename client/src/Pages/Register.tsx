import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse, AxiosError } from 'axios';
import Logo from "../Components/Logo";
import  "./Register.css"
import api from '../api/loginApi'

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseReceived, setResponseReceived] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleApiResponse = async () => {
    
    const userData = { username, email, password};
    
    try {
      const response: AxiosResponse = await api.post('api/auth/register', userData);

      if (response.status == 400) {
        
        return;

      } else {
        // Redirect if user data is available
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error, such as displaying an error message to the user
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const testReceived = handleApiResponse();
      console.log(testReceived);
      // Call function to handle response and redirect
      //handleApiResponse(testReceived);
  
      // Handle success response here, such as redirecting to another page
    } catch (error) {
      console.error('Error:', error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div className='register-card-container'>
      <div className='register-container'>
        <div className="logo-div">
          <Logo />
        </div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className='button-div'>
            <button type="submit">Register</button>
          </div>
          <div className="existing-user-div">
            <p>Existing user? <a href="/login">Login here</a></p>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Register;
