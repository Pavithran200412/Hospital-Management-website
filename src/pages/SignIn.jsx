import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Background.jpg"; // If used for CSS or background styling

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token); // Save JWT
        navigate("/"); // Redirect to home
      } else {
        setErrorMessage(data.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center mb-4">Sign In</h2>
        {errorMessage && <p className="alert alert-danger text-center">{errorMessage}</p>}
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
