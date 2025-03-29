import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HomePageImage from "../assets/HomePage.jpg";
import CardImg1 from "../assets/Card1.jpg";
import CardImg2 from "../assets/Card2.jpg";
import CardImg3 from "../assets/Card3.jpg";
import CardImg4 from "../assets/Card4.png";
import CarouselImg1 from "../assets/Carousel1.jpg";
import CarouselImg2 from "../assets/Carousel2.jpg";
import CarouselImg3 from "../assets/Carousel3.jpg";
import ChatbotIcon from "../assets/chatbot-icon.png";
import "../assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  const [chatOpen, setChatOpen] = useState(false);

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
        <div className="font-roboto">
            {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
         <b> 
        <h1 className="text-6xl font-bold text-blue-900">About Us</h1>
        </b>
        </div>
    </section>

        {/* About Section */}
      <section className="py-12 px-4 md:px-12 flex justify-center">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-left">Our Story</h2>
            <p className="text-lg text-gray-700 text-justify leading-relaxed">
            Welcome to MedCare Hospitals Pvt Ltd, a leading healthcare institution in Kattankulathur, Chennai, committed to delivering world-class medical services. With state-of-the-art infrastructure and a highly skilled team of doctors, we provide comprehensive, patient-centered care across multiple specialties.

            Our Key Specialties:
              ✔ Cardiology & Heart Care – Advanced diagnostics, angioplasty, bypass surgery.
              ✔ Neurology & Neurosurgery – Stroke management, brain & spine surgeries.
              ✔ Orthopedics & Joint Replacement – Knee, hip replacement, sports injury care.
              ✔ Oncology & Cancer Care – Chemotherapy, radiation, and surgical oncology.
              ✔ Women & Child Healthcare – Maternity, pediatrics, and fertility treatments.
              ✔ Gastroenterology & Liver Care – Endoscopy, bariatric & liver transplant services.
              ✔ Pulmonology & Respiratory Care – Asthma, COPD, and advanced lung treatments.
              </p>
          </div>
        </section>
        </div>

      {/* Cards Section */}
      <section className="cards-container">
        {[CardImg1, CardImg2, CardImg3, CardImg4].map((img, index) => (
          <div key={index} className="card">
            <img src={img} className="card-img-top" alt={`Card ${index + 1}`} />
            <div className="card-body">
              <p className="card-text">
                <b>
                  {[
                    "Expert doctors available for specialized care.",
                    "Modern facilities equipped with advanced technology.",
                    "24/7 emergency care and support.",
                    "Lab Expert available.",
                  ][index]}
                </b>
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Carousel Section */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide my-5">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={CarouselImg1} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Intensive Care Unit (ICU).</h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={CarouselImg2} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Neurology.</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={CarouselImg3} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Quality Assurance and Risk Management.</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Floating Chatbot Button */}
      <div className="chatbot-container">
        <button className="chatbot-button" onClick={() => setChatOpen(!chatOpen)}>
          <img src={ChatbotIcon} alt="Chatbot" className="chatbot-icon" />
        </button>
        {chatOpen && (
          <div className="chatbot-window">
            <iframe
              src="https://your-chatbot-url.com"
              title="Chatbot"
              className="chatbot-iframe"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
