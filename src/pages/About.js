import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';
import image1 from "../images/people-business-meeting-high-angle_23-2148911819.avif";
import aboutImage from '../images/about-image.jpg';
import TopSection from '../components/TopSection';
import handShakeImage from "../images/handshake_vision_mission.jpeg"
import whatWeAreImage from "../images/what_we_are.jpg"
import whyChooseUsImage from '../images/whyChooseUs.webp'


const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="about-page">
        <TopSection title="About Us" subtitle="Learn more about our mission and team" backgroundImage={aboutImage} />
      {/* Hero Section */}
      <section className="hero" id="about-hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>Who We Are</h1>
          <p>
            Linorasoft was founded in 2024 with a mission to empower businesses
            through cutting-edge technology solutions. With a team of passionate,
            forward-thinking technologists, we aim to deliver impactful IT consulting
            and development services that cater to modern business needs.
          </p>
          
        </div>
        <img
            src= {image1} // Replace with your hero image
            alt="Team collaborating in a modern workspace"
            className="hero-image" data-aos="fade-right"
          />
      </section>

      {/* Mission, Vision, and Values */}
      <section className="mission-vision" id="mission-vision">
        <div className="container" data-aos="fade-up">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>To redefine the future of IT consulting with client-centered, adaptable, and innovative solutions.</p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>To become a trusted partner for businesses worldwide, driving digital transformation through a modern, agile approach.</p>
          </div>
          <div className="values">
            <h2>Our Values</h2>
            <p>Integrity, Innovation, and Client Success.</p>
          </div>
          <img
            src= {handShakeImage} // Replace with your mission/values graphics
            alt="Mission and Values Graphics"
            className="mission-values-image"
          />
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="unique-approach" id="unique-approach">
        <div className="container" data-aos="fade-up">
          <h2>What Sets Us Apart</h2>
          <div className="unique-points">
            <div className="point" data-aos="fade-right">
              <h3>Client-Focused Approach</h3>
              <p>We build personalized solutions, truly understanding each client’s unique challenges and goals.</p>
            </div>
            <div className="point" data-aos="fade-up">
              <h3>Innovative Solutions</h3>
              <p>Our team stays at the forefront of technology trends, ensuring that we bring the latest and most effective tools to our clients.</p>
            </div>
            <div className="point" data-aos="fade-left">
              <h3>Future-Ready Technology</h3>
              <p>With an emphasis on scalable, secure, and efficient solutions, we help our clients prepare for long-term success.</p>
            </div>
          </div>
          <img
            src= {whatWeAreImage} // Replace with your technology visuals
            alt="Technology and client-focused visuals"
            className="unique-image"
          />
        </div>
      </section>

      {/* Why Choose Linorasoft Section */}
      <section className="why-choose" id="why-choose">
        <div className="container" data-aos="fade-up">
          <h2>Why Choose Linorasoft</h2>
          <p>
            With Linorasoft, you are choosing a fresh, innovative partner that’s committed to making your technology ambitions a reality.
            We combine agile methodologies with a personal approach to help businesses scale and transform efficiently.
          </p>
          <img
            src= {whyChooseUsImage} // Replace with your success icons/graphics
            alt="Dynamic visuals representing growth and success"
            className="choose-image"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
