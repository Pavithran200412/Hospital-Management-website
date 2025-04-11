import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold text-primary">Get in Touch</h2>

        <div className="row g-4">
          {/* Contact Info Section */}
          <div className="col-md-5">
            <div className="bg-white shadow-sm rounded p-4">
              <h4 className="mb-3">Contact Information</h4>
              <p><i className="fas fa-map-marker-alt me-2 text-primary"></i>123 Health Street, MedCity, India</p>
              <p><i className="fas fa-phone me-2 text-success"></i><a href="tel:+911234567890" className="text-dark text-decoration-none">+91 12345 67890</a></p>
              <p><i className="fas fa-envelope me-2 text-danger"></i><a href="mailto:contact@medcare.com" className="text-dark text-decoration-none">contact@medcare.com</a></p>

              <h5 className="mt-4 mb-2">Follow Us</h5>
              <div className="d-flex gap-3 fs-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-info"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-danger"><i className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-md-7">
            <div className="bg-white shadow-sm rounded p-4">
              <h4 className="mb-4">Send Us a Message</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
