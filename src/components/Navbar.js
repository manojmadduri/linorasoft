import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BurgerIcon from './BurgerIcon';
import BurgerMenu from './BurgerMenu';
import '../styles/Navbar.css';
import logoImage from '../images/linorasoft logo_processed.jpeg.jpg';  // Primary logo icon
import logoWithText from '../images/Linorasoft font.jpg'; // Image containing "Linorasoft" text

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
      <Link to="/" className="logo">  {/* Wrap logo in Link */}
        <img src={logoImage} alt="Linorasoft Logo Icon" className="logo-icon" />
        <img src={logoWithText} alt="Linorasoft Logo with Text" className="logo-text-image" />
        </Link>
      </div>
      

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/find-talent">Find a Talent</Link></li>
        <li><Link to="/find-job">Find a Job</Link></li>

        {/* <li><Link to="/faq">Find a job</Link></li> */}
      </ul>

      <div className="contact-button">
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* Burger Icon and Menu for Small Screens */}
      <BurgerIcon toggleMenu={toggleMenu} />
      <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
