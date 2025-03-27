import React from "react";
import "../assets/css/footer.css"; // Import Footer CSS
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTimes } from "react-icons/fa"; // Correct Import for Icons
import FooterLogo from "../assets/footer.jpg"; // Import Footer Image

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
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Departments</a></li>
            <li><a href="#">Facilities</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-links">
          <h5>Useful Links</h5>
          <ul>
            <li><a href="#">Accreditation</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">FAQ</a></li>
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
        <FaFacebookF className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaYoutube className="social-icon" />
        <FaLinkedinIn className="social-icon" />
        <FaTimes className="social-icon" />
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>©2025, All Rights Reserved – MedCare Hospital and Clinic, Doha-Qatar <span className="powered-by">| Powered by MedCare.com</span></p>
      </div>
    </footer>
  );
};

export default Footer;
