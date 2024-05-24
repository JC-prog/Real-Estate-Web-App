import React from 'react';
import "./About.css"

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Our Platform</h1>
        <p>Your gateway to the finest properties and real estate opportunities.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At GrpNaem, our mission is to make property search and real estate transactions seamless, transparent, and efficient. We strive to empower property seekers and owners with comprehensive information and innovative tools to make informed decisions.
          </p>
        </section>

        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Founded in 2024, GrpNaem is a online real estate platform dedicated to providing a comprehensive database of properties for sale and rent. Our aim is to connect property seekers with their ideal homes and investment opportunities.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <p>
            <strong>Integrity:</strong> We maintain the highest standards of honesty and transparency in all our dealings.
          </p>
          <p>
            <strong>Customer Focus:</strong> We prioritize the needs and experiences of our users in everything we do.
          </p>
          <p>
            <strong>Innovation:</strong> We continuously innovate to bring the best technology and solutions to our users.
          </p>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or need assistance? Reach out to our support team at <a href="mailto:support@GrpNaem.com">support@GrpNaem.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
