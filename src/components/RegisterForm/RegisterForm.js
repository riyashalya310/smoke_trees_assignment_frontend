import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';  // Import the CSS file

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, address })
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        alert('Error: Could not register user');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register User and Address</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
