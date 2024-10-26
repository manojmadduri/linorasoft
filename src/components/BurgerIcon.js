import React from 'react';
import '../styles/BurgerIcon.css';

const BurgerIcon = ({ toggleMenu, isOpen }) => {
  return (
    // Only render BurgerIcon when menu is closed
    !isOpen && (
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    )
  );
};

export default BurgerIcon;
