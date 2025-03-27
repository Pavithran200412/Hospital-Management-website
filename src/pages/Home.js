import React from "react";
import Navbar from "../components/Navbar";
import HomePageImage from "../assets/HomePage.jpg";
import CardImg1 from "../assets/Card1.jpg";
import CardImg2 from "../assets/Card2.jpg";
import CardImg3 from "../assets/Card3.jpg";
import CardImg4 from "../assets/Card4.png";
import CarouselImg1 from "../assets/Carousel1.jpg"; // Add carousel images
import CarouselImg2 from "../assets/Carousel2.jpg";
import CarouselImg3 from "../assets/Carousel3.jpg";
import "../assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
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
        />
      </main>

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
              <h5>intensive Care Unit (ICU).</h5>
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
    </div>
  );
};

export default Home;
