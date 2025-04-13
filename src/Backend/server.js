const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Doctor = require("./models/Doctor");
const Service = require("./models/Service");
const Testimonial = require("./models/Testimonial");
const User = require("./models/User");

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve local images from /public/images
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ✅ Connect to MongoDB using the connection URI from .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ User registration route
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ User login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Forgot Password route - generates temporary password
app.post("/api/reset-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "No account found with this email." });
    }

    const tempPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    user.password = hashedPassword;
    await user.save();

    console.log(`Temporary password for ${email}: ${tempPassword}`);

    res.status(200).json({ message: "Temporary password has been set. Check your email (or console log)." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong. Try again later." });
  }
});

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

// ✅ Route to get all services
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching services' });
  }
});

// ✅ Route to get all testimonials
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
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
