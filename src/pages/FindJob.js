import React from 'react';
import '../styles/FindJob.css';
import findAJobtImage from '../images/FindAJob.jpg';
import TopSection from '../components/TopSection';


const FindJob = () => {
  return (
<div className="find-job-page">
        <TopSection title="Find A Job" subtitle="Find the Right Job" backgroundImage={findAJobtImage} />
    <div className='flexdev'>
        {/* Left Sidebar */}
        <aside className="find-job-sidebar">
        <section className="sidebar-section">
          <h2>Join Our Team</h2>
          <p>Explore Career Opportunities at Linorasoft</p>
          <p>At Linorasoft, we’re passionate about technology and innovation, and we’re looking for like-minded individuals to join our growing team.</p>
        </section>

        <section className="sidebar-section">
          <h3>Our Culture</h3>
          <p>We believe in collaboration, continuous learning, and celebrating success. Our values of integrity, innovation, and a client-first mindset drive us to deliver exceptional technology solutions.</p>
        </section>

        <section className="sidebar-section">
          <h3>Why Work with Us?</h3>
          <ul>
            <li><strong>Innovative Projects:</strong> Be part of cutting-edge projects.</li>
            <li><strong>Career Growth:</strong> Opportunities for development and advancement.</li>
            <li><strong>Work-Life Balance:</strong> Flexible work options and benefits.</li>
            <li><strong>Inclusive Culture:</strong> Join a diverse and inclusive team.</li>
          </ul>
        </section>

        <section className="sidebar-section">
          <h3>Open Positions</h3>
          <ul>
            <li>
              <strong>Software Developer</strong>
              <p>Develop, test, and maintain high-quality software applications.</p>
            </li>
            <li>
              <strong>IT Consultant</strong>
              <p>Advise clients on tech solutions, design strategies, and implement transformations.</p>
            </li>
            <li>
              <strong>Project Manager</strong>
              <p>Oversee project lifecycles, manage resources, and ensure timely delivery.</p>
            </li>
            {/* Add more positions as needed */}
          </ul>
        </section>

        <section className="sidebar-section">
          <h3>Our Hiring Process</h3>
          <ol>
            <li>Apply Online</li>
            <li>Initial Interview</li>
            <li>Technical Assessment (if applicable)</li>
            <li>Final Interview</li>
            <li>Offer and Onboarding</li>
          </ol>
        </section>

        <section className="sidebar-section">
          <h3>Employee Benefits</h3>
          <ul>
            <li>Competitive Salaries and performance-based bonuses</li>
            <li>Health and Wellness benefits</li>
            <li>Learning Opportunities</li>
            <li>Flexible Working Arrangements</li>
            <li>Paid Time Off</li>
          </ul>
        </section>
      </aside>

      {/* Job Search Main Content */}
      <main className="find-job-main">
       {/* Job Search Main Content */}
      <main className="find-job-main">
        {/* Filter Section */}
        <div className="job-filter-section">
          <input type="text" placeholder="Job Title" className="filter-input" />
          <select className="filter-select">
            <option>Select Country</option>
            {/* Add options as needed */}
          </select>
          <select className="filter-select">
            <option>Select State</option>
            {/* Add options as needed */}
          </select>
          <input type="text" placeholder="City" className="filter-input" />
          <select className="filter-select">
            <option>Status</option>
            {/* Add options as needed */}
          </select>
          <button className="filter-search-button">Search</button>
          <button className="filter-reset-button">Reset</button>
        </div>

        {/* Job Results Section */}
        <div className="job-results">
          <p className="results-info">Showing 1 to 20 of 8157 results</p>

          {/* Example Job Cards */}
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="job-card">
              <h3 className="job-title">Job Title {idx + 1}</h3>
              <p className="job-location">Location, United States | 1 day ago</p>
              <p className="job-description">Brief job description goes here...</p>
            </div>
          ))}

          {/* Pagination */}
          <div className="pagination">
            <span className="page-number active">1</span>
            <span className="page-number">2</span>
            <span className="page-number">3</span>
            <span className="page-number">4</span>
            <span className="page-number">5</span>
          </div>
        </div>
      </main>
      </main>
      </div>
    </div>
  );
};

export default FindJob;
