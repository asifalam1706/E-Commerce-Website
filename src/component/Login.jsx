import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setEmail('');
    setPassword('');
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  if (showRegister) {
    
    return <Register />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <br />
        <button type="submit" className="btn btn-outline-dark">Login</button>
        <h3 align="center">New User?</h3>
        <button type="submit">
          <NavLink to="/register" className="btn">
          Register</NavLink></button>
      </form>
    </div>
  );
};

const Register = () => {
  
  return (
    <div>
      <h2>Register</h2>
      
    </div>
  );
};

export default Login;
