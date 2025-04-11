import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/navbar.css";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Navigation hook

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={Logo} alt="MedCare Hospital and Clinic" />
          <span className="logo-text">MedCare Hospital and Clinic</span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="menu-toggle" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/doctors">DOCTORS</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/events">EVENTS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        {/* Buttons with Navigation */}
        <div className="navbar-buttons">
          <button className="SignIn-btn" onClick={() => navigate("/signin")}>Sign In</button>
          <button className="SignUp-btn" onClick={() => navigate("/signup")}>Sign Up</button>
          <button className="appointment-btn" onClick={() => navigate("/appointment")}>Appointment</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
