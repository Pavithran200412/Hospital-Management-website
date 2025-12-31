import React from "react";
import "../assets/css/footer.css"; 
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa"; 
import FooterLogo from "../assets/footer.jpg"; 
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={FooterLogo} alt="MedCare Logo" className="footer-logo" />
          <p className="footer-text">
            MedCare Hospital and Clinic is set to become the modern super specialty hospital and clinic in Tamil Nadu, committed to delivering exceptional medical care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Events">Events</Link></li>
          </ul>
        </div>

        {/* Contact & Location */}
        <div className="footer-contact">
          <h5>Location</h5>
          <p>241, Grand Southern Trunk Rd, near MIT Bridge, Kamakshi Colony, Chromepet,<br /> Chennai, Tamil Nadu 600044</p>
          <h5>Contact Us</h5>
          <p><b>E-Mail Us</b><br /><a href="mailto:info@MedCarehospital.com">info@MedCarehospital.com</a></p>

          {/* Google Map */}
          <div className="footer-map mt-3">
            <h5>Find Us on Google Maps</h5>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799181496!2d-74.25987571760744!3d40.69767006358627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b60165%3A0x8b621f8a7a7d28a4!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633452834502!5m2!1sen!2s"
              style={{ width: "100%", height: "300px", border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
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
        <p>©2025, All Rights Reserved – MedCare Hospital and Clinic, Tamil Nadu <span className="powered-by">| Powered by MedCare.com</span></p>
      </div>
    </footer>
  );
};

export default Footer;
