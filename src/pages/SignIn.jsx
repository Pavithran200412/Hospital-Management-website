import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/Background.jpg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Default admin credentials
  const adminEmail = "admin@example.com";
  const adminPassword = "admin123"; // You can change this to the actual admin password

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is logging in as admin
    if (email === adminEmail && password === adminPassword) {
      toast.success("Admin login successful!");
      setTimeout(() => navigate("/admin"), 1500); // Redirect to admin page
      return;
    }

    // Regular login request
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", email);
        toast.success("Login successful!");
        setTimeout(() => navigate("/"), 1500); // Redirect to homepage
      } else {
        toast.error(data.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <div className="auth-card">
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
          <button className="btn btn-secondary w-100 mt-2" onClick={() => navigate("/")} type="button">
            Go to Home 
          </button>
        </form>
        <div className="text-center mt-3">
          <button className="btn btn-link text-decoration-none" onClick={() => navigate("/forgotpassword")}>
            Forgot Password?
          </button>
        </div>
        <div className="text-center mt-2">
          <button className="btn btn-link text-decoration-none" onClick={() => navigate("/signup")}>
            Don't have an account? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
