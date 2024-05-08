import React, { useState } from 'react';
import Logo from "../Components/Logo";
import  "./Register.css"

interface RegisterProps {
  onRegister?: (username: string, email: string, password: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onRegister) {
      onRegister(username, email, password);
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
