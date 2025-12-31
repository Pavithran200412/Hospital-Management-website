import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar"; 

import Event1 from "../assets/Events/event1.jpg";
import Event2 from "../assets/Events/event2.png";
import Event3 from "../assets/Events/event3.jpg";

const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: "Free Health Camp",
      date: "April 20, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "MedCare Hospital Grounds",
      description: "Join our free health check-up camp. Get your vitals, sugar, BP, and basic diagnostics done for free. Talk to our doctors one-on-one.",
      status: "Upcoming",
      image: Event1,
      tag: "Health Camp"
    },
    {
      title: "Blood Donation Drive",
      date: "May 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Hall, MedCare",
      description: "Be a hero! Donate blood and save lives. All donors will get a certificate and refreshments.",
      status: "Upcoming",
      image: Event2,
      tag: "Awareness"
    },
    {
      title: "Cardiac Awareness Seminar",
      date: "May 18, 2025",
      time: "11:00 AM - 1:00 PM",
      location: "Auditorium - Block A",
      description: "Top cardiologists discuss preventive measures, lifestyle choices, and treatments for heart-related issues.",
      status: "Upcoming",
      image: Event3,
      tag: "Seminar"
    }
  ];

  return (
    <>
      <Navbar /> {/* ✅ Navbar added here */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">Upcoming Events at MedCare</h2>
        <div className="row">
          {events.map((event, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={event.image} className="card-img-top" alt={event.title} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-secondary mb-2">{event.tag}</span>
                    <h5 className="card-title text-primary">{event.title}</h5>
                    <p className="text-muted mb-1"><strong>Date:</strong> {event.date}</p>
                    <p className="text-muted mb-1"><strong>Time:</strong> {event.time}</p>
                    <p className="text-muted mb-2"><strong>Location:</strong> {event.location}</p>
                    <p className="card-text">{event.description}</p>
                    <span className={`badge ${event.status === "Upcoming" ? "bg-success" : "bg-danger"}`}>
                      {event.status}
                    </span>
                  </div>
                  <button
                    className="btn btn-outline-primary mt-3"
                    onClick={() => navigate("/register")}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
