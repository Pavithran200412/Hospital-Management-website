import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";  
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";  
import Footer from "./components/Footer";
import AppointmentForm from "./pages/AppointmentForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/appointment" element={<AppointmentForm/>} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
