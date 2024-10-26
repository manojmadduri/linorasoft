import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BurgerMenu.css';

const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      {/* Close icon is only visible when menu is open */}
      {isOpen && <div className="close-icon" onClick={toggleMenu}>×</div>}
      <ul>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
