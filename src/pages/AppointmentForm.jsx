import React, { useState } from "react";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    console.log("Form Data:", formData);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  return (
    <div className="appointment-form-container">
      <div className="container my-5 bg-light p-4 rounded shadow">
        <h2 style={{ color: "#6C4BA4", fontWeight: "bold" }}>
          BOOK APPOINTMENT
        </h2>
        <form onSubmit={handleSubmit} className="row g-3 mt-3">
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
              className="btn btn-outline-secondary w-100"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-modal">
          <div className="popup-content">
            <h4>✅ Appointment Submitted Successfully!</h4>
            <p>Thank you, {formData.name}. We’ll get back to you soon.</p>
            <button className="btn btn-primary" onClick={handleClosePopup}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
