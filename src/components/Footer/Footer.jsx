import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Left section with logo and description */}
        <div className="footer-logo-section">
          <h2>Logo</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          <p>© DaCode. 2020</p>
        </div>

        {/* Middle section with navigation links */}
        <div className="footer-links">
          <div>
            <h3>Work</h3>
            <ul>
              <li>Blog</li>
              <li>How We Work</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              <li>Marketing Strategy</li>
              <li>Website Optimization</li>
              <li>Email Marketing</li>
            </ul>
          </div>

          <div>
            <h3>Business Solution</h3>
            <ul>
              <li>Partnership</li>
              <li>About Project</li>
              <li>Corporate</li>
            </ul>
          </div>
        </div>

        {/* Language section */}
        <div className="footer-language-section">
          <h3>Language</h3>
          <span>▼</span>
        </div>
      </div>

      {/* Social media section */}
      <div className="footer-social">
        <span>FB</span>
        <span>TW</span>
        <span>IG</span>
      </div>
    </div>
  );
}

export default Footer;
