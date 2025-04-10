import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HomePageImage from "../assets/HomePage.jpg";
import CardImg1 from "../assets/Cards/Card1.jpg";
import CardImg2 from "../assets/Cards/Card2.jpg";
import CardImg3 from "../assets//Cards/Card3.jpg";
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

  // Fetch departments dynamically (mocked for now)
    // Fetch departments dynamically (updated to new departments)
    useEffect(() => {
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
      <section className="py-12 px-4 md:px-12 flex justify-center">
        <div className="max-w-4xl w-full mx-auto p-6 border-container rounded-lg shadow-lg relative">
          <h1 className="text-3xl font-bold text-blue-900 mb-4 text-left">
            &nbsp;&nbsp;About Us
          </h1>
          <p className="text-lg text-gray-700 text-justify leading-relaxed mb-4">
            <h5>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome
              to MedCare Hospitals Pvt Ltd, a leading healthcare institution in
              Chromepet,Chennai, Tamil Nadu committed to delivering world-class
              medical services. With state-of-the-art infrastructure and a
              highly skilled team of doctors, we provide comprehensive,
              patient-centered care across multiple specialties.
            </h5>
          </p>

          {/* Specialties List */}
          <ul className="text-lg text-gray-700 text-justify leading-relaxed list-none space-y-2">
            <li>
              {" "}
              <b>Cardiology & Heart Care</b> – Advanced diagnostics, angioplasty,
              bypass surgery.
            </li>
            <li>
              {" "}
              <b>Neurology & Neurosurgery</b> – Stroke management, brain & spine
              surgeries.
            </li>
            <li>
              {" "}
              <b>Orthopedics & Joint Replacement</b> – Knee, hip replacement,
              sports injury care.
            </li>
            <li>
              {" "}
              <b>Oncology & Cancer Care</b> – Chemotherapy, radiation, and
              surgical oncology.
            </li>
            <li>
              {" "}
              <b>Women & Child Healthcare</b> – Maternity, pediatrics, and
              fertility treatments.
            </li>
            <li>
              {" "}
              <b>Gastroenterology & Liver Care</b> – Endoscopy, bariatric &
              liver transplant services.
            </li>
            <li>
              {" "}
              <b>Pulmonology & Respiratory Care</b> – Asthma, COPD, and advanced
              lung treatments.
            </li>
            <li>
              {" "}
              <b>Excellence in Healthcare</b> – Providing world-class medical
              services with cutting-edge technology.
            </li>
            <li>
              {" "}
              <b>Multispecialty Expertise</b> – Specialized departments in
              cardiology, neurology, orthopedics, oncology, maternity care, and
              more.
            </li>
            <li>
              {" "}
              <b>Highly Skilled Professionals</b> – A team of experienced doctors,
              surgeons, and healthcare specialists.
            </li>
            <li>
              {" "}
              <b>State-of-the-Art Facilities</b> – Modern infrastructure,
              advanced diagnostic labs, ICUs, and operation theaters.
            </li>
            <li>
              {" "}
              <b>24/7 Emergency Services</b> – Quick response emergency care and
              ambulance services available around the clock.
            </li>
            <li>
              {" "}
              <b>Patient-Centered Approach</b> – Personalized treatment plans
              with a focus on compassionate care.
            </li>
            <li>
              {" "}
              <b>Advanced Technology</b> – Utilizing AI-driven diagnostics,
              robotic surgeries, and telemedicine for better patient outcomes.
            </li>
            <li>
              {" "}
              <b>Commitment to Quality</b> – Accredited healthcare institution
              maintaining global safety and treatment standards.
            </li>
            <li>
              {" "}
              <b>Health & Wellness Programs</b> – Preventive health checkups,
              vaccinations, and wellness counseling for a healthier community.
            </li>
          </ul>

          {/* Border Effects */}
          <span className="border-effect border-top"></span>
          <span className="border-effect border-end"></span>
          <span className="border-effect border-bottom"></span>
          <span className="border-effect border-start"></span>
        </div>
      </section>

 {/* ✅ Dynamic Departments Section */}
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
<section className="cards-container container my-5">
  <h2 className="text-2xl font-bold text-center mb-4">24/7 Emergency Care</h2>
  <div className="row justify-content-center">
    {[CardImg1, CardImg2, CardImg3, CardImg4].map((img, index) => (
      <div key={index} className="col-md-6 col-lg-3 mb-4">
        <div className="card h-100 shadow-sm">
          <img src={img} className="card-img-top" alt={`Card ${index + 1}`} />
          <div className="card-body d-flex flex-column justify-content-center text-center">
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
      </div>
    ))}
  </div>
</section>


      {/* Carousel Section */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide my-5">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
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
