// src/pages/Home.js
import React from 'react';
import '../styles/Home.css'; // Home page-specific styling
import TopSection from '../components/TopSection';
import homeImage from '../images/homeTopImage.jpg';



const Home = () => {
  return (
    <div>
        <TopSection title="LinoraSoft" subtitle="" backgroundImage={homeImage} />

    {/* <!-- Hero Section - First Half --> */}
    {/* <section class="hero" id="home">
        <div class="hero-content" data-aos="fade-up" data-aos-duration="1500">
            <h1>Welcome to Linorasoft</h1>
            <p>Empowering Businesses Through Technology Innovation</p>
            <a href="#services" class="cta-button">Explore Our Services</a>
        </div>
    </section> */}

    {/* <!-- Page 2: Why Choose Us - First Half --> */}
    <section class="why-choose-us" id="why-choose-us">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
            <h2>Why Choose Us?</h2>
            <p>With years of experience and a proven track record, Linorasoft is trusted by businesses of all sizes. We deliver exceptional value through our customer-centric approach, technical expertise, and commitment to quality.</p>
            <div class="key-differentiators">
                <div class="differentiator" data-aos="fade-right" data-aos-duration="1000">
                    <h3>Proven Industry Expertise</h3>
                    <p>Expert solutions and services from experienced professionals.</p>
                </div>
                <div class="differentiator" data-aos="fade-up" data-aos-duration="1000">
                    <h3>Customized Solutions</h3>
                    <p>We tailor our services to meet the unique needs of your business.</p>
                </div>
                <div class="differentiator" data-aos="fade-left" data-aos-duration="1000">
                    <h3>24/7 Support</h3>
                    <p>Round-the-clock support to ensure your business runs smoothly.</p>
                </div>
                <div class="differentiator" data-aos="fade-up" data-aos-duration="1000">
                    <h3>Innovative Methodologies</h3>
                    <p>Our innovative approaches drive your business success.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Page 3: Our Solutions at a Glance - Second Half --> */}
    <section class="solutions" id="solutions">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
            <h2>Our Solutions at a Glance</h2>
            <div class="solutions-container">
                <div class="solution" data-aos="flip-left" data-aos-duration="1000">
                    <h3>Custom Application Development</h3>
                    <p>Tailored software solutions for your business.</p>
                </div>
                <div class="solution" data-aos="flip-left" data-aos-duration="1000">
                    <h3>Cloud Solutions</h3>
                    <p>Scalable and secure cloud infrastructure services.</p>
                </div>
                <div class="solution" data-aos="flip-left" data-aos-duration="1000">
                    <h3>IT Strategy & Consulting</h3>
                    <p>Strategic advice and support for IT planning and implementation.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Page 4: Customer Success Stories - Second Half --> */}
    <section class="customer-stories" id="customer-stories">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
            <h2>Customer Success Stories</h2>
            <div class="stories">
                <div class="story" data-aos="fade-right" data-aos-duration="1000">
                    <h3>Financial Services</h3>
                    <p>Helped a financial services company reduce infrastructure costs by 30% through cloud migration.</p>
                </div>
                <div class="story" data-aos="fade-up" data-aos-duration="1000">
                    <h3>Healthcare Provider</h3>
                    <p>Developed a custom CRM solution, resulting in a 50% increase in operational efficiency.</p>
                </div>
                <div class="story" data-aos="fade-left" data-aos-duration="1000">
                    <h3>Retail Industry</h3>
                    <p>Improved online shopping experiences, leading to a 40% boost in sales.</p>
                </div>
            </div>
        </div>
    </section>

      {/* More sections as needed */}
    </div>
  );
};

export default Home;
