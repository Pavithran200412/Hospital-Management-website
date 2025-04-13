import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HomePageImage from "../assets/HomePage.jpg";
import CardImg1 from "../assets/Cards/Card1.jpg";
import CardImg2 from "../assets/Cards/Card2.jpg";
import CardImg3 from "../assets/Cards/Card3.jpg";
import CardImg4 from "../assets/Cards/Card4.png";
import CarouselImg1 from "../assets/Carousel/Carousel1.jpg";
import CarouselImg2 from "../assets/Carousel/Carousel2.jpg";
import CarouselImg3 from "../assets/Carousel/Carousel3.jpg";
import ChatbotIcon from "../assets/chatbot-icon.png";
import "../assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const storedDepartments = localStorage.getItem("departments");

    if (storedDepartments) {
      setDepartments(JSON.parse(storedDepartments));
    } else {
      const data = [
        { name: "Anaesthesiology", description: "Expert care in surgical anesthesia and pain management." },
        { name: "Dental", description: "Comprehensive dental treatments and oral health services." },
        { name: "Dermatology", description: "Skin care solutions for all types of dermatological conditions." },
        { name: "Diabetology", description: "Dedicated diabetes management and lifestyle care." },
        { name: "Emergency Medicine & Critical Care Unit", description: "24/7 emergency response and critical care services." },
        { name: "Endocrinology", description: "Hormone-related care including thyroid, diabetes, and metabolic issues." },
        { name: "ENT", description: "Specialized treatment for ear, nose, and throat disorders." },
        { name: "Fetal Medicine", description: "Advanced care for maternal and fetal health during pregnancy." },
      ];

      setDepartments(data);
      localStorage.setItem("departments", JSON.stringify(data));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container text-center my-5">
        <h1 className="title">
          Welcome to <span>MedCare Hospital</span>
        </h1>
        <p className="subtitle">Your trusted healthcare provider.</p>
        <img
          src={HomePageImage}
          alt="Hospital Banner"
          className="img-fluid homepage-image"
          style={{ width: "100%", height: "auto", maxHeight: "600px" }}
        />
      </main>

      {/* About Us Section */}
      <section className="py-5 px-4">
        <div className="container border rounded shadow p-4">
          <h2 className="text-center fw-bold mb-4">About Us</h2>
          <p className="lead text-justify">
            Welcome to MedCare Hospitals Pvt Ltd, a leading healthcare institution in Chromepet, Chennai, Tamil Nadu committed to delivering world-class medical services.
            With state-of-the-art infrastructure and a highly skilled team of doctors, we provide comprehensive, patient-centered care across multiple specialties.
          </p>
          <ul className="list-unstyled">
            <li><b>Cardiology & Heart Care:</b> Advanced diagnostics, angioplasty, bypass surgery.</li>
            <li><b>Neurology & Neurosurgery:</b> Stroke management, brain & spine surgeries.</li>
            <li><b>Orthopedics & Joint Replacement:</b> Knee, hip replacement, sports injury care.</li>
            <li><b>Oncology & Cancer Care:</b> Chemotherapy, radiation, and surgical oncology.</li>
            <li><b>Women & Child Healthcare:</b> Maternity, pediatrics, and fertility treatments.</li>
            <li><b>Gastroenterology & Liver Care:</b> Endoscopy, bariatric & liver transplant services.</li>
            <li><b>Pulmonology & Respiratory Care:</b> Asthma, COPD, and advanced lung treatments.</li>
            <li><b>24/7 Emergency Services:</b> Quick response emergency care and ambulance services.</li>
          </ul>
        </div>
      </section>

      {/* Hospital Introduction Video */}
      <section className="py-5 px-4 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Take a Virtual Tour of MedCare Hospital</h2>

          {/* Uncomment below for local video */}
          {/* <video width="100%" height="auto" controls className="shadow rounded">
            <source src={require("../assets/videos/hospital.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}

          {/* YouTube Embed */}
          <div className="ratio ratio-16x9">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1hV7NBT0pIY?si=7AEk87wtfFZzgvCr" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-5 px-4 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Departments</h2>
          <div className="row">
            {departments.map((dept, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title text-primary fw-semibold">{dept.name}</h5>
                    <p className="card-text text-muted">{dept.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">24/7 Emergency Care</h2>
        <div className="row">
          {[CardImg1, CardImg2, CardImg3, CardImg4].map((img, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={img} className="card-img-top" alt={`Card ${index + 1}`} />
                <div className="card-body text-center">
                  <p className="card-text fw-medium">
                    {[
                      "Expert doctors available for specialized care.",
                      "Modern facilities equipped with advanced technology.",
                      "24/7 emergency care and support.",
                      "Lab Expert available.",
                    ][index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Carousel Section */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide my-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          {[CarouselImg1, CarouselImg2, CarouselImg3].map((img, idx) => (
            <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx} data-bs-interval="2000">
              <img src={img} className="d-block w-100" alt={`Slide ${idx + 1}`} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{["ICU", "Neurology", "Quality & Risk Management"][idx]}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Chatbot Button */}
      <div className="chatbot-container position-fixed bottom-0 end-0 m-4">
        <button className="btn btn-primary rounded-circle p-3" onClick={() => setChatOpen(!chatOpen)}>
          <img src={ChatbotIcon} alt="Chatbot" style={{ width: "30px", height: "30px" }} />
        </button>
        {chatOpen && (
          <div className="chatbot-window mt-2 bg-white border rounded shadow p-2" style={{ width: "300px", height: "400px" }}>
            <iframe
              src="https://your-chatbot-url.com"
              title="Chatbot"
              className="w-100 h-100"
              style={{ border: "none" }}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
