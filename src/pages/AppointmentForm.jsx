import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Background.jpg"; // Make sure your background styles are here

const AppointmentForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialty: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in (on page load)
  useEffect(() => {
    const token = localStorage.getItem("token"); // or sessionStorage
    if (token) {
      setIsLoggedIn(true);
    } else {
      navigate("/signin"); // Redirect to Sign In page
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      navigate("/signin");
      return;
    }

    setShowPopup(true);
    console.log("Form Data:", formData);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Pass token if needed
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Appointment submitted:", data.message);
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/"); // Navigate to home after closing the popup
  };

  return (
    <div className="appointment-form-container">
      <div className="container my-5 bg-light p-4 rounded shadow">
        <h2 style={{ color: "#6C4BA4", fontWeight: "bold" }}>
          BOOK APPOINTMENT
        </h2>
        <form onSubmit={handleSubmit} className="row g-3 mt-3">
          {/* Form Inputs */}
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <select
              name="specialty"
              className="form-select"
              onChange={handleChange}
              required
            >
              <option value="">Select Speciality</option>
              <option value="Anaesthesiology">Anaesthesiology</option>
              <option value="Dental">Dental</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Diabetology">Diabetology</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="ENT">ENT</option>
              <option value="Fetal Medicine">Fetal Medicine</option>
              <option value="General Medicine">General Medicine</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Lab Services">Lab Services</option>
              <option value="Physiotherapy">Physiotherapy</option>
              <option value="Mental Health">Mental Health</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="date"
              name="appointmentDate"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="time"
              name="appointmentTime"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit & Back Buttons */}
          <div className="col-md-3">
            <button type="submit" className="btn btn-dark w-100">
              Submit
            </button>
          </div>
          <div className="col-md-3">
            <button
              type="button"
              className="btn btn-dark w-100"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Appointment Booked Successfully</h2>
            <button className="btn btn-success" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
