import React from "react";
import "../assets/css/footer.css"; // Import Footer CSS
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa"; // Correct Import for Icons
import FooterLogo from "../assets/footer.jpg"; // Import Footer Image
import { Link } from "react-router-dom"; // Import Link for navigation

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={FooterLogo} alt="MedCare Logo" className="footer-logo" />
          <p className="footer-text">
            MedCare Hospital and Clinic is set to become the modern super specialty hospital and clinic in Qatar, committed to delivering exceptional medical care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-links">
          <h5>Useful Links</h5>
          <ul>
            <li><Link to="/accreditation">Accreditation</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact & Location */}
        <div className="footer-contact">
          <h5>Location</h5>
          <p>P.O Box 19737<br />Doha, Qatar</p>
          <h5>Contact Us</h5>
          <p><b>E-Mail Us</b><br /><a href="mailto:info@MedCarehospital.com">info@MedCarehospital.com</a></p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className="social-icon" /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="social-icon" /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>©2025, All Rights Reserved – MedCare Hospital and Clinic, Doha-Qatar <span className="powered-by">| Powered by MedCare.com</span></p>
      </div>
    </footer>
  );
};

export default Footer;
