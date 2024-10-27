// src/pages/Home.js
import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Home page-specific styling
import TopSection from '../components/TopSection';
import homeImage from '../images/homeTopImage.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





// Images for Testimonials and Tech Stack (replace with actual image URLs or imports)
const Home = () => {
    return (
      <div className="home-page">
        <TopSection data-aos="fade-down" data-aos-duration="1500" title="" subtitle="" backgroundImage={homeImage} />

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Linorasoft - Transforming Businesses through Technology</h1>
            <p>
              "Welcome to Linorasoft, where innovation meets expertise. As a premier IT consulting firm, we empower businesses with technology solutions that drive success in the digital age."
            </p>
            <div className="hero-buttons">
              <button className="cta-button">Learn More About Us</button>
              <button className="cta-button">View Our Services</button>
            </div>
          </div>
        </section>
  
        {/* Key Services Section */}
        <section className="services-section">
          <h2>End-to-End Solutions for Digital Success</h2>
          <p>
            "At Linorasoft, we offer a full suite of IT services that covers every stage of the technology lifecycle, ensuring your business stays competitive and future-ready."
          </p>
          <div className="service-list">
            <div className="service-item">
              <h3>Application Development</h3>
              <p>Customized software solutions to meet your business needs.</p>
            </div>
            <div className="service-item">
              <h3>IT Strategy and Consulting</h3>
              <p>Strategic guidance to align technology with your business goals.</p>
            </div>
            <div className="service-item">
              <h3>Infrastructure Services</h3>
              <p>Robust infrastructure solutions for seamless operations and security.</p>
            </div>
          </div>
          <button className="cta-button">Explore All Services</button>
        </section>
  

      </div>
    );
  };
  
  export default Home;