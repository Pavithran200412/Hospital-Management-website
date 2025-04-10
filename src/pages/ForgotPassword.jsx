import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Background.jpg"; // Import the CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Password reset email sent! Check your inbox.");
      } else {
        setMessage(data.error || "Failed to send reset email.");
      }
    } catch (error) {
      setMessage("Send reset email. Try again later.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center mb-4">Forgot Password</h2>
        {message && <p className="alert alert-info text-center">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter your email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning w-100">Reset Password</button>
        </form>
        <div className="text-center mt-3">
          <button className="btn btn-link text-decoration-none" onClick={() => navigate("/signin")}>
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
