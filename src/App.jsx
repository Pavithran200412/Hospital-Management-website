import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import AppointmentForm from "./pages/AppointmentForm";
import Doctors from "./pages/Doctors";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import DoctorInfo from "./pages/DoctorInfo"; 

// Components
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor-info/:departmentName" element={<DoctorInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
