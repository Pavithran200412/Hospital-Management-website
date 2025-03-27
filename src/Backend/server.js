const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json()); // Allow JSON request body

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
    service: "gmail", // Change this if using another provider (e.g., Outlook, Yahoo)
    auth: {
        user: "vawemo2666@flektel.com", // Replace with your email
        pass: "1234567890", // Replace with your email password
    },
});

// API to send reset password email
app.post("/api/reset-password", async (req, res) => {
    const { email } = req.body;

    // Email message options
    const mailOptions = {
        from: "your-email@gmail.com",  // 🔴 Same as your auth email
        to: email, // Send email to the user
        subject: "Password Reset Request",
        text: `Click on this link to reset your password: http://localhost:3000/reset-password?email=${email}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Reset email sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ message: "Failed to send email." });
    }
});

// Start Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
