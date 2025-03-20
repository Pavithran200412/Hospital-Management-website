import React from "react";
import "../assets/css/navbar.css"; // Import CSS
import Logo from "../assets/logo.jpg";  // If it's inside src/assets/

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={Logo} alt="MedCare Hospital and Clinic" />
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><a href="#">DOCTORS</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">INSURANCE</a></li>
          <li><a href="#">EVENTS</a></li>
          <li><a href="#">TAMAM CARD</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>

        {/* Appointment Button */}
        <button className="appointment-btn">Appointment</button>
      </div>
    </nav>
  );
};

export default Navbar;
