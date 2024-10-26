import React from 'react';
import '../styles/TopSection.css';
import arrowImage from '../images/arrow.png'; // Update this path to your arrow image file



const TopSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="top-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
      <div className="scroll-arrow">
      <img src={arrowImage} alt="Scroll down" className="arrow" />
      </div>
    </div>
  );
};

export default TopSection;
