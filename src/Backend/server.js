const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // <-- Required for static path

const Doctor = require("./models/Doctor");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve local images from /public/images
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/MedCare-Hospital")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Route to get doctor info by department
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

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
