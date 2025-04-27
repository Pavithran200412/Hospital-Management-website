import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Background.jpg"; // Import your background image if needed
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling
import { Spinner } from "react-bootstrap"; // Added Bootstrap spinner for loading state

const AdminAppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [showAppointments, setShowAppointments] = useState(false); // State to toggle appointments view
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Using navigate for redirection if needed

  // Function to format time properly (ensure it's in 12-hour AM/PM format)
  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(":");
    let h = parseInt(hour, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12; // Convert 24-hour to 12-hour
    return `${h}:${minute} ${ampm}`;
  };

  // Fetch appointments when the component loads
  useEffect(() => {
    if (showAppointments) {
      const fetchAppointments = async () => {
        setLoading(true); // Start loading
        try {
          const response = await fetch("http://localhost:5000/api/appointments", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch appointments");
          }

          const data = await response.json();
          setAppointments(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false); // End loading
        }
      };

      fetchAppointments();
    }
  }, [showAppointments]); // Only fetch appointments when showAppointments is true

  const handleConfirmAppointment = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/appointments/confirm/${appointmentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to confirm appointment");
      }

      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId ? { ...appointment, confirmed: true } : appointment
        )
      );
      alert("Appointment confirmed!");
    } catch (error) {
      console.error(error);
      alert("Error confirming appointment");
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/appointments/delete/${appointmentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete appointment");
      }

      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment._id !== appointmentId)
      );
      alert("Appointment deleted!");
    } catch (error) {
      console.error(error);
      alert("Error deleting appointment");
    }
  };

  // Filter confirmed and unconfirmed appointments
  const confirmedAppointments = appointments.filter((appointment) => appointment.confirmed);
  const unconfirmedAppointments = appointments.filter((appointment) => !appointment.confirmed);

  return (
    <div className="container py-5">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="#" style={{ color: "white", fontSize: "24px" }}>
          Admin Panel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => navigate("/")}
                style={{ color: "white" }}
              >
              logout
              </a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </nav>

      <h2 className="my-4 text-center text-primary">Appointments</h2>

      {/* Button to show appointments */}
      {!showAppointments && (
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-lg border-0">
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <h5 className="card-title text-danger">Appointments</h5>
                <p className="card-text">View and manage all booked appointments.</p>
                <button
                  className="btn btn-outline-danger mt-3"
                  onClick={() => setShowAppointments(true)} // Show appointments after clicking the button
                >
                  View Appointments
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" role="status" variant="primary" />
          <div>Loading appointments...</div>
        </div>
      )}

      {/* Show confirmed appointments */}
      {showAppointments && !loading && (
        <div className="col-12">
          <h4 className="text-success">Confirmed Appointments</h4>
          {confirmedAppointments.length > 0 ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Specialty</th>
                  <th>Phone</th>
                  <th>Appointment Date</th>
                  <th>Appointment Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {confirmedAppointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.name}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.specialty}</td>
                    <td>{appointment.phone}</td>
                    <td>{appointment.appointmentDate}</td>
                    <td>{formatTime(appointment.appointmentTime)}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm ms-2"
                        onClick={() => handleDeleteAppointment(appointment._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No confirmed appointments available.</p>
          )}

          {/* Unconfirmed Appointments Section */}
          <h4 className="mt-5 text-warning">Unconfirmed Appointments</h4>
          {unconfirmedAppointments.length > 0 ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Specialty</th>
                  <th>Phone</th>
                  <th>Appointment Date</th>
                  <th>Appointment Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {unconfirmedAppointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.name}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.specialty}</td>
                    <td>{appointment.phone}</td>
                    <td>{appointment.appointmentDate}</td>
                    <td>{formatTime(appointment.appointmentTime)}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleConfirmAppointment(appointment._id)}
                      >
                        Confirm
                      </button>
                      <button
                        className="btn btn-danger btn-sm ms-2"
                        onClick={() => handleDeleteAppointment(appointment._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No unconfirmed appointments available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminAppointmentsPage;
