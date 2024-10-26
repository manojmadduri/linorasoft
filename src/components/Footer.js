// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
<footer class="footer">
        <div class="footer-container">
            {/* <!-- Column 1: Company --> */}
            <div class="footer-column">
                <h3>Company</h3>
                <ul>
                    <li><a href="/About">About Us</a></li>
                    <li><a href="/About">Our Team</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            
            {/* <!-- Column 2: Products --> */}
            <div class="footer-column">
                <h3>Products</h3>
                <ul>
                    <li><a href="#">Product A</a></li>
                    <li><a href="#">Product B</a></li>
                    <li><a href="#">Product C</a></li>
                    <li><a href="#">Product D</a></li>
                    <li><a href="#">Product E</a></li>
                </ul>
            </div>

            {/* <!-- Column 3: Services --> */}
            <div class="footer-column">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">Consulting</a></li>
                    <li><a href="#">Cloud Solutions</a></li>
                    <li><a href="#">Data Analytics</a></li>
                    <li><a href="#">Machine Learning</a></li>
                    <li><a href="#">Support Services</a></li>
                </ul>
            </div>

            {/* <!-- Column 4: Support --> */}
            <div class="footer-column">
                <h3>Support</h3>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="/Contact">Contact Support</a></li>
                    <li><a href="#">Documentation</a></li>
                </ul>
            </div>

            {/* <!-- Column 5: Resources --> */}
            <div class="footer-column">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Community Forums</a></li>
                    <li><a href="#">Webinars</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">White Papers</a></li>
                    <li><a href="#">Developer Tools</a></li>
                </ul>
            </div>
        </div>

        {/* <!-- Footer Bottom Section --> */}
        <div class="footer-bottom">
            <p>&copy; 2024 Linorasoft. All rights reserved.</p>
            <ul class="footer-bottom-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Site Map</a></li>
            </ul>
        </div>
    </footer>
    // <!-- FOOTER CODE END -->
  );
};

export default Footer;
