// src/pages/Contact.js
import React from 'react';
import '../styles/Contact.css';
// import image3 from '../images'
import contactUsImage from '../images/contactus.jpg';
import TopSection from '../components/TopSection';


const Contact = () => {
  return (
    <div>
        <TopSection data-aos="fade-down" data-aos-duration="1500" title="" subtitle="" backgroundImage={contactUsImage} />
      {/* Hero Section */}
      {/* <!-- Contact Header Section with Animation --> */}
    {/* <header className="contact-header" data-aos="fade-down" data-aos-duration="1500">
        <h1>Contact</h1>
    </header> */}

    {/* <!-- Contact Information Section with Animation --> */}
    <section className="contact-info" data-aos="fade-up" data-aos-duration="1500">
        <div class="contact-info-container">
            {/* <!-- Address Column --> */}
            <div className="contact-info-item" data-aos="fade-right" data-aos-duration="1000">
                <h3>Address</h3>
                <p>500 Terry Francine St.</p>
                <p>San Francisco, CA 94158</p>
            </div>
            {/* <!-- Contact Column --> */}
            <div className="contact-info-item" data-aos="fade-up" data-aos-duration="1000">
                <h3>Contact</h3>
                <p>123-456-7890</p>
                <p>info@mysite.com</p>
                <div className="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            {/* <!-- Opening Hours Column --> */}
            <div className="contact-info-item" data-aos="fade-left" data-aos-duration="1000">
                <h3>Opening Hours</h3>
                <p><strong>Mon - Fri:</strong> 8:00 am – 8:00 pm</p>
                <p><strong>Saturday:</strong> 9:00 am – 7:00 pm</p>
                <p><strong>Sunday:</strong> 9:00 am – 9:00 pm</p>
            </div>
        </div>
    </section>

    {/* <!-- Contact Form and Map Section with Animation --> */}
    <section className="contact-form-map">
        <div className="contact-form-container" data-aos="fade-right" data-aos-duration="1500">
            {/* <!-- Contact Form --> */}
            <form className="contact-form">
                <div className="form-group">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required/>
                </div>
                <div className="form-group">
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" required/>
                </div>
                <div className="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5"></textarea>
                </div>
                <button type="submit" data-aos="zoom-in" data-aos-duration="1000">Send</button>
            </form>
        </div>
        
        {/* <!-- Map Container --> */}
        <div className="map-container" data-aos="fade-left" data-aos-duration="1500">
            {/* <!-- Embed Google Maps --> */}
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5234474301516!2d-122.4183!3d37.7752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b9cbb8f15%3A0x4a7d9d4b0a7b0e4f!2sCivic%20Center%2C%20San%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1638312252345!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
        </div>
    </section>
    </div>
  );
};

export default Contact;
