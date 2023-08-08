import React, { useState } from 'react';

const Register = () => {
  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };
  const handleLNameChange = (e) => {
    setLName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    setFName('');
    setLName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      
      <div className="row g-3">
      <div>
          <label>First Name: </label>
          <input type="name" value={FName} onChange={handleFNameChange}  required />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="name"  value={LName} onChange={handleLNameChange} required />
        
      </div>
      </div>
        <div> 
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
