import React, { useState } from 'react';
import './Registerpge.css'
export default function Registerpage() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

  // Function to handle file selection for image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form submitted!');
    console.log('Username:', username);
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Image:', image);
    // Reset form fields
    setUsername('');
    setFullName('');
    setEmail('');
    setPassword('');
    setImage(null);
  };

  return (
    <div className="registration-page">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className='register-frm'>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
