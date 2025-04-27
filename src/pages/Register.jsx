import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import axios

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: ''
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Send form data to backend
      await axios.post("http://localhost:5000/api/event-register", formData);
      setShowModal(true);

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        event: ''
      });

      // Redirect after 2s
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error registering for event:", error);
      alert("Failed to register. Try again.");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Event Registration</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="shadow p-4 rounded bg-light" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="event" className="form-label">Select Event</label>
              <select
                className="form-select"
                id="event"
                value={formData.event}
                onChange={handleChange}
                required
              >
                <option value="">Select an event</option>
                <option value="Free Health Camp">Free Health Camp</option>
                <option value="Blood Donation Drive">Blood Donation Drive</option>
                <option value="Cardiac Awareness Seminar">Cardiac Awareness Seminar</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit Registration</button>
            <button type="button" className="btn btn-secondary w-100 mt-2" onClick={() => navigate("/")}>Go to Home</button>
            <button type="button" className="btn btn-link text-decoration-none" onClick={() => navigate("/signin")}>
              If you already have an account, click here to login
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Registration Successful!</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>Your registration has been successfully completed.</p>
                <p>Thank you for signing up! We look forward to seeing you at the event.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
