import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Background.jpg"; // If used for CSS or background styling

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/signin"); // Redirect after successful registration
      } else {
        setErrorMessage(data.message || "Failed to register. Try again.");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center mb-4">Sign Up</h2>
        {errorMessage && <p className="alert alert-danger text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <button className="btn btn-link text-decoration-none" onClick={() => navigate("/signin")}>
            Already have an account? Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
