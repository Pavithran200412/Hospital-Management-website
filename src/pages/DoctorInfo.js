import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const DoctorInfo = () => {
  const { departmentName } = useParams();
  const decodedDepartment = decodeURIComponent(departmentName);
  const navigate = useNavigate();

  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/doctor-info/${decodedDepartment}`)
      .then((res) => {
        setDoctorData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching doctor data:", err);
        setError("Doctor info not found.");
        setLoading(false);
      });
  }, [decodedDepartment]);

  const handleBack = () => {
    navigate("/doctors");
  };

  return (
    <>
      <Navbar />
      <div className="container text-center py-5">
        <h2 className="mb-4 text-primary">{decodedDepartment} Department</h2>

        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}

        {doctorData && (
          <div className="doctor-info-card p-4 shadow rounded mx-auto" style={{ maxWidth: "600px", background: "#f8f9fa" }}>
            <img
              src={doctorData.photo || doctorData.imageUrl}
              alt={doctorData.name}
              className="img-fluid mb-4 rounded-circle border border-primary"
              style={{
                maxWidth: "180px",
                height: "180px",
                objectFit: "cover",
              }}
            />
            <h4 className="text-dark">{doctorData.name}</h4>
            <p className="mb-1"><strong>Qualification:</strong> {doctorData.qualification}</p>
            <p className="mb-1"><strong>Experience:</strong> {doctorData.experience}</p>
            <p className="text-muted">{doctorData.description}</p>
          </div>
        )}

        <button
          className="btn btn-primary mt-4 px-4 py-2"
          style={{ borderRadius: "25px", fontWeight: "bold" }}
          onClick={handleBack}
        >
          Back to Doctors
        </button>
      </div>
    </>
  );
};

export default DoctorInfo;
