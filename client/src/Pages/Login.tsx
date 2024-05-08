import React, { useState } from 'react';
import Logo from "../Components/Logo";
import  "./Login.css"

interface LoginProps {
  onLogin?: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(onLogin) {
      onLogin(username, password);
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
          <p>New user? <a href="/register">Create an account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
