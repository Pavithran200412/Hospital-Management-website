import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

// Importing images manually
import anaesthesiaImg from "../assets/departments/doc1.jpg";
import dentalImg from "../assets/departments/doc2.jpg";
import dermatologyImg from "../assets/departments/doc3.jpg";
import diabetologyImg from "../assets/departments/doc4.jpg";
import emergencyImg from "../assets/departments/doc5.jpg";
import endocrinologyImg from "../assets/departments/doc6.jpg";
import entImg from "../assets/departments/doc7.jpg";
import fetalImg from "../assets/departments/doc8.jpg";

// Department list with image
const departments = [
  { name: "Anaesthesiology", image: anaesthesiaImg },
  { name: "Dental", image: dentalImg },
  { name: "Dermatology", image: dermatologyImg },
  { name: "Diabetology", image: diabetologyImg },
  { name: "Emergency Medicine & Critical Care Unit", image: emergencyImg },
  { name: "Endocrinology", image: endocrinologyImg },
  { name: "ENT", image: entImg },
  { name: "Fetal Medicine", image: fetalImg },
];

const Doctors = () => {
  const navigate = useNavigate();

  const handleCardClick = (dept) => {
    navigate(`/doctor-info/${encodeURIComponent(dept.name)}`, {
      state: { image: dept.image }
    });
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="text-center text-primary mb-4">Specialised Doctors Department</h1>
        <p className="text-center text-muted mb-5">
          World-class infrastructure and cutting-edge facilities, we deliver unparalleled expert
          services tailored to the unique needs of our patients at an affordable cost along with
          holistic and empathetic care.
        </p>

        <div className="row">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              className="col-12 col-sm-6 col-lg-3 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="card h-100 text-center shadow-sm border-0 custom-card"
                style={{ cursor: "pointer" }}
                onClick={() => handleCardClick(dept)}
              >
                <img
                  src={dept.image}
                  className="card-img-top mx-auto mt-4"
                  alt={`Icon for ${dept.name}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    border: "3px solid #dee2e6",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{dept.name}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Card Hover Effects */}
      <style>{`
        .custom-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .custom-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(48, 75, 194, 0.2);
        }

        .custom-card:hover .card-title {
          color: #6f42c1; /* Purple */
        }
      `}</style>
    </>
  );
};

export default Doctors;
