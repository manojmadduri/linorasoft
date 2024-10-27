// src/pages/FindTalent.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FindTalent.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import findATalentImage from '../images/findTalent.jpg';
import TopSection from '../components/TopSection';

const FindTalent = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="find-talent-page">
        <TopSection title="Find A Talent" subtitle="Find the Right Resource" backgroundImage={findATalentImage} />
      {/* Main Content Section */}
      <section className="main-content">
        <div className="content" data-aos="fade-right">
          <h1>Discover Top Talent</h1>
          <h2>Partner with Experts for Success</h2>
          <p className="intro-paragraph">
            At Linorasoft, we bridge the gap between exceptional talent and ambitious companies. Our commitment is to provide hand-picked, highly skilled professionals who are aligned with your business goals.
          </p>
          <ul className="highlights-list">
            <li><strong>Customized Solutions:</strong> We understand each client’s unique requirements, creating personalized hiring solutions.</li>
            <li><strong>Deep Industry Expertise:</strong> Our team is composed of specialists from various fields, ensuring the right match for each role.</li>
            <li><strong>Seamless Integration:</strong> We focus on long-term success by helping talents seamlessly integrate with your team and work culture.</li>
          </ul>
        </div>

        <div className="buttons" data-aos="fade-left">
          <Link to="/request-talent" className="button primary-button">Request Talent</Link>
          <Link to="/expertise" className="button secondary-button">Our Expertise</Link>
          <Link to="/faq" className="button secondary-button">FAQ for Hiring Managers</Link>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section" data-aos="fade-up">
        <h2>Submit Your Requirements</h2>
        <p className="form-intro">Fill out the form below to connect with us. We’ll reach out to discuss your talent needs and how we can assist.</p>
        <form
        action="https://formsubmit.co/manojkakashi8@gmail.com" // Replace with your email address
        method="POST"
        className="talent-form"
      >
          <label>First Name<span>*</span></label>
          <input type="text" name="firstName" required />

          <label>Last Name<span>*</span></label>
          <input type="text" name="lastName" required />

          <label>Email<span>*</span></label>
          <input type="email" name="email" required />

          <label>Company<span>*</span></label>
          <input type="text" name="company" required />

          <label>Location<span>*</span></label>
          <input type="text" name="location" required />

          <label>Phone Number<span>*</span></label>
          <input type="tel" name="phone" required />

          <label>Briefly Describe Your Needs<span>*</span></label>
          <textarea name="details" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default FindTalent;
