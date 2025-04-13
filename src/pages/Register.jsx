import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: ''
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    // Optionally, clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      event: ''
    });

    // Redirect to the home page after a brief delay (for the modal to show)
    setTimeout(() => {
      navigate("/"); // Redirect to the home page
    }, 2000); // 2-second delay before redirect
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
              />
            </div>

            <div className="mb-3">
              <label htmlFor="event" className="form-label">Select Event</label>
              <select
                className="form-select"
                id="event"
                value={formData.event}
                onChange={handleChange}
              >
                <option>Free Health Camp</option>
                <option>Blood Donation Drive</option>
                <option>Cardiac Awareness Seminar</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit Registration</button>
          </form>
        </div>
      </div>

      {/* Modal for Success */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Registration Successful!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
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
    </div>
  );
};

export default Register;
