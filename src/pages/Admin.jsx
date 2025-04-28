import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

const AdminAppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  const [showAppointments, setShowAppointments] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(":");
    let h = parseInt(hour, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${minute} ${ampm}`;
  };

  useEffect(() => {
    if (showAppointments) {
      fetchAppointments();
      fetchUsers();
    }
  }, [showAppointments]);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/appointments");
      if (!response.ok) throw new Error("Failed to fetch appointments");
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users/count");
      if (!response.ok) throw new Error("Failed to fetch user count");
      const data = await response.json();
      setUsers(data.count); // store only the count
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmAppointment = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/appointments/confirm/${appointmentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to confirm appointment");

      setAppointments((prev) =>
        prev.map((appointment) =>
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
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to delete appointment");

      setAppointments((prev) => prev.filter((appointment) => appointment._id !== appointmentId));
      alert("Appointment deleted!");
    } catch (error) {
      console.error(error);
      alert("Error deleting appointment");
    }
  };

  const confirmedAppointments = appointments.filter((a) => a.confirmed);
  const unconfirmedAppointments = appointments.filter((a) => !a.confirmed);

  return (
    <div className="container py-5">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow-sm">
        <span className="navbar-brand" style={{ fontSize: "26px", fontWeight: "600" }}>
          Admin Panel
        </span>
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
              <button
                className="btn btn-outline-light"
                onClick={() => navigate("/")}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Dashboard Cards */}
      <div className="row text-center mb-5">
        <div className="col-md-4 mb-3">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h5>Total Users</h5>
              <h2 className="fw-bold">{users}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h5>Total Appointments</h5>
              <h2 className="fw-bold">{appointments.length}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h5>Confirmed Appointments</h5>
              <h2 className="fw-bold">{confirmedAppointments.length}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Actions */}
      <div className="row text-center mb-5">
        <div className="col-md-2 mb-3">
          <button
            className="btn btn-outline-primary w-100"
            onClick={() => navigate("/add-doctor")}
          >
            Add Doctor
          </button>
        </div>
        <div className="col-md-2 mb-3">
          <button
            className="btn btn-outline-success w-100"
            onClick={() => navigate("/add-service")}
          >
            Add Service
          </button>
        </div>
        <div className="col-md-2 mb-3">
          <button
            className="btn btn-outline-info w-100"
            onClick={() => navigate("/add-event")}
          >
            Add Event
          </button>
        </div>
        <div className="col-md-3 mb-3">
          <button
            className="btn btn-outline-warning w-100"
            onClick={() => navigate("/view-contact-messages")}
          >
            View Contact Messages
          </button>
        </div>
        <div className="col-md-3 mb-3">
          <button
            className="btn btn-outline-danger w-100"
            onClick={() => navigate("/view-feedback")}
          >
            View Feedback
          </button>
        </div>
      </div>

      {/* Appointments Section */}
      <h2 className="my-4 text-center text-primary">Appointments</h2>

      {/* View Appointments Button */}
      {!showAppointments && (
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-lg border-0">
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <h5 className="card-title text-danger">Appointments</h5>
                <p className="card-text">View and manage all booked appointments.</p>
                <button
                  className="btn btn-outline-danger mt-3"
                  onClick={() => setShowAppointments(true)}
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

      {/* Appointments List */}
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
                {confirmedAppointments.map((appointment) => (
                  <tr key={appointment._id}>
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
                {unconfirmedAppointments.map((appointment) => (
                  <tr key={appointment._id}>
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
