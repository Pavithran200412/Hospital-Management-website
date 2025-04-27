import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminAppointmentsPage = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [showAppointments, setShowAppointments] = useState(false); // State to toggle appointments view

  // Fetch appointments when the component loads
  useEffect(() => {
    if (showAppointments) {
      const fetchAppointments = async () => {
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

      setAppointments(appointments.filter((appointment) => appointment._id !== appointmentId)); // Remove the confirmed appointment from the list
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

      setAppointments(appointments.filter((appointment) => appointment._id !== appointmentId)); // Remove the deleted appointment from the list
      alert("Appointment deleted!");
    } catch (error) {
      console.error(error);
      alert("Error deleting appointment");
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Appointments</h2>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center d-flex flex-column justify-content-between">
              <h5 className="card-title text-danger">Appointments</h5>
              <p className="card-text">View all booked appointments.</p>
              <button
                className="btn btn-outline-danger mt-3"
                onClick={() => setShowAppointments(true)} // Only show appointments after clicking the button
              >
                View Appointments
              </button>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        {showAppointments && (
          <div className="col-12">
            <h4>All Booked Appointments</h4>
            {appointments.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Specialty</th>
                    <th>Phone</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Actions</th> {/* Added Actions column */}
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr key={index}>
                      <td>{appointment.name}</td>
                      <td>{appointment.email}</td>
                      <td>{appointment.specialty}</td>
                      <td>{appointment.phone}</td>
                      <td>{appointment.appointmentDate}</td>
                      <td>{appointment.appointmentTime}</td>
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
              <p>No appointments available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAppointmentsPage;
