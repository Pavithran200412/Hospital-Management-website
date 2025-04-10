import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assets/Background.jpg"; // Import the CSS file

const AppointmentForm = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    medicalHistory: "",
    allergies: "",
    medications: "",
    pastProcedures: "",
    familyHistory: "",
    chronicConditions: "",
    insuranceProvider: "",
    policyNumber: "",
    groupNumber: "",
    policyHolder: "",
    visitReason: "",
    appointmentDate: "",
    doctorPreference: "",
    consentTreatment: false,
    consentSharing: false,
    acknowledgePrivacy: false,
    bloodPressure: "",
    heartRate: "",
    temperature: "",
    weight: "",
    height: "",
    testResults: "",
    emergencyContact: "",
    pharmacy: "",
    accommodations: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment request submitted!");
    console.log("Form Data:", formData);
  };

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        <h2 className="appointment-header">Appointment Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <h4>Personal Information</h4>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" onChange={handleChange} required />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Age</label>
              <input type="number" name="age" className="form-control" onChange={handleChange} required />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Gender</label>
              <select name="gender" className="form-control" onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="tel" name="phone" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea name="address" className="form-control" onChange={handleChange} required />
          </div>

          {/* Medical Information */}
          <h4>Medical History</h4>
          <div className="mb-3">
            <label className="form-label">Past Medical Conditions</label>
            <textarea name="medicalHistory" className="form-control" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Allergies</label>
            <textarea name="allergies" className="form-control" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Current Medications</label>
            <textarea name="medications" className="form-control" onChange={handleChange} />
          </div>

          {/* Insurance Details */}
          <h4>Insurance Information</h4>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Provider</label>
              <input type="text" name="insuranceProvider" className="form-control" onChange={handleChange} />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Policy Number</label>
              <input type="text" name="policyNumber" className="form-control" onChange={handleChange} />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Group Number</label>
              <input type="text" name="groupNumber" className="form-control" onChange={handleChange} />
            </div>
          </div>

          {/* Appointment Details */}
          <h4>Appointment Details</h4>
          <div className="mb-3">
            <label className="form-label">Reason for Visit</label>
            <textarea name="visitReason" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Preferred Date</label>
            <input type="date" name="appointmentDate" className="form-control" onChange={handleChange} required />
          </div>

          {/* Consent */}
          <h4>Consent Forms</h4>
          <div className="form-check">
            <input type="checkbox" name="consentTreatment" className="form-check-input" onChange={handleChange} required />
            <label className="form-check-label">Consent for treatment</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="acknowledgePrivacy" className="form-check-input" onChange={handleChange} required />
            <label className="form-check-label">Acknowledgment of privacy policies</label>
          </div>

          {/* Buttons Section */}
          <div className="d-flex justify-content-between mt-3">
            <button type="submit" className="btn btn-primary w-50 me-2">Submit Appointment</button>
            <button type="button" className="btn btn-secondary w-50" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
