const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const Doctor = require("./models/Doctor");
const Service = require("./models/Service");
const Testimonial = require("./models/Testimonial");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve local images from /public/images
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/MedCare-Hospital")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Route: Get doctor by department
app.get("/api/doctor-info/:department", async (req, res) => {
  const department = decodeURIComponent(req.params.department);
  try {
    const doctor = await Doctor.findOne({ department });
    if (doctor) {
      res.json(doctor);
    } else {
      res.status(404).json({ message: "Doctor info not found." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
});

// Route to get all services
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching services' });
  }
});

// Route to get all testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    const messages = testimonials.map(t => t.message);
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching testimonials' });
  }
});

// ✅ Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
