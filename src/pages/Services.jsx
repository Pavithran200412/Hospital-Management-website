import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import appointmentBanner from '../assets/medical-bg.jpg';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ServicesPage = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, testimonialsRes] = await Promise.all([
          axios.get('http://localhost:5000/api/services'),
          axios.get('http://localhost:5000/api/testimonials'),
        ]);

        setServices(servicesRes.data);
        setTestimonials(testimonialsRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load service data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid px-0">
        <img src={appointmentBanner} alt="Appointment Banner" className="img-fluid w-100" />
      </div>

      <div className="container py-5">
        <h1 className="text-center text-primary mb-4">Our Medical Services</h1>
        <p className="text-center text-muted mb-5">
          At <strong>MedCare</strong>, we are committed to delivering exceptional health care with compassion,
          quality, and expertise.
        </p>

        {loading && <p className="text-center">Loading services...</p>}
        {error && <p className="text-center text-danger">{error}</p>}

        <div className="row">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="col-12 col-sm-6 col-lg-3 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card h-100 text-center shadow-sm border-0 custom-card">
                <div className="display-4 mt-4 text-primary">
                  {service.icon || '🩺'}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                  <div className="text-warning mb-2">
                    {'★'.repeat(Math.round(service.rating || 4))}{'☆'.repeat(5 - Math.round(service.rating || 4))}
                  </div>
                </div>
                <div className="mb-4">
                  <button className="btn btn-outline-primary btn-sm me-2" onClick={() => handleLearnMore(service)}>
                    Learn More
                  </button>
                  <button className="btn btn-primary btn-sm" onClick={() => navigate('/appointment')}>
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-5">
          <h2 className="text-center text-secondary mb-4">What Our Patients Say</h2>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {testimonials.map((quote, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="d-flex justify-content-center">
                    <div className="p-4 bg-light rounded shadow-sm w-75 text-center">
                      <p className="mb-0">“{quote}”</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-5 text-center bg-primary text-white py-5 rounded shadow-sm">
          <h2>Need Help Choosing a Service?</h2>
          <p>Our support team is here to guide you. Feel free to chat or contact us anytime.</p>
          <button className="btn btn-light mt-3" onClick={() => navigate('/contact')}>
            Contact Us
          </button>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        className="btn btn-primary chat-btn"
        title="Chat with us"
        onClick={() => alert('Chat feature coming soon!')}
      >
        <i className="fas fa-comment-dots"></i>
      </button>

      {/* Modal */}
      {showModal && selectedService && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedService.name}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>{selectedService.description}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                <button className="btn btn-primary" onClick={() => navigate('/appointment')}>Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style>{`
        .custom-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .custom-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(48, 75, 194, 0.2);
        }

        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #004085;
        }

        .btn-outline-primary:hover {
          background-color: #007bff;
          color: #fff;
        }

        .chat-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          border-radius: 50%;
          padding: 15px;
          z-index: 1050;
          font-size: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
      `}</style>
    </>
  );
};

export default ServicesPage;
