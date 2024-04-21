import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

import './App.css';


const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Handle login logic here
    console.log('Logging in with:');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleRegister = (username: string, email: string, password: string) => {
    // Handle registration logic here
    console.log('Registering with:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
      </Routes>
    </Router>
  );
};
export default App;
