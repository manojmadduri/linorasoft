// src/pages/Services.js
import React from 'react';
import '../styles/Services.css';
import image1 from '../images/custom-software-application-development-services-2.jpg'
import image2 from '../images/Identity-and-access-management.jpg'
import image3 from '../images/Untitled.jpg'
import image4 from '../images/lock.jpg'
import image5 from '../images/sm-value-chain01_tcm111-6605088_tcm111-2750237-32.jpg'
import image6 from '../images/DevOps-Consulting-Mobile.png'
import image7 from '../images/Managed-services-3.jpg'
import image8 from '../images/101123684.webp'
import aboutImage from '../images/about-image.jpg';
import TopSection from '../components/TopSection';


// import image9 from '../images'


const Services = () => {
  return (
    <div>
        <TopSection title="Services" subtitle="Explore our full range of IT services and solutions designed to meet your business needs." backgroundImage={aboutImage} />

      {/* Hero Section */}
      {/* <!-- Hero Section for Services Page --> */}
    {/* <section className="hero" id="services">
        <div className="hero-content" data-aos="fade-up" data-aos-duration="1500">
            <h1>Our Services</h1>
            <p>Explore our full range of IT services and solutions designed to meet your business needs.</p>
        </div>
    </section> */}
      {/* <!-- Services Section --> */}
    <section className="services-list">
        <div className="scontainer" data-aos="fade-up" data-aos-duration="1500">
            <h2>What We Offer</h2>
            <div className="services-container">
                {/* <!-- Custom Application Development --> */}
                <div className="service-item" data-aos="fade-right" data-aos-duration="1000">
                    <img src= {image1} />
                    <h3>Custom Application Development</h3>
                    <p>We build custom software solutions tailored to your business needs, from web and mobile applications to enterprise software systems.</p>
                </div>
                {/* <!-- Cloud Infrastructure Management --> */}
                <div className="service-item" data-aos="fade-up" data-aos-duration="1000">
                    <img src= {image2} />
                    <h3>Cloud Infrastructure Management</h3>
                    <p>Our cloud experts help you design, deploy, and manage secure, scalable, and cost-effective cloud infrastructures.</p>
                </div>
                {/* <!-- IT Strategy & Consulting --> */}
                <div className="service-item" data-aos="fade-left" data-aos-duration="1000">
                    <img src= {image3} alt="IT Strategy & Consulting"/>
                    <h3>IT Strategy & Consulting</h3>
                    <p>Gain a strategic advantage with our IT consulting services that align technology with business goals.</p>
                </div>
                {/* <!-- Cybersecurity Solutions --> */}
                <div className="service-item" data-aos="fade-right" data-aos-duration="1000">
                    <img src= {image4} alt="Cybersecurity Solutions"/>
                    <h3>Cybersecurity Solutions</h3>
                    <p>Protect your business from cyber threats with our comprehensive cybersecurity solutions and risk management services.</p>
                </div>
                {/* <!-- Data Analytics & Business Intelligence --> */}
                <div className="service-item" data-aos="fade-up" data-aos-duration="1000">
                    <img src= {image5} alt="Data Analytics & Business Intelligence"/>
                    <h3>Data Analytics & Business Intelligence</h3>
                    <p>Unlock insights from your data with our analytics services, including BI solutions, data warehousing, and advanced analytics.</p>
                </div>
                {/* <!-- DevOps & Continuous Integration --> */}
                <div className="service-item" data-aos="fade-left" data-aos-duration="1000">
                    <img src= {image6} alt="DevOps & Continuous Integration"/>
                    <h3>DevOps & Continuous Integration</h3>
                    <p>Accelerate your software delivery lifecycle with our DevOps solutions, enabling continuous integration and delivery.</p>
                </div>
                {/* <!-- Managed IT Services --> */}
                <div className="service-item" data-aos="fade-right" data-aos-duration="1000">
                    <img src= {image7} alt="Managed IT Services"/>
                    <h3>Managed IT Services</h3>
                    <p>Focus on your core business while we manage your IT operations with our 24/7 managed services and support.</p>
                </div>
                {/* <!-- Digital Transformation --> */}
                <div className="service-item" data-aos="fade-up" data-aos-duration="1000">
                    <img src= {image8} alt="Digital Transformation"/>
                    <h3>Digital Transformation</h3>
                    <p>Transform your business with our digital transformation services, including automation, AI, and modernization.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Services;
