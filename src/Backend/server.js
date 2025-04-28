const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const Doctor = require("./models/Doctor");
const Service = require("./models/Service");
const Testimonial = require("./models/Testimonial");
const User = require("./models/User");
const Appointment = require("./models/Appointment"); // Import Appointment model
const Registration = require("./models/Registration");
const ContactMessage = require("./models/ContactMessage");


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

// ✅ Appointment submission route
app.post("/api/appointments", async (req, res) => {
  const { name, email, specialty, phone, appointmentDate, appointmentTime } = req.body;

  try {
    // Create a new appointment document
    const appointment = new Appointment({
      name,
      email,
      specialty,
      phone,
      appointmentDate,
      appointmentTime,
    });

    // Save the appointment to the database
    await appointment.save();

    // Respond with success message
    res.status(201).json({ message: "Appointment successfully booked!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error booking the appointment." });
  }
});

// Event Registration Route
app.post("/api/event-register", async (req, res) => {
  const { name, email, phone, event } = req.body;

  try {
    const registration = new Registration({ name, email, phone, event });
    await registration.save();

    res.status(201).json({ message: "Event registration successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to register for event." });
  }
});

// Route to get all appointments
app.get("/api/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find(); // Fetch all appointments from the DB
    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching appointments" });
  }
});

// ✅ Confirm Appointment Route (PUT)
app.put("/api/appointments/confirm/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Update the appointment status (you can add a status field in your Appointment model)
    appointment.status = "Confirmed"; // Assuming you have a status field
    await appointment.save();

    res.status(200).json({ message: "Appointment confirmed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to confirm appointment" });
  }
});

// Delete Appointment Route (DELETE)
app.delete("/api/appointments/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Use deleteOne for deletion
    await Appointment.deleteOne({ _id: id });

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res.status(500).json({ message: "Failed to delete appointment" });
  }
});
// ✅ Contact Form Submission Route
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Create a new contact message
    const newMessage = new ContactMessage({
      name,
      email,
      subject,
      message,
    });

    // Save the message to the database
    await newMessage.save();

    // Respond with a success message
    res.status(201).json({ message: "Your message has been sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send message. Please try again later." });
  }
});
// New route to get user count
router.get('/count', async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

// ✅ Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
