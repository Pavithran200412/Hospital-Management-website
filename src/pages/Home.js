import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import Footer Component
import HomePageImage from "../assets/HomePage.jpg";
import CardImg1 from "../assets/Card1.jpg";
import CardImg2 from "../assets/Card2.jpg";
import CardImg3 from "../assets/Card3.jpg";
import CardImg4 from "../assets/Card4.png";
import "../assets/css/styles.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="container text-center my-5">
        <h1 className="title">Welcome to <span>MedCare Hospital</span></h1>
        <p className="subtitle">Your trusted healthcare provider.</p>
        <img src={HomePageImage} alt="Hospital Banner" className="img-fluid homepage-image" />
      </main>

      {/* Cards Section */}
      <section className="cards-container">
        {[CardImg1, CardImg2, CardImg3, CardImg4].map((img, index) => (
          <div key={index} className="card">
            <img src={img} className="card-img-top" alt={`Card ${index + 1}`} />
            <div className="card-body">
              <p className="card-text"><b>{["Expert doctors available for specialized care.", "Modern facilities equipped with advanced technology.", "24/7 emergency care and support.", "Lab Expert available."][index]}</b></p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
