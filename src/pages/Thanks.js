// src/pages/ThankYou.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Thanks.css';

const Thanks = () => {
  return (
    <div className="thank-you-page">
      <h1>Thank You for Your Submission!</h1>
      <p>We’ve received your information and will get back to you shortly.</p>
      <Link to="/" className="back-home-btn">Back to Home</Link>
    </div>
  );
};

export default Thanks;
